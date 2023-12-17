import React from 'react';

import sepImg from '../assets/line.png';
import Image from 'next/image';
import { DotLottiePlayer, PlayerEvents } from '@dotlottie/react-player';

export default function TwoToken({
  isLoaded,
  setIsBtmLoaded,
  isSafari,
}: {
  isLoaded: boolean;
  setIsBtmLoaded: (v: boolean) => void;
  isSafari: boolean;
}) {

  return (
    <div className="relative">
      <div className="relative w-full h-[100vh] flex items-center px-10 overflow-hidden">
        <div
          className="absolute z-[-1] transform-gpu right-[0px] bottom-[-200px] xl:bottom-0 md:right-0 w-full h-full two__token__lottie"
          style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
        >
          <DotLottiePlayer
            src="https://lottie.host/ca7440ff-9d7f-41a5-8453-368370b28e73/JItEGVrTE7.lottie"
            autoplay={!isSafari}
            loop={!isSafari}
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid slice',
              className: 'lottie-svg-class lottie-svg-class__two-token',
            }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              filter: 'drop-shadow(0px 0px 40px #000)',
            }}
            onEvent={(event: PlayerEvents) => {
              if (event === PlayerEvents.Ready) {
                setIsBtmLoaded(true);
              }
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h2 className="text-6xl mb-3 font-openbrush">Our 2-token model</h2>
            <p className="mb-3 max-w-[600px] font-kavivanar">
              Building upon the 2-token model system used by perps dex innovator
              GMX, we&apos;ve taken their token structure to the next level,
              providing token holders with the as much control and value
              possible to help shape Adrena long term.
            </p>

            <p className="mb-3 max-w-[600px] font-kavivanar">
              Our governance and utility token, ADX, accrues 30% of the
              platform&apos;s generated fees. ALP is the liquidity provider
              token that accrues 70% of the platform&apos;s generated fees. All
              of this is supplemented with our attractive distribution model
              which rewards ALL participants of the platform.
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
        <Image
          src={sepImg}
          alt="seperator"
          className="absolute seperator seperator__top fade-in-3"
        />
      )}
    </div>
  );
}