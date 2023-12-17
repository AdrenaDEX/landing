import React from 'react';
import sepImg from '../assets/line.png';
import Image from 'next/image';
import { DotLottiePlayer, PlayerEvents } from '@dotlottie/react-player';

export default function Hero({
  isLoaded,
  setIsHeaderLoaded,
  isSafari,
}: {
  isLoaded: boolean;
  setIsHeaderLoaded: (v: boolean) => void;
  isSafari: boolean;
}) {

  return (
    <div className="relative">
      <div className="relative h-[100vh] overflow-hidden">
        <DotLottiePlayer
          src="https://lottie.host/bff35b7e-d9d0-42e1-896f-72e86fdf85ca/qb08eDCUKX.lottie"
          autoplay={!isSafari}
          loop={!isSafari}
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid slice',
            className: 'lottie-svg-class',
          }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            filter: 'drop-shadow(0px 0px 40px #000)',
          }}
          onEvent={(event: PlayerEvents) => {
            if (event === PlayerEvents.Ready) {
              setIsHeaderLoaded(true);
            }
          }}
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