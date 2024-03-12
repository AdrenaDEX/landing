import React, { useEffect, useState } from 'react';

import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { Alignment, Fit, Layout } from '@rive-app/react-canvas';
import RiveAnimation from '../components/RiveAnimation';
import FeesImage from '../assets/fees.svg';
import FeesPhoneImage from '../assets/fees-phone.svg';
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
    <div className={twMerge('relative z-10 pb-[5em]', className)}>
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

        <div
          className={twMerge(
            'flex flex-col px-10 z-30 w-full mt-[8em] items-center',
          )}
        >
          <h1 className="">Fees Redistribution</h1>

          <Image
            src={isBigScreen ? FeesImage : FeesPhoneImage}
            className="fade-in-3 w-full max-w-[50em] mt-[4em]"
            alt="fees schema"
          />
        </div>
      </div>
    </div>
  );
}
