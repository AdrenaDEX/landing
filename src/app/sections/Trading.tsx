import React, { useState } from 'react';

import screenshotTrade from '../assets/screenshot-trade-2.png';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import useTokenPrices from '../hooks/useWatchTokenPrices';
import LeverageSlider from '../components/LeverageSlider';

export default function Trading({ className }: { className?: string }) {
  const tokenPrices = useTokenPrices();
  const [leverage, setLeverage] = useState<number>(50);

  const itemClasses =
    'text-center flex flex-col items-center justify-start relative w-[25em] lg:h-[15em]';

  return (
    <div className="flex flex-col justify-center items-center relative overflow-hidden">
      <Image
        src={screenshotTrade}
        height={432}
        width={702}
        alt="app's trade page screenshot"
        className="mt-10 max-w-full shadow-2xl shadow-black absolute top-[-7em] sm:top-[-11.5em] md:top-[-12em] -z-30 opacity-30 rounded-b-3xl"
      />

      <h1 className="mt-[2em] text-center mb-[1.5em]">Trade with us</h1>

      {/* Limit the width to force having max 2 items per row */}
      <div
        className={twMerge(
          'flex mt-20 pl-4 pr-4 w-full mb-8',
          // Small screen
          'flex-col gap-x-20 gap-y-28 items-center',
          // Large screen
          'lg:flex-row lg:flex-wrap lg:gap-y-0 lg:max-w-[1200px] lg:justify-evenly lg:gap-x-10 lg:text-sm',
          // Extra large screen
          'xl:max-w-[1200px] xl:text-sm',
          '2xl:max-w-full 2xl:gap-x-0 2xl:text-sm',
        )}
      >
        <div className={itemClasses}>
          <h2 className="mb-4">TRADE INSTANT</h2>

          <p className="max-w-[400px] text-center 2xl:text-[1.3em]">
            Experience OPOS: Trades executed in milliseconds with near-zero gas
            fees. Enjoy the trading efficiency of a centralized exchange (CEX)
            with the resilience and reliability of a decentralized exchange
            (DEX).
          </p>
        </div>

        <div className="hidden lg:block h-[100px] w-[2px] bg-gradient-to-b from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]" />

        <div className={twMerge(itemClasses, 'h-[15em]')}>
          <h2 className="mb-4">TRADE BIG</h2>

          <div className="absolute -z-10 text-[10em] font-mono top-[0.5em] opacity-5 nowrap">
            x{leverage}
          </div>

          <p className="max-w-[400px] text-center 2xl:text-[1.3em]">
            Go long and short with up to 50x Leverage, All while maintaining
            100% self custody.
          </p>

          <LeverageSlider
            value={leverage}
            className="mt-3 w-full font-mono"
            onChange={(v: number) => {
              setLeverage(v);
            }}
          />
        </div>

        <div className="hidden 2xl:block h-[100px] w-[2px] bg-gradient-to-b from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]" />

        <div className={twMerge(itemClasses, 'h-[15em]')}>
          <h2 className="mb-4">TRADE AT FAIR PRICE</h2>

          <p className="max-w-[400px] text-center 2xl:text-[1.3em]">
            No spread, no slippage. Execute at oracle price.
          </p>

          {tokenPrices ? (
            <div className="flex flex-col min-w-[15em] w-full max-w-[18em] absolute -z-10 font-bold opacity-5 top-[2em]">
              {Object.entries(tokenPrices).map(([symbol, price], index) => {
                if (price === null) return null;

                return (
                  <div
                    key={symbol}
                    className="w-full flex justify-between items-center p-1 text-3xl"
                  >
                    <span>{symbol}</span>
                    <span>${Number(price.toFixed(2)).toLocaleString()}</span>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>

        <div className="hidden lg:block h-[100px] w-[2px] bg-gradient-to-b from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]" />

        <div className={twMerge(itemClasses, 'relative bottom-16 lg:bottom-0')}>
          <h2 className="mb-4">TRADE WITH FAIR ACCESS</h2>

          <p className="max-w-[400px] text-center 2xl:text-[1.3em]">
            Trades are between you and the community owned on-chain program.
            There is no keeper. Compete fairly for access through Solana&apos;s
            embedded priority fee system.
          </p>
        </div>
      </div>
    </div>
  );
}
