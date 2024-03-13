import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { Layout, Fit, Alignment } from '@rive-app/react-canvas';
import Button from '../components/Button';
import RiveAnimation from '../components/RiveAnimation';
import btmImage from '../../../public/Images/btm-monster.png';
import { twMerge } from 'tailwind-merge';

export default function Community({
  isLoaded,
  className,
  setIsBtmLoaded,
}: {
  isLoaded: boolean;
  className?: string;
  setIsBtmLoaded: (v: boolean) => void;
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
    <div className={twMerge('relative', className)}>
      <div className="relative w-full flex px-10 pb-[25em]">
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            filter: 'drop-shadow(0px 0px 40px #000)',
          }}
        >
          <RiveAnimation
            animation="btm-monster"
            layout={
              new Layout({ fit: Fit.Contain, alignment: Alignment.BottomRight })
            }
            className={
              'absolute w-full h-full min-w-[80em] opacity-10 sm:opacity-100 sm:min-w-0 max-w-7xl right-0'
            }
            setIsReady={setIsBtmLoaded}
          />
        </div>

        <div className="text-center md:text-left  md:ml-[10%] lg:ml-[8%] xl:ml-[14%] 2xl:ml-[25%] mt-[3em]">
          <div>
            <h1 className="mb-3 text-center md:text-left">
              Community built and owned
            </h1>

            <p className="mt-8 2xl:text-[1.3em] text-center md:text-left max-w-[44em]">
              Adrena was born out of a singular goal: a DeFi platform owned and
              operated by the people, centered on a powerful token imbued with
              governance and economic utility.
            </p>

            <p className="mt-1">
              Starting with perpetuals, Adrena&apos;s vision is to be the DeFi
              platform that anyone can use, own, and build on.
            </p>
          </div>

          <div className="flex flex-col mt-10 items-center md:items-start">
            <div className="border-b border-width">Concrete steps include:</div>
            <div className="ml-4 flex flex-col mt-4 items-center md:items-start">
              <div className="flex items-center mt-2">
                <div className="bg-white rounded-full h-2 w-2 hidden md:block"></div>
                <span className="ml-2">
                  100% of fee revenue distributed back to the community.
                </span>
              </div>

              <div className="flex items-center">
                <div className="bg-white rounded-full h-2 w-2 hidden md:block"></div>
                <span className="ml-2">
                  On-chain program governed by the DAO with ADX.
                </span>
              </div>

              <div className="flex items-center">
                <div className="bg-white rounded-full h-2 w-2 hidden md:block"></div>
                <span className="ml-2">Open source codebase.</span>
              </div>

              <div className="flex items-center">
                <div className="bg-white rounded-full h-2 w-2 hidden md:block"></div>
                <span className="ml-2">
                  Wide ADX token distribution, liquid ADX emissions.
                </span>
              </div>

              <div className="flex items-center">
                <div className="bg-white rounded-full h-2 w-2 hidden md:block"></div>
                <span className="ml-2">Transparent.</span>
              </div>
            </div>
          </div>

          <Button className="mt-10 ml-auto mr-auto md:ml-0 md:mr-0" />
        </div>
      </div>

      {!isReady ? (
        <Image
          src={btmImage}
          className="absolute w-full bottom-0 right-0 max-w-7xl object-right-bottom -z-10 fade-in-3"
          style={{
            filter: 'drop-shadow(0px 0px 40px #000)',
          }}
          alt="hero illustration"
        />
      ) : null}
    </div>
  );
}
