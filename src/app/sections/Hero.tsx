import React, { useEffect, useState } from 'react';
import logo from '../../../public/Images/adrena-logo.svg';

import Image from 'next/image';

import { Layout, Fit, Alignment } from '@rive-app/react-canvas';
import useBetterMediaQuery from '../hooks/useBetterMediaQuery';
import Button from '../components/Button';
import RiveAnimation from '../components/RiveAnimation';
import heroImage from '../../../public/Images/hero-monster.png';

export default function Hero({
  isLoaded,
  setIsHeaderLoaded,
}: {
  isLoaded: boolean;
  setIsHeaderLoaded: (v: boolean) => void;
}) {
  const isBigScreen = useBetterMediaQuery('(min-width: 500px)');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setIsReady(true);
      }, 500);
    }
  }, [isLoaded]);
  return (
    <div className="relative">
      <div className="relative flex items-center justify-center h-[100vh]">
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            filter: 'drop-shadow(0px 0px 40px #000)',
            // remove event listeners on phone
            pointerEvents: !isBigScreen ? 'none' : 'all',
          }}
        >
          <RiveAnimation
            animation="hero-monster"
            layout={new Layout({ fit: Fit.Cover, alignment: Alignment.Center })}
            className={'absolute top-0 left-0 w-full h-full'}
            automaticallyHandleEvents={true}
            stateMachines="State Machine 1"
            setIsReady={setIsHeaderLoaded}
          />
        </div>

        <div className="flex flex-col gap-5 justify-center text-center items-center fade-in z-10">
          <Image
            src={logo}
            alt="adrena logo"
            className="w-[23em] 2xl:w-[32em]"
          />

          <div className="block h-[2px] w-1/2 mt-4 bg-gradient-to-b from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]" />

          <p className="text-lg max-w-[15em]">
            Trade at the speed of light with up to 100x leverage
          </p>

          <Button className="mt-4" />
        </div>
      </div>

      {!isReady && (
        <span className="absolute w-full h-full top-0 left-0 fade-in-3 -z-10">
          <Image
            src={heroImage}
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            style={{
              filter: 'drop-shadow(0px 0px 40px #000)',
            }}
            alt="hero illustration"
          />
        </span>
      )}
    </div>
  );
}
