import React, { useEffect, useState } from 'react';

import sepImg from '../assets/line.png';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { Alignment, Fit, Layout } from '@rive-app/react-canvas';
import Button from '../components/Button';
import RiveAnimation from '../components/RiveAnimation';
import midImage from '../../../public/Images/mid-monster.png';

export default function CommunityCopy({
  isLoaded,
  className,
  setIsMidLoaded,
}: {
  isLoaded: boolean;
  className?: string;
  setIsMidLoaded: (v: boolean) => void;
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
        <div
          className="absolute sm:right-0 w-full h-full"
          style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
        >
          <RiveAnimation
            animation="mid-monster"
            layout={
              new Layout({ fit: Fit.Contain, alignment: Alignment.TopRight })
            }
            className="absolute w-full h-full max-w-2xl xl:max-w-4xl 2xl:max-w-5xl right-0"
            setIsReady={setIsMidLoaded}
          />
        </div>

        <div className={twMerge('flex flex-col px-10 z-30 w-full')}>
          <div className="mt-[24em] sm:mt-[30em] lg:mt-[14em] xl:mt-[12em] 2xl:mt-[18em]">
            <div className="flex flex-col max-w-[40em] items-center ml-[3%] md:ml-[5%] lg:ml-[3%] xl:ml-[1%] 2xl:ml-[10%]">
              <h1 className="mb-3 text-center">Our 2-token model</h1>

              <p className="mt-8 text-center 2xl:text-lg">
                Largely inspired by the 2-token model pioneered by GMX,
                we&apos;ve has added a few improvements to better align
                liquidity providers, token holders, and users with the long term
                interests of the protocol.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-start justify-evenly mt-[10em] w-full max-w-[1300px] ml-auto mr-auto gap-20">
            <div className="flex flex-col w-[25em] items-center border-2 border-white bg-[#052739] p-2">
              <h2 className="text-center">ALP: The Pool Token</h2>

              <div className="flex flex-col w-[20em]">
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

            <div className="flex flex-col w-[25em] items-center border-2 border-white bg-[#052739] p-2">
              <h2 className="text-center">ADX: The Governance Token</h2>

              <div className="flex flex-col w-[20em]">
                <div className="text-center mt-4 2xl:text-lg">
                  Grants its holder voting power within the Adrena ecosystem and
                  USDC yield originating from platform&apos; fees.
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

        {!isReady && (
          <span>
            <Image
              src={midImage}
              style={{
                filter: 'drop-shadow(0px 0px 40px #000)',
              }}
              className="absolute w-full max-w-7xl top-0 right-0 object-right-top -z-10 fade-in-3"
              alt="hero illustration"
            />
          </span>
        )}
      </div>

      <Image
        src={sepImg}
        alt="seperator"
        className="absolute seperator seperator__community__top fade-in-3 z-20"
        style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
      />

      <div className="absolute w-1/4 h-[110%] top-[-150px] z-20 left-0 bg-gradient-to-r from-[#1A293C] gradient__control" />
      <div className="absolute w-1/4 h-[110%] top-[-150px] z-20 right-0 bg-gradient-to-l from-[#1A293C] gradient__control" />
    </div>
  );
}
