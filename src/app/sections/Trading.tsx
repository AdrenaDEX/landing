import Image from 'next/image';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import screenshotTrade from '../assets/screenshot-trade.png';
import LeverageSlider from '../components/LeverageSlider';
import useTokenPrices from '../hooks/useWatchTokenPrices';

export default function Trading({ is4k }: { is4k: boolean }) {
  const tokenPrices = useTokenPrices();
  const [leverage, setLeverage] = useState<number>(100);

  const itemClasses =
    'text-center flex flex-col items-center justify-start relative w-[25em]';

  return (
    <div className="flex flex-col justify-center items-center relative overflow-hidden">
      <Image
        src={screenshotTrade}
        height={is4k ? 200 : 432}
        width={is4k ? 1400 : 702}
        alt="app's trade page screenshot"
        className={twMerge(
          'mt-10 max-w-full shadow-2xl shadow-black absolute top-[-7em]  -z-30 opacity-30 rounded-b-3xl',
          is4k ? 'top-[-22em]' : 'sm:top-[-11.5em] md:top-[-12em]',
        )}
      />

      <h1
        className={twMerge(
          'text-center',
          is4k
            ? 'mt-[0.5em] top-[-2em] text-[12em]'
            : 'mt-[2em] mb-[1.5em] sm:mt-[1em] sm:mb-[0.5em] sm:text-[5em] lg:mt-[0.5em] lg:mb-[0.2em] lg:text-[6em]',
        )}
      >
        Trade with us
      </h1>

      {/* Limit the width to force having max 2 items per row */}
      <div
        className={twMerge(
          'flex mt-20 pl-4 pr-4 w-full',
          is4k
            ? 'mb-[20em] flex-row flex-wrap gap-y-0 justify-evenly gap-x-10 text-xl mt-[8em]'
            : 'mb-8 flex-col gap-x-20 gap-y-28 items-center lg:flex-row lg:flex-wrap lg:gap-y-0 lg:max-w-[1200px] lg:justify-evenly lg:gap-x-10 lg:text-sm xl:max-w-[1200px] xl:text-sm 2xl:max-w-full 2xl:gap-x-0 2xl:text-sm',
        )}
      >
        <div className={twMerge(itemClasses, is4k ? 'w-[35em]' : 'h-[15em]')}>
          <h2 className={twMerge(is4k ? 'mb-8 text-[3em]' : 'mb-4')}>
            TRADE FAST
          </h2>

          <p
            className={twMerge(
              'text-center',
              is4k
                ? 'max-w-[700px] text-[1.5em]'
                : 'max-w-[400px] 2xl:text-[1.3em]',
            )}
          >
            Experience OPOS: Trades executed in milliseconds with near-zero gas
            fees. Enjoy the trading efficiency of a centralized exchange (CEX)
            with the resilience and reliability of a decentralized exchange
            (DEX).
          </p>
        </div>
        <div
          className={twMerge(
            'hidden lg:block w-[2px] bg-gradient-to-b from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]',
            is4k ? 'h-[300px] mt-[6em]' : 'h-[100px]',
          )}
        />
        <div className={twMerge(itemClasses, is4k ? 'w-[35em]' : 'h-[15em]')}>
          <h2 className={twMerge(is4k ? 'mb-8 text-[3em]' : 'mb-4')}>
            TRADE BIG
          </h2>

          <div
            className={twMerge(
              'absolute -z-10 text-[10em] font-mono top-[0.5em] opacity-5 nowrap',
              is4k ? 'text-[12em]' : '',
            )}
          >
            x{leverage}
          </div>

          <p
            className={twMerge(
              'text-center',
              is4k
                ? 'max-w-[700px] text-[1.5em]'
                : 'max-w-[400px] 2xl:text-[1.3em]',
            )}
          >
            Go long and short with up to 100x Leverage, All while maintaining
            100% self custody.
          </p>

          <LeverageSlider
            value={leverage}
            className={twMerge(
              'w-full h-full font-mono',
              is4k ? 'mt-[3em]' : 'mt-3',
            )}
            onChange={(v: number) => {
              setLeverage(v);
            }}
            is4k={is4k}
          />
        </div>
        <div
          className={twMerge(
            'hidden lg:block w-[2px] bg-gradient-to-b from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]',
            is4k ? 'h-[300px] mt-[6em]' : 'h-[100px]',
          )}
        />
        <div className={twMerge(itemClasses, is4k ? 'w-[35em]' : 'h-[15em]')}>
          <h2 className={twMerge(is4k ? 'mb-8 text-[3em]' : 'mb-4')}>
            BEST PRICE EXECUTION
          </h2>

          <p
            className={twMerge(
              'text-center',
              is4k
                ? 'max-w-[700px] text-[1.5em]'
                : 'max-w-[400px] 2xl:text-[1.3em]',
            )}
          >
            No spread, no slippage. The oracle price is your entry price.
          </p>

          {tokenPrices ? (
            <div
              className={twMerge(
                'flex flex-col min-w-[15em] w-full absolute -z-10 font-bold opacity-5 top-[2em]',
                is4k ? 'max-w-[35em]' : 'max-w-[18em]',
              )}
            >
              {Object.entries(tokenPrices).map(([symbol, price]) => {
                if (price === null) return null;

                return (
                  <div
                    key={symbol}
                    className={twMerge(
                      'w-full flex justify-between items-center p-1 text-3xl',
                      is4k ? 'text-[4em]' : '',
                    )}
                  >
                    <span>{symbol}</span>
                    <span>${Number(price.toFixed(2)).toLocaleString()}</span>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <div
          className={twMerge(
            'hidden lg:block w-[2px] bg-gradient-to-b from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]',
            is4k ? 'h-[300px] mt-[6em]' : 'h-[100px]',
          )}
        />
        <div
          className={twMerge(
            itemClasses,
            is4k ? 'w-[35em]' : 'relative bottom-16 lg:bottom-0',
          )}
        >
          <h2 className={twMerge(is4k ? 'mb-8 text-[3em]' : 'mb-4')}>
            FAIR ACCESS
          </h2>

          <p
            className={twMerge(
              'text-center',
              is4k
                ? 'max-w-[700px] text-[1.5em]'
                : 'max-w-[400px] 2xl:text-[1.3em]',
            )}
          >
            Trades are between you and the community owned on-chain program.
            There is no keeper. Compete fairly for access through Solana&apos;s
            embedded priority fee system.
          </p>
        </div>
      </div>
    </div>
  );
}
