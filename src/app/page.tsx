'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import sepImg from './assets/line.png';
import Footer from './Footer';
import Header from './Header';
import useBetterMediaQuery from './hooks/useBetterMediaQuery';
import Community from './sections/Community';
import EarlyProviders from './sections/EarlyProviders';
import FeeDistribution from './sections/FeeDistribution';
import Hero from './sections/Hero';
import Team from './sections/Team';
import Trading from './sections/Trading';
import TwoToken from './sections/TwoToken';

function calculateWidthToDisplay(isBigScreen: boolean) {
  if (isBigScreen) return 'screen4k';
  return 'screen2k';
}

export default function Home() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  const [isBtmLoaded, setIsBtmLoaded] = useState(false);

  const isLoaded = isHeaderLoaded && isBtmLoaded;

  const is4k = useBetterMediaQuery(
    '(min-width: 2561px) and (min-height: 2000px)',
  )
    ? true
    : false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.classList.remove('screen2k', 'screen4k');
    document.body.classList.add(calculateWidthToDisplay(is4k));
  }, [is4k]);

  return (
    <div className={twMerge('flex flex-col relative')}>
      {/* Add a shadow on both sides of the screen when screen is too big */}
      <div className="absolute w-[5em] h-full z-30 left-0 bg-gradient-to-r from-[#1A293C] gradient__control" />
      <div className="absolute w-[5em] h-full z-30 right-0 bg-gradient-to-l from-[#1A293C] gradient__control" />

      <Header isLoaded={isLoaded} is4k={is4k} />

      <Hero
        isLoaded={isLoaded}
        setIsHeaderLoaded={setIsHeaderLoaded}
        is4k={is4k}
      />

      <div className="relative">
        <Image
          src={sepImg}
          alt="separator"
          className={twMerge(
            'absolute fade-in-3 top-[-20px] scale-[3] ',
            is4k
              ? 'top-[-4em] scale-[1]'
              : 'sm:top-[-1em] lg:top-[-2em] 2xl:top-[-4em] sm:scale-[2.5] md:scale-[2] lg:scale-[1]',
          )}
        />
      </div>

      <Trading is4k={is4k} />

      <div className="relative">
        <Image
          src={sepImg}
          alt="separator"
          className={twMerge(
            'absolute fade-in-3 scale-[3] sm:scale-[2.5] md:scale-[2] lg:scale-[1]',
            is4k ? 'top-[-28em]' : '',
          )}
        />
      </div>

      <TwoToken
        className={twMerge('mt-[1em]', is4k ? 'mt-[20em]' : 'lg:mt-[3em]')}
        is4k={is4k}
      />

      <div className="relative">
        <Image
          src={sepImg}
          alt="separator"
          className="absolute fade-in-3 scale-[3] sm:scale-[2.5] md:scale-[2] lg:scale-[1] top-[-1.5em] z-20"
        />
      </div>

      <Community
        className={twMerge('mt-[3em] ', is4k ? 'mt-[4em]' : 'lg:mt-[6em]')}
        setIsBtmLoaded={setIsBtmLoaded}
        isLoaded={isLoaded}
        is4k={is4k}
      />

      <div className="relative">
        <Image
          src={sepImg}
          alt="separator"
          className={twMerge(
            'absolute fade-in-3 top-[-20px] scale-[3] ',
            is4k
              ? 'top-[-4em] scale-[1]'
              : 'sm:top-[-1em] lg:top-[-2em] 2xl:top-[-4em] sm:scale-[2.5] md:scale-[2] lg:scale-[1]',
          )}
        />
      </div>

      <FeeDistribution
        className={twMerge('-z-10 mb-14', is4k ? 'pb-[16em]' : '')}
        is4k={is4k}
      />

      <div className="relative">
        <Image
          src={sepImg}
          alt="separator"
          className={twMerge(
            'absolute fade-in-3 top-[-20px] scale-[3] ',
            is4k
              ? 'top-[-4em] scale-[1]'
              : 'sm:top-[-1em] lg:top-[-2em] 2xl:top-[-4em] sm:scale-[2.5] md:scale-[2] lg:scale-[1]',
          )}
        />
      </div>

      <Team className="pt-14" is4k={is4k} />

      <div className="w-full h-[1px] mb-3 bg-gradient-to-r from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]" />

      <EarlyProviders className="pt-14 pb-8" is4k={is4k} />

      <div className="w-full h-[1px] mb-3 bg-gradient-to-r from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]" />

      <Footer />
    </div>
  );
}
