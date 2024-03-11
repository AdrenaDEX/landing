import React, { useEffect, useState } from 'react';

import sepImg from '../assets/line.png';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { Alignment, Fit, Layout } from '@rive-app/react-canvas';
import Button from '../components/Button';
import RiveAnimation from '../components/RiveAnimation';
import midImage from '../../../public/Images/mid-monster.png';
import curvedArrowImage from '../assets/curved-arrow.svg';

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
            className="absolute w-full h-full max-w-5xl right-0"
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

      {/*} <Image
        src={sepImg}
        alt="seperator"
        className="absolute seperator seperator__community__bottom fade-in-3 z-20"
        style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
            />*/}

      <div className="absolute w-1/4 h-[110%] top-[-150px] z-20 left-0 bg-gradient-to-r from-[#1A293C] gradient__control" />
      <div className="absolute w-1/4 h-[110%] top-[-150px] z-20 right-0 bg-gradient-to-l from-[#1A293C] gradient__control" />
    </div>
  );
}
