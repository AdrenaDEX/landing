import Lottie from 'lottie-react';
import React from 'react';
import animationData from '../optimzedData3.json';
import sepImg from '../assets/line.png';
import Image from 'next/image';

export default function TwoToken({
  isLoaded,
  setIsBtmLoaded,
}: {
  isLoaded: boolean;
  setIsBtmLoaded: (v: boolean) => void;
}) {
  const renderSettings = {
    preserveAspectRatio: 'xMidYMid slice',
    className: 'lottie-svg-class lottie-svg-class__two-token',
  };

  return (
    <div className="relative">
      <div className="relative w-full h-[100vh] flex items-center px-10 overflow-hidden">
        <div
          className="absolute z-[-1] transform-gpu right-[0px] bottom-[-200px] xl:bottom-0 md:right-0 w-full h-full"
          style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
        >
          <Lottie
            rendererSettings={renderSettings}
            animationData={animationData}
            loop={true}
            onDOMLoaded={() => setIsBtmLoaded(true)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h2 className="text-6xl mb-3 font-openbrush">Our 2-token model</h2>
            <p className="mb-3 max-w-[600px] font-kavivanar">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p className="mb-3 max-w-[600px] font-kavivanar">
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
        <Image
          src={sepImg}
          alt="seperator"
          className="absolute seperator seperator__top fade-in-3"
        />
      )}
    </div>
  );
}
