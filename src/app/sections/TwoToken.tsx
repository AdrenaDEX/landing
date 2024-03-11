import React, { useEffect, useState } from 'react';

import sepImg from '../assets/line.png';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import monsterFace1 from '../assets/monster-face-1.png';
import monsterFace2 from '../assets/monster-face-2.png';

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
      <div className="relative w-full flex">
        <div className={twMerge('flex flex-col px-10 z-30 w-full pb-[10em]')}>
          <div className="flex flex-col mt-[8em]">
            <h1 className="mb-3 text-center">Our 2-token model</h1>

            <p className="mt-8 text-center 2xl:text-lg max-w-[60em] self-center">
              Largely inspired by the 2-token model pioneered by GMX, we&apos;ve
              has added a few improvements to better align liquidity providers,
              token holders, and users with the long term interests of the
              protocol. After 10% of revenues are used to buy back ADX, 30% of
              the remaining revenue is distributed to ADX stakers and 70% to
              ALP. This distribution is weighted more to people who have locked
              their ADX or ALP, rewarding long term beneficiaries of the
              protocol.
            </p>
          </div>

          <div className="flex flex-wrap items-start justify-center mt-[3em] gap-x-5 gap-y-10 md:gap-x-10 self-center">
            <div className="flex flex-col items-center justify-start w-[90%] sm:w-[45%] sm:min-w-[16em] sm:max-w-[35em] sm:h-full border-2 border-white rounded-2xl bg-[#10103030] p-6 shadow-lg shadow-[#00000050]">
              <div className="flex flex-col border-b-2 border-white w-full min-h-20 pb-4 shrink-0 items-center">
                <h2 className="text-center">The Pool Token</h2>
                <div className="italic flex items-center">
                  aka <h3 className="ml-2">ALP</h3>
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

            <div className="flex flex-col items-center justify-start w-[90%] sm:w-[45%] sm:min-w-[16em] sm:max-w-[35em] sm:h-full border-2 border-white rounded-2xl bg-[#10103030] p-6 shadow-lg shadow-[#00000050]">
              <div className="flex flex-col border-b-2 border-white w-full min-h-20 pb-4 shrink-0 items-center">
                <h2 className="text-center">The Governance Token</h2>
                <div className="italic flex items-center">
                  aka <h3 className="ml-2">ADX</h3>
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
          '-z-30 absolute opacity-10',
          // mobile
          'hidden',
          // small screen
          'sm:block sm:w-[40em] sm:h-[40em] sm:bottom-[0em] sm:left-[-20em]',
          // large screens
          'lg:w-[50%] lg:h-auto lg:bottom-[-1em] lg:left-[-2%]',
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
          '-z-30 absolute opacity-10',
          // mobile
          'w-[50em] h-[50em] bottom-[0em] right-[-25em]',
          // small screen
          'sm:w-[40em] sm:h-[40em] sm:bottom-[0em] sm:right-[-20em]',
          // large screens
          'lg:w-[50%] lg:h-auto lg:bottom-[-1em] lg:right-[-2%]',
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

      <Image
        src={sepImg}
        alt="seperator"
        className="absolute seperator seperator__community__bottom fade-in-3 z-20"
        style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
      />

      <div className="absolute w-1/4 h-[110%] top-[-150px] z-50 left-0 bg-gradient-to-r from-[#1A293C] gradient__control" />
      <div className="absolute w-1/4 h-[110%] top-[-150px] z-50 right-0 bg-gradient-to-l from-[#1A293C] gradient__control" />
    </div>
  );
}
