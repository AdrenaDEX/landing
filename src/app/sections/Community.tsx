import React from 'react';

import sepImg from '../assets/line.png';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { useRive } from '@rive-app/react-canvas';
import Button from '../components/Button';

export default function Community({
  isLoaded,
  setIsMidLoaded,
}: {
  isLoaded: boolean;
  setIsMidLoaded: (v: boolean) => void;
}) {
  const { RiveComponent } = useRive(
    {
      src: 'midMonster.riv',
      autoplay: true,
      onLoad: () => {
        setIsMidLoaded(true);
      },
    },
    {
      fitCanvasToArtboardHeight: true,
    },
  );

  return (
    <div className="relative z-10">
      <div className="relative w-full h-[90vh] sm:h-[100vh] flex items-center">
        <div
          className="absolute sm:right-0 w-full h-full"
          style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
        >
          <RiveComponent className="absolute w-full h-full max-w-7xl right-0" />
        </div>

        <div className={twMerge('flex flex-col px-10 z-30')}>
          <div className="absolute bottom-[8%] md:bottom-[3%] 2xl:bottom-[8] left-[7%] 2xl:left-[10%] w-[87%] md:w-[55%] lg:w-[45%]">
            <h1 className="text-center sm:text-left">Community owned</h1>

            <p className="mt-8 2xl:text-[1.3em] text-center sm:text-justify">
              Adrena was crafted with one thing in mind... build a DeFi project
              that gives all of It&apos;s value to the community. This is
              something that Solana has lacked and Adrena aims to change the
              narrative. It was built as an open-source, on-chain, unstoppable
              application that anyone can interact with and bulld upon. Token
              holders and users are the ones who decide what is built and how it
              functions. This is the people&apos;s perp DEX.
            </p>

            <Button className="mt-10 ml-auto mr-auto sm:ml-0 sm:mr-0" />
          </div>
        </div>
      </div>

      {isLoaded && (
        <>
          <Image
            src={sepImg}
            alt="seperator"
            className="absolute seperator seperator__community__top fade-in-3 z-20"
            style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
          />
        </>
      )}

      <div className="absolute w-1/4 h-[110%] top-[-150px] z-20 left-0 bg-gradient-to-r from-[#1A2A3D] gradient__control" />
      <div className="absolute w-1/4 h-[110%] top-[-150px] z-20 right-0 bg-gradient-to-l from-[#1A2A3D] gradient__control" />
    </div>
  );
}
