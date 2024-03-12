import React, { useEffect, useState } from 'react';

import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { Alignment, Fit, Layout } from '@rive-app/react-canvas';
import RiveAnimation from '../components/RiveAnimation';
import feesImage from '../assets/fees.svg';
import feesPhoneImage from '../assets/fees-phone.svg';
import usdcImage from '../assets/usdc.svg';
import useBetterMediaQuery from '../hooks/useBetterMediaQuery';

export default function FeeDistribution({
  isLoaded,
  className,
  setIsMidLoaded,
}: {
  isLoaded: boolean;
  className?: string;
  setIsMidLoaded: (v: boolean) => void;
}) {
  const [isReady, setIsReady] = useState(false);
  const isBigScreen = useBetterMediaQuery('(min-width: 750px)');

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setIsReady(true);
      }, 500);
    }
  }, [isLoaded]);

  return (
    <div
      className={twMerge('relative z-10 pb-[5em] overflow-hidden', className)}
    >
      <div className="relative w-full h-full flex">
        <div
          className="absolute sm:right-0 w-full h-full"
          style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
        >
          {/*{
            <RiveAnimation
              animation="mid-monster"
              layout={
                new Layout({ fit: Fit.Contain, alignment: Alignment.TopRight })
              }
              className={
                'absolute w-full h-full min-w-[70em] opacity-10 sm:opacity-100 sm:min-w-0 max-w-5xl left-0 transform scale-x-[-1]'
              }
              setIsReady={setIsMidLoaded}
            />
          }*/}
        </div>

        <Image
          src={usdcImage}
          className="absolute hidden sm:block w-[40%] left-[-20%] top-[35%] opacity-5 grayscale"
          alt="fees schema"
        />

        <Image
          src={usdcImage}
          className="absolute hidden sm:block w-[40%] right-[-20%] top-[35%] opacity-5 grayscale"
          alt="fees schema"
        />

        <div
          className={twMerge(
            'flex flex-col px-10 z-30 w-full mt-[8em] items-center',
          )}
        >
          <h1 className="text-center">100% Fees Redistribution</h1>

          <Image
            src={isBigScreen ? feesImage : feesPhoneImage}
            className="fade-in-3 w-full max-w-[50em] mt-[4em]"
            alt="fees schema"
          />
        </div>
      </div>
    </div>
  );
}
