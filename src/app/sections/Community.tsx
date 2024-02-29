import React, { useEffect, useState } from 'react';

import sepImg from '../assets/line.png';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { Alignment, Fit, Layout } from '@rive-app/react-canvas';
import Button from '../components/Button';
import RiveAnimation from '../components/RiveAnimation';
import midImage from '../../../public/Images/mid-monster.png';
import { motion } from 'framer-motion';

export default function Community({
  isLoaded,
  setIsMidLoaded,
}: {
  isLoaded: boolean;
  setIsMidLoaded: (v: boolean) => void;
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
    <div className="relative z-10">
      <div className="relative w-full h-[90vh] sm:h-[100vh] flex items-center">
        <div
          className="absolute sm:right-0 w-full h-full"
          style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
        >
          <RiveAnimation
            animation="mid-monster"
            layout={
              new Layout({ fit: Fit.Contain, alignment: Alignment.TopRight })
            }
            className="absolute w-full h-full max-w-7xl right-0"
            setIsReady={setIsMidLoaded}
          />
        </div>

        <div className={twMerge('flex flex-col px-10 z-30')}>
          <div className="absolute bottom-[8%] md:bottom-[3%] 2xl:bottom-[8] left-[7%] 2xl:left-[10%] w-[87%] md:w-[55%] lg:w-[45%]">
            <h1 className="text-center sm:text-left">Community owned</h1>

            <p className="mt-8 2xl:text-[1.3em] text-center sm:text-justify">
              Adrena was crafted with one thing in mind... build a DeFi project
              that gives all of It&apos;s value to the community. This is
              something that Solana has lacked and Adrena aims to change the
              narrative. It was built as an open-source, on-chain, unstoppable
              application that anyone can interact with and build upon. Token
              holders and users are the ones who decide what is built and how it
              functions. This is the people&apos;s perp DEX.
            </p>

            <Button className="mt-10 ml-auto mr-auto sm:ml-0 sm:mr-0" />
          </div>
        </div>

        {!isReady && (
          <span>
            <Image
              src={midImage}
              style={{
                filter: 'drop-shadow(0px 0px 40px #000)',
              }}
              className="absolute w-full max-w-7xl top-0 right-0 object-right-top -z-10 fade-in-3"
              alt="hero illustration"
            />
          </span>
        )}
      </div>

      <Image
        src={sepImg}
        alt="seperator"
        className="absolute seperator seperator__community__top fade-in-3 z-20"
        style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
      />

      <div className="absolute w-1/4 h-[110%] top-[-150px] z-20 left-0 bg-gradient-to-r from-[#1A293C] gradient__control" />
      <div className="absolute w-1/4 h-[110%] top-[-150px] z-20 right-0 bg-gradient-to-l from-[#1A293C] gradient__control" />
    </div>
  );
}
