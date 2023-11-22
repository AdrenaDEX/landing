'use client';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import FAQ from './components/FAQ';
import Loader from './components/Loader/Loader';
import Hero from './sections/Hero';
import Community from './sections/Community';
import TwoToken from './sections/TwoToken';

export default function Home() {
  const [y, setY] = useState(0);
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  const [isMidLoaded, setIsMidLoaded] = useState(false);
  const [isBtmLoaded, setIsBtmLoaded] = useState(false);

  const handleScroll = () => {
    setY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isLoaded = isHeaderLoaded && isMidLoaded && isBtmLoaded;

  return (
    <main>
      {isLoaded && (
        <div
          className={twMerge(
            y > 100
              ? ' border-black bg-black/50'
              : 'border-transparent bg-transparent',
            'fixed w-full p-5 px-10 flex flex-row justify-between items-center border z-10 transition duration-300 fade-in',
          )}
        >
          <p className="font-specialmonster text-2xl mr-5 font-light">Adrena</p>

          <a href="https://alpha.adrena.xyz/">
            <button className="p-1 sm:p-3 bg-[#4C34A4] w-[100px] sm:w-[200px] font-kavivanar text-sm">
              TRADE NOW
            </button>
          </a>
        </div>
      )}

      <Hero isLoaded={isLoaded} setIsHeaderLoaded={setIsHeaderLoaded} />

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center my-[100px] px-7">
        <div className="text-center">
          <h3 className="text-4xl">ADX</h3>
          <p className="max-w-[400px] font-kavivanar">
            Increase your winnings without increasing your bankroll Unleash our
            inner degen with up to 50% leverage.
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-4xl">ALP</h3>
          <p className="max-w-[400px] font-kavivanar">
            Increase your winnings without increasing your bankroll Unleash our
            inner degen with up to 50% leverage.
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-4xl">Rewards</h3>
          <p className="max-w-[400px] font-kavivanar">
            Increase your winnings without increasing your bankroll Unleash our
            inner degen with up to 50% leverage.
          </p>
        </div>
      </div>

      <Community setIsMidLoaded={setIsMidLoaded} isLoaded={isLoaded} />

      <TwoToken setIsBtmLoaded={setIsBtmLoaded} isLoaded={isLoaded} />

      <FAQ />
    </main>
  );
}
