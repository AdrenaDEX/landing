import React, { useEffect, useState } from 'react';

import sepImg from '../assets/line.png';
import Image from 'next/image';
import { Layout, Fit, Alignment } from '@rive-app/react-canvas';
import Button from '../components/Button';
import RiveAnimation from '../components/RiveAnimation';
import { AnimatePresence, motion } from 'framer-motion';
import btmImage from '../../../public/Images/btm-monster.png';

export default function TwoToken({
  isLoaded,
  setIsBtmLoaded,
}: {
  isLoaded: boolean;
  setIsBtmLoaded: (v: boolean) => void;
}) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setIsReady(true);
      }, 500);
    }
  }, [isLoaded]);

  return (
    <div className="relative">
      <div className="relative w-full h-[100vh] flex items-center px-10">
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            filter: 'drop-shadow(0px 0px 40px #000)',
          }}
        >
          <RiveAnimation
            animation="btm-monster"
            layout={
              new Layout({ fit: Fit.Contain, alignment: Alignment.BottomRight })
            }
            className={'absolute w-full h-full max-w-7xl right-0'}
            setIsReady={setIsBtmLoaded}
          />
        </div>

        <div className="absolute top-[8%] 2xl:top-[12%] left-[7%] 2xl:left-[10%] w-[87%] md:w-[55%] lg:w-[45%]">
          <div>
            <h1 className="mb-3 text-center sm:text-left">Our 2-token model</h1>

            <p className="mt-8 2xl:text-[1.3em] text-center sm:text-justify">
              Building upon the 2-token model system used by perps dex innovator
              GMX, we&apos;ve taken their token structure to the next level,
              providing token holders with as much control and value as possible
              to help shape Adrena long term.
            </p>

            <p className="mt-2 2xl:text-[1.3em] text-center sm:text-justify">
              Our governance and utility token, ADX, accrues 30% of the
              platform&apos;s generated fees. ALP is the liquidity provider
              token that accrues 70% of the platform&apos;s generated fees. All
              of this is supplemented with our attractive distribution model
              which rewards ALL participants of the platform.
            </p>
          </div>

          <Button className="mt-10 ml-auto mr-auto sm:ml-0 sm:mr-0" />
        </div>
      </div>

      <Image
        src={sepImg}
        alt="seperator"
        className="absolute seperator seperator__top fade-in"
        style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
      />

      <div className="absolute w-1/4 h-[120%] top-0 left-0 bg-gradient-to-r from-[#1A293C] gradient__control" />
      <div className="absolute w-1/4 h-[120%] top-0 right-0 bg-gradient-to-l from-[#1A293C] gradient__control" />

      {!isReady && (
        <Image
          src={btmImage}
          className="absolute w-full bottom-0 right-0 max-w-7xl object-right-bottom -z-10 fade-in-3"
          style={{
            filter: 'drop-shadow(0px 0px 40px #000)',
          }}
          alt="hero illustration"
        />
      )}
    </div>
  );
}
