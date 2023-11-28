import React from 'react';
import Lottie from 'lottie-react';

import animationData from '../optimzedData2.json';
import sepImg from '../assets/line.png';
import Image from 'next/image';

export default function Community({
  isLoaded,
  setIsMidLoaded,
}: {
  isLoaded: boolean;
  setIsMidLoaded: (v: boolean) => void;
}) {
  const renderSettings = {
    preserveAspectRatio: 'xMidYMid slice',
    className: 'lottie-svg-class',
  };

  return (
    <div className="relative">
      <div className="relative w-full h-[100vh] flex items-center px-10 overflow-hidden">
        <div
          className="absolute z-[-1] transform-gpu top-0 right-0 w-full h-full"
          style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
        >
          <Lottie
            rendererSettings={renderSettings}
            animationData={animationData}
            loop={true}
            onDOMLoaded={() => setIsMidLoaded(true)}
          />
        </div>

        <div className="flex flex-col gap-3 mt-[500px] sm:mt-0">
          <div className="max-w-[600px]">
            <h2 className="text-6xl mb-3 ">Coummunity owned</h2>
            <p className="mb-3 font-kavivanar">
              Adrena was constructed with with one thing in mind... build a DeFi
              project that gives all of It's value to the community. This is
              something that Solana has lacked and Adrena aims to change the
              narrative. It was built as an open-sourced, on-chain, ustoppable
              application that anyone can interact with and bulld upon. Token
              holders and users are the ones who decide what is built and how it
              functions. This is the people's perp DEX.
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
            className="absolute seperator seperator__community__top fade-in-3"
          />
          <Image
            src={sepImg}
            alt="seperator"
            className="absolute seperator seperator__top fade-in-3 hidden sm:block"
          />
        </>
      )}
    </div>
  );
}
