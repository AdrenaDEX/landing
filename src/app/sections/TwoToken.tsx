import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import monsterFace1 from '../assets/monster-face-1.png';
import monsterFace2 from '../assets/monster-face-2.png';
import adxIcon from '../../../public/Images/adrena_logo_adx_color.svg';
import alpIcon from '../../../public/Images/adrena_logo_alp_color.svg';

export default function Community({
  isLoaded,
  className,
}: {
  isLoaded: boolean;
  className?: string;
}) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setIsReady(true);
      }, 500);
    }
  }, [isLoaded]);

  return (
    <div className={twMerge('relative z-10', className)}>
      <div className="relative w-full flex pb-[8em] md:pb-0">
        <div className={twMerge('flex flex-col px-10 z-30 w-full')}>
          <div className="flex flex-col mt-[5em]">
            <h1 className="text-center mt-[1em] mb-[1.5em] sm:text-[5em] sm:mt-[0.5em] sm:mb-[0.5em] lg:mt-0 lg:mb-[0.2em] lg:text-[6em]">
              Our 2-token model
            </h1>

            <p className="mt-8 text-center 2xl:text-lg max-w-[60em] self-center">
              Largely inspired by the 2-token model pioneered by GMX, we&apos;ve
              has added a few improvements to better align liquidity providers,
              token holders, and users with the long term interests of the
              protocol. 10% of revenues are used to buy back ADX, while 30% of
              the revenue is distributed to ADX stakers and 70% to ALP. This
              distribution is weighted more to people who have locked their ADX
              or ALP, rewarding long term beneficiaries of the protocol.
            </p>
          </div>

          <div className="flex flex-wrap items-start justify-center gap-x-5 gap-y-10 md:gap-x-10 self-center mt-[5em]">
            <div
              className={twMerge(
                'flex flex-col items-center justify-start p-6 bg-[#16293d] rounded-2xl',
                'w-[90%] md:w-[25%] md:min-w-[17.5em] md:max-w-[35em] md:h-full md:pb-16',
                'border-t-2 border-l-2 border-r-2 border-b-2 md:border-b-0 border-white',
              )}
            >
              <div className="flex flex-col border-b-2 border-white w-full min-h-20 pb-4 shrink-0 items-center relative">
                <h2 className="text-center">The Pool Token</h2>
                <div className="italic flex items-center">
                  aka <h3 className="ml-2">ALP</h3>
                  <Image
                    src={alpIcon}
                    alt="ALP icon"
                    className="w-8 h-8 ml-3"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-auto mb-auto">
                <div className="text-center mt-4 2xl:text-lg">
                  The token collateral providers receive in exchange for
                  pledging their assets to the protocol. It represents a share
                  of the liquidity pool.
                </div>

                <div className="text-center mt-2 2xl:text-lg">
                  ALP tokens receive USDC yield from fees, directly paid to the
                  pool, naturally increasing their value.
                </div>

                <div className="text-center mt-2 2xl:text-lg">
                  When staked, they generate bonus USDC yield depending on
                  lock-duration directly paid to the token owner.
                </div>
              </div>
            </div>

            <div
              className={twMerge(
                'flex flex-col items-center justify-start p-6 bg-[#16293d] rounded-2xl',
                'w-[90%] md:w-[25%] md:min-w-[17.5em] md:max-w-[35em] md:h-full md:pb-16',
                'border-t-2 border-l-2 border-r-2 border-b-2 md:border-b-0 border-white',
              )}
            >
              <div className="flex flex-col border-b-2 border-white w-full min-h-20 pb-4 shrink-0 items-center">
                <h2 className="text-center">The Gov Token</h2>
                <div className="italic flex items-center">
                  aka <h3 className="ml-2">ADX</h3>
                  <Image
                    src={adxIcon}
                    alt="ADX icon"
                    className="w-8 h-8 ml-3"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-auto mb-auto">
                <div className="text-center mt-4 2xl:text-lg">
                  Grants its holder voting power within the Adrena ecosystem and
                  USDC yield originating from platform&apos;s fees.
                </div>

                <div className="text-center mt-2 2xl:text-lg">
                  In liquid form: receives votes in governance and USDC yield.
                </div>

                <div className="text-center mt-2 2xl:text-lg">
                  When staked: receives ADX emissions and multipliers on yield
                  and governance (depending on stake duration)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={twMerge(
          '-z-30 absolute',
          // mobile
          'w-[50em] h-[50em] top-0 left-[-25em] opacity-10',
          // small screen
          'sm:w-[40em] sm:h-[40em] sm:top-0 sm:left-[-20em]',
          // medium screen
          'md:opacity-40 md:w-[40em] md:h-[40em] md:top-auto md:bottom-0 md:left-[-20em]',
          // large screens
          'lg:w-[40%] lg:h-auto lg:bottom-[-1em] lg:left-[-13%]',
        )}
      >
        <Image
          src={monsterFace1}
          style={{
            filter: 'drop-shadow(0px 0px 40px #000)',
          }}
          className="w-full h-auto fade-in-3"
          alt="hero illustration"
        />
      </div>
      <div
        className={twMerge(
          '-z-30 absolute',
          // mobile
          'w-[50em] h-[50em] bottom-[0em] right-[-25em] opacity-10',
          // small screen
          'sm:w-[40em] sm:h-[40em] sm:top-0 sm:right-[-20em]',
          // medium screen
          'md:opacity-40 md:w-[40em] md:h-[40em] md:top-auto md:bottom-0 md:right-[-20em]',
          // large screens
          'lg:w-[40%] lg:h-auto lg:bottom-[-1em] lg:right-[-13%]',
        )}
      >
        <Image
          src={monsterFace2}
          style={{
            filter: 'drop-shadow(0px 0px 40px #000)',
          }}
          className="w-full h-auto fade-in-3"
          alt="hero illustration"
        />
      </div>
    </div>
  );
}
