import React from 'react';
import sepImg from '../assets/line.png';

import Image from 'next/image';

import { useRive, Layout, Fit } from '@rive-app/react-canvas';
import useBetterMediaQuery from '../hooks/useBetterMediaQuery';
import Button from '../components/Button';

export default function Hero({
  isLoaded,
  setIsHeaderLoaded,
}: {
  isLoaded: boolean;
  setIsHeaderLoaded: (v: boolean) => void;
}) {
  const isBigScreen = useBetterMediaQuery('(min-width: 500px)');

  const { RiveComponent } = useRive({
    src: 'topMonsterMouse.riv',
    autoplay: true,
    stateMachines: 'State Machine 1',
    automaticallyHandleEvents: true,
    onLoad: () => {
      setIsHeaderLoaded(true);
    },
    layout: new Layout({
      fit: Fit.Cover,
    }),
  });

  return (
    <>
      <div className="relative">
        <div className="relative flex items-center justify-center h-[100vh]">
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              opacity: isLoaded ? '1' : '0',
              transition: 'opacity 0.3s 0.5s',
              filter: 'drop-shadow(0px 0px 40px #000)',
              // remove event listeners
              pointerEvents: !isBigScreen ? 'none' : 'all',
            }}
          >
            <RiveComponent className="absolute w-full h-full" />
          </div>

          {isLoaded && (
            <div className="flex flex-col gap-5 justify-center text-center items-center fade-in z-10">
              <h2 className="text-[6em] mb-5 tracking-normal">Adrena</h2>

              <div className="block h-[2px] w-1/2 mt-4 bg-gradient-to-b from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]" />

              <p className="text-xl max-w-[80%]">
                Trade at the speed of light with up to 50x leverage
              </p>
              <Button />
            </div>
          )}
        </div>

        {isLoaded && (
          <Image
            src={sepImg}
            alt="seperator"
            className="absolute seperator seperator__top fade-in-3"
            style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
          />
        )}
        <div className="absolute w-1/4 h-[120%] top-0 left-0 bg-gradient-to-r from-[#1A2A3D] gradient__control" />
        <div className="absolute w-1/4 h-[120%] top-0 right-0 bg-gradient-to-l from-[#1A2A3D] gradient__control" />
      </div>

      {!isLoaded && (
        <div className="absolute w-full h-full top-0 left-0 flex flex-col gap-5 justify-center text-center items-center fade-in z-50">
          <h2 className="text-[7em] mb-5 font-light blinking tracking-normal">
            Adrena
          </h2>
        </div>
      )}
    </>
  );
}
