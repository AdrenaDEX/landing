import React, { useEffect } from 'react';
import { DotLottiePlayer, PlayerEvents } from '@dotlottie/react-player';

import sepImg from '../assets/line.png';
import Image from 'next/image';

export default function Community({
  isLoaded,
  setIsMidLoaded,
  isSafari,
}: {
  isLoaded: boolean;
  setIsMidLoaded: (v: boolean) => void;
  isSafari: boolean;
}) {

  return (
    <div className="relative">
      <div className="relative w-full h-[100vh] flex items-center px-10 z-10">
        <div
          className="absolute z-[-1] transform-gpu top-[-50px] right-[350px] sm:right-0 w-full h-full"
          style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
        >
          <DotLottiePlayer
            src="https://lottie.host/37e1ec5d-b487-44e1-b4e9-ac7f51500eee/ydhCjShFMH.lottie"
            autoplay={!isSafari}
            loop={!isSafari}
            className="w-[1000px] sm:w-auto"
            onEvent={(event: PlayerEvents) => {
              if (event === PlayerEvents.Ready) {
                setIsMidLoaded(true);
              }
            }}
          />
        </div>

        <div className="flex flex-col gap-3 mt-[500px] sm:mt-0">
          <div className="max-w-[600px]">
            <h2 className="text-6xl mb-3 ">Coummunity owned</h2>
            <p className="mb-3 font-kavivanar">
              Adrena was constructed with with one thing in mind... build a DeFi
              project that gives all of It&apos;s value to the community. This
              is something that Solana has lacked and Adrena aims to change the
              narrative. It was built as an open-sourced, on-chain, ustoppable
              application that anyone can interact with and bulld upon. Token
              holders and users are the ones who decide what is built and how it
              functions. This is the people&apos;s perp DEX.
            </p>
          </div>
          <a href="https://alpha.adrena.xyz/">
            <button className="p-3 bg-[#EA34A9] w-[200px] font-kavivanar shadow-xl hover:opacity-75 transition-opacity duration-300">
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
