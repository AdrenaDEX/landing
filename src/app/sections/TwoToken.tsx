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
  is4k,
}: {
  isLoaded: boolean;
  className?: string;
  is4k: boolean;
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
      <div
        className={twMerge(
          'relative w-full flex pb-[8em] md:pb-0',
          is4k ? 'mt-[-2em]' : '',
        )}
      >
        <div className={twMerge('flex flex-col px-10 z-30 w-full')}>
          <div
            className={twMerge(
              'flex flex-col',
              is4k ? 'mt-[-50em]' : 'mt-[5em]',
            )}
          >
            <h1
              className={twMerge(
                'text-center mt-[1em]',
                is4k
                  ? 'text-[12em]'
                  : 'mb-[1.5em] sm:text-[5em] sm:mt-[0.5em] sm:mb-[0.5em] lg:mt-0 lg:mb-[0.2em] lg:text-[6em]',
              )}
            >
              Our 2-token model
            </h1>

            <p
              className={twMerge(
                'mt-8 text-center max-w-[60em] self-center',
                is4k ? 'text-[3em] mt-[2em]' : 'md:text-lg',
              )}
            >
              Adrena makes several improvements on the 2-token model pioneered
              by GMX, including distributing 100% of revenue and optimizing the
              long term alignment of liquidity providers, token holders, and
              traders. Revenue distribution: 70% to ALP holders and stakers, 20%
              to ADX stakers, and 10% to buy back ADX on the open market.
            </p>
          </div>

          <div
            className={twMerge(
              'flex flex-wrap items-start justify-center gap-x-5 gap-y-10  self-center mt-[5em]',
              is4k ? 'mt-[10em] gap-x-20' : 'md:gap-x-10',
            )}
          >
            <div
              className={twMerge(
                'flex flex-col items-center justify-start p-6 bg-[#16293d] rounded-2xl',
                'w-[90%] md:w-[25%] md:min-w-[17.5em] md:h-full md:pb-16',
                'border-t-2 border-l-2 border-r-2 border-b-2 md:border-b-0 border-white',
                is4k ? 'max-w-[90em] p-10' : 'md:max-w-[35em]',
              )}
            >
              <div className="flex flex-col border-b-2 border-white w-full min-h-20 pb-4 shrink-0 items-center relative">
                <h2
                  className={twMerge('text-center', is4k ? 'text-[4em]' : '')}
                >
                  The Pool Token
                </h2>
                <div
                  className={twMerge(
                    'italic flex items-center',
                    is4k ? 'text-[2em]' : '',
                  )}
                >
                  aka
                  <h3 className={twMerge('ml-2', is4k ? 'text-[1.5em]' : '')}>
                    ALP
                  </h3>
                  <Image
                    src={alpIcon}
                    alt="ALP icon"
                    className={twMerge(
                      is4k ? 'w-[2em] h-[2em] ml-6' : 'w-8 h-8 ml-3',
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-col mt-auto mb-auto">
                <div
                  className={twMerge(
                    'text-center mt-4',
                    is4k ? 'text-[2.5em]' : '2xl:text-lg',
                  )}
                >
                  In exchange for depositing their assets into the protocol
                  liquidity pool, collateral providers receive ALP, a share of
                  the liquidity pool.
                </div>

                <div
                  className={twMerge(
                    'text-center mt-2',
                    is4k ? 'text-[2.5em]' : '2xl:text-lg',
                  )}
                >
                  ALP gains value from platform fees paid to the Adrena
                  liquidity pool, and from appreciation in pool assets.
                </div>

                <div
                  className={twMerge(
                    'text-center mt-2',
                    is4k ? 'text-[2.5em]' : '2xl:text-lg',
                  )}
                >
                  When staked, ALP receives bonus USDC yield and bonus ADX
                  rewards, depending on the duration locked.
                </div>
              </div>
            </div>

            <div
              className={twMerge(
                'flex flex-col items-center justify-start p-6 bg-[#16293d] rounded-2xl',
                'w-[90%] md:w-[25%] md:min-w-[17.5em] md:max-w-[35em] md:h-full md:pb-16',
                'border-t-2 border-l-2 border-r-2 border-b-2 md:border-b-0 border-white',
                is4k ? 'max-w-[90em] p-10' : 'md:max-w-[35em]',
              )}
            >
              <div className="flex flex-col border-b-2 border-white w-full min-h-20 pb-4 shrink-0 items-center">
                <h2
                  className={twMerge('text-center', is4k ? 'text-[4em]' : '')}
                >
                  The Gov Token
                </h2>
                <div
                  className={twMerge(
                    'italic flex items-center',
                    is4k ? 'text-[2em]' : '',
                  )}
                >
                  aka <h3 className="ml-2 text-[1.5em]">ADX</h3>
                  <Image
                    src={adxIcon}
                    alt="ADX icon"
                    className={twMerge(
                      is4k ? 'w-[2em] h-[2em] ml-6' : 'w-8 h-8 ml-3',
                    )}
                  />
                </div>
              </div>

              <div className="flex flex-col mb-auto">
                <div
                  className={twMerge(
                    'text-center mt-4',
                    is4k ? 'text-[2.5em]' : '2xl:text-lg',
                  )}
                >
                  ADX votes in Adrena governance and gets a share of USDC yield
                  from platform fees.
                </div>

                <div
                  className={twMerge(
                    'text-center mt-2',
                    is4k ? 'text-[2.5em]' : '2xl:text-lg',
                  )}
                >
                  When staked, ADX receives bonus USDC yield, bonus ADX rewards,
                  and governance multipliers, depending on the duration locked.
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
