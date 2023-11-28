import React from 'react';
import Lottie from 'lottie-react';

import animationData from '../data.json';
import sepImg from '../assets/line.png';
import Image from 'next/image';

export default function Hero({
  isLoaded,
  setIsHeaderLoaded,
}: {
  isLoaded: boolean;
  setIsHeaderLoaded: (v: boolean) => void;
}) {
  const renderSettings = {
    preserveAspectRatio: 'xMidYMid slice',
    className: 'lottie-svg-class',
  };

  return (
    <div className="relative">
      <div className="relative h-[100vh] overflow-hidden">
        <Lottie
          rendererSettings={renderSettings}
          animationData={animationData}
          loop={true}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            filter: 'drop-shadow(0px 0px 40px #000)',
          }}
          onDOMLoaded={() => setIsHeaderLoaded(true)}
        />

        {isLoaded ? (
          <div className="absolute w-full h-full flex flex-col gap-5 justify-center text-center items-center">
            <h2 className="text-[120px] mb-5 font-light fade-in">Adrena</h2>
            <p className="text-2xl  max-w-[400px] font-kavivanar fade-in">
              Trade at the speed of light with up to 50x leverage
            </p>
            <a href="https://alpha.adrena.xyz/">
              <button className="p-3 bg-[#4C34A4] w-[200px] font-kavivanar fade-in">
                TRADE NOW
              </button>
            </a>
          </div>
        ) : (
          <div className="absolute w-full h-full flex flex-col gap-5 justify-center text-center items-center fade-in z-30">
            <h2 className="text-[100px] md:text-[164px] mb-5 font-light blinking">
              Adrena
            </h2>
          </div>
        )}
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
