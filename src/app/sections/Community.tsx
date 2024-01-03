import React, { useEffect } from 'react';
import { DotLottiePlayer, PlayerEvents } from '@dotlottie/react-player';

import sepImg from '../assets/line.png';
import monsterImg from '../assets/mid-monster.png';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { MidAnimation } from '../components/MidAnimation';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';

export default function Community({
  isLoaded,
  setIsMidLoaded,
}: {
  isLoaded: boolean;
  setIsMidLoaded: (v: boolean) => void;
}) {
  const { rive, RiveComponent } = useRive(
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
      <div className="relative w-full h-[100vh] flex items-center">
        <div
          className="absolute sm:right-0 w-full h-full"
          style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
        >
          <RiveComponent className="absolute w-full h-full" />
        </div>

        <div className={twMerge('flex flex-col gap-3 ] sm:mt-0 z-10 px-10')}>
          <div className="max-w-[600px]">
            <h2 className="text-6xl mb-3 ">Community owned</h2>

            <p className="mb-3 font-kavivanar">
              Adrena was crafted with with one thing in mind... build a DeFi
              project that gives all of It&apos;s value to the community. This
              is something that Solana has lacked and Adrena aims to change the
              narrative. It was built as an open-source, on-chain, unstoppable
              application that anyone can interact with and bulld upon. Token
              holders and users are the ones who decide what is built and how it
              functions. This is the people&apos;s perp DEX.
            </p>
          </div>
          <a href="https://alpha.adrena.xyz/">
            <button className="p-3 bg-[#EA34A9] w-[200px] font-kavivanar shadow-xl hover:opacity-75 transition-opacity duration-300 rounded-sm">
              TRADE NOW
            </button>
          </a>
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
          {/* <Image
            src={sepImg}
            alt="seperator"
            className="absolute seperator seperator__top fade-in-3 hidden sm:block"
          /> */}
        </>
      )}
    </div>
  );
}
