'use client';
import { useEffect, useState } from 'react';

import Hero from './sections/Hero';
import TwoToken from './sections/TwoToken';
import Community from './sections/Community';

import sepImg from './assets/line.png';

import Image from 'next/image';
import Trading from './sections/Trading';
import FeeDistribution from './sections/FeeDistribution';
import Header from './Header';
import Footer from './Footer';

export default function Home() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  const [isMidLoaded, setIsMidLoaded] = useState(false);
  const [isBtmLoaded, setIsBtmLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const isLoaded = isHeaderLoaded && isMidLoaded && isBtmLoaded;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // no scroll during loading
  // useEffect(() => {
  //   if (!isLoaded) {
  //     document.documentElement.style.overflowY = 'hidden';
  //   } else {
  //     document.documentElement.style.overflowY = 'auto';
  //   }
  // }, [isLoaded]);

  const separatorWithTopOffset = (
    <div className="relative">
      <Image
        src={sepImg}
        alt="separator"
        className="absolute fade-in-3 top-[-20px] sm:top-[-1em] lg:top-[-2em] scale-[3] sm:scale-[2.5] md:scale-[2] lg:scale-[1]"
        style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
      />
    </div>
  );

  const separator = (
    <div className="relative">
      <Image
        src={sepImg}
        alt="separator"
        className="absolute fade-in-3 scale-[3] sm:scale-[2.5] md:scale-[2] lg:scale-[1]"
        style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
      />
    </div>
  );

  return (
    <div className="flex flex-col relative">
      {/* Add a shadow on both sides of the screen when screen is too big */}
      <div className="absolute w-[5em] h-full z-30 left-0 bg-gradient-to-r from-[#1A293C] gradient__control" />
      <div className="absolute w-[5em] h-full z-30 right-0 bg-gradient-to-l from-[#1A293C] gradient__control" />

      <Header isLoaded={isLoaded} />

      <Hero
        isLoaded={isLoaded}
        setIsHeaderLoaded={setIsHeaderLoaded}
        setProgress={setProgress}
      />

      {separatorWithTopOffset}

      <Trading className="" />

      {separator}

      <TwoToken className="mt-[1em] lg:mt-[3em]" isLoaded={isLoaded} />

      {separator}

      <Community
        className="mt-[3em] lg:mt-[6em]"
        setIsBtmLoaded={setIsBtmLoaded}
        isLoaded={isLoaded}
      />

      {separatorWithTopOffset}

      <FeeDistribution
        className="-z-10"
        setIsMidLoaded={setIsMidLoaded}
        isLoaded={isLoaded}
      />
      {/*
      <div className="absolute w-1/4 h-[110%] top-[-150px] z-30 left-0 bg-gradient-to-r from-[#1A293C] gradient__control" />
      <div className="absolute w-1/4 h-[110%] top-[-150px] z-30 right-0 bg-gradient-to-l from-[#1A293C] gradient__control" />
    */}
      {/* <FAQ /> */}
      {/*<div className="w-full h-[1px] mb-3 bg-gradient-to-r from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]" />*/}
      <Footer />
    </div>
  );
}
