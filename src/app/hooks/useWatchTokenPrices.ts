import {
  getPythProgramKeyForCluster,
  PythHttpClient,
} from '@pythnetwork/client';
import { Connection, PublicKey } from '@solana/web3.js';
import { useCallback, useEffect, useState } from 'react';

let pythPriceInterval: NodeJS.Timeout | null = null;

// 2 requests are made when fetching prices
const PYTH_PRICE_LOADING_INTERVAL_IN_MS = 3_000;

const config = [
  {
    symbol: 'SOL',
    feedId: new PublicKey('J83w4HKfqxwcq3BEMMkPFSppX3gqekLyLJBexebFVkix'),
  },
  {
    symbol: 'BTC',
    feedId: new PublicKey('HovQMDrbAgAYPCmHVSrezcSmkMtXSSUsLDFANExrZh2J'),
  },
  {
    symbol: 'ETH',
    feedId: new PublicKey('EdVCmQ9FSPcVe5YySXDPCRmc8aDQLKJ9xvYBMZPie1Vw'),
  },
] as const;

const symbols = config.map((item) => item.symbol);

const pythRPC = 'https://api.devnet.solana.com';

const useTokenPrices = () => {
  const [pythClient, setPythClient] = useState<PythHttpClient | null>(null);
  const [tokenPrices, setTokenPrices] = useState<
    { [tokenName in (typeof symbols)[0]]: number | null } | null
  >(null);

  useEffect(() => {
    setPythClient(
      new PythHttpClient(
        new Connection(pythRPC, 'confirmed'),
        getPythProgramKeyForCluster('devnet'),
        'confirmed',
      ),
    );
  }, []);

  const loadPythPrices = useCallback(async () => {
    if (!pythClient) return;

    const prices = await pythClient.getAssetPricesFromAccounts(
      config.map(({ feedId }) => feedId),
    );

    // Store the prices in Store
    setTokenPrices(
      prices.reduce((tokenPrices, { price }, index) => {
        return {
          ...tokenPrices,
          [config[index].symbol]: price ?? null,
        };
      }, {} as { [tokenName in (typeof symbols)[0]]: number | null }),
    );
    // Manually handle dependencies to avoid unwanted refreshs
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!pythClient]);

  useEffect(() => {
    if (!pythClient) {
      return;
    }

    loadPythPrices();

    pythPriceInterval = setInterval(() => {
      loadPythPrices();
    }, PYTH_PRICE_LOADING_INTERVAL_IN_MS);

    return () => {
      if (!pythPriceInterval) {
        return;
      }

      clearInterval(pythPriceInterval);
      pythPriceInterval = null;
    };
    // Manually handle dependencies to avoid unwanted refreshs
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadPythPrices]);

  return tokenPrices;
};

export default useTokenPrices;
