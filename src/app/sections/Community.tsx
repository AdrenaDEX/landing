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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <a href="https://alpha.adrena.xyz/">
            <button className="p-3 bg-[#EA34A9] w-[200px] font-kavivanar">
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
