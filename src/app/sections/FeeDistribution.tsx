import React, { useEffect, useState } from 'react';

import { twMerge } from 'tailwind-merge';
import { Alignment, Fit, Layout } from '@rive-app/react-canvas';
import RiveAnimation from '../components/RiveAnimation';

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

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setIsReady(true);
      }, 500);
    }
  }, [isLoaded]);

  return (
    <div className={twMerge('relative z-10 h-[100vh]', className)}>
      <div className="relative w-full h-full flex">
        <div
          className="absolute sm:right-0 w-full h-full"
          style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
        >
          <RiveAnimation
            animation="mid-monster"
            layout={
              new Layout({ fit: Fit.Contain, alignment: Alignment.TopRight })
            }
            className={
              'absolute w-full h-full min-w-[80em] opacity-10 sm:opacity-100 sm:min-w-0 max-w-7xl right-0'
            }
            setIsReady={setIsMidLoaded}
          />
        </div>

        <div className={twMerge('flex flex-col px-10 z-30 w-full mt-[20em]')}>
          <div className="flex flex-col max-w-[40em] items-left ml-[2%] mt-[1.5em] 2xl:ml-[25%]">
            <h1>Flow of Fees</h1>
          </div>

          <h2 className="mt-[8em] ml-[8em] font-mono 2xl:ml-[24%]">
            INSERT FEE FLOW HERE
          </h2>
        </div>
      </div>
    </div>
  );
}
