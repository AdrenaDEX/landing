'use client';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import FAQ from './components/FAQ';
import Hero from './sections/Hero';
import Community from './sections/Community';
import TwoToken from './sections/TwoToken';

import diamondImg from './assets/diamond.png';
import Image from 'next/image';
import { useResize } from './hooks/useResize';

export default function Home() {
  const [y, setY] = useState(0);
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  const [isMidLoaded, setIsMidLoaded] = useState(false);
  const [isBtmLoaded, setIsBtmLoaded] = useState(false);

  //Hook to grab window size
  const [size] = useResize();

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const handleScroll = () => {
    setY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => scrolling());
  }, []);

  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${
      // @ts-ignore
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  const scrolling = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    // @ts-ignore
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;

    requestAnimationFrame(() => scrolling());
  };

  const isLoaded = isHeaderLoaded && isMidLoaded && isBtmLoaded;

  return (
    <main ref={app} className='App'>
      <div ref={scrollContainer} className="scroll">
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
            <button className="p-1 sm:p-3 bg-[#4C34A4] w-[100px] sm:w-[200px] font-kavivanar text-sm shadow-xl hover:bg-[#432D87] transition duration-300">
              TRADE NOW
            </button>
          </a>
        </div>
      )}

      <Hero isLoaded={isLoaded} setIsHeaderLoaded={setIsHeaderLoaded} />

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center my-[100px] px-7">
        <div className="text-center">
          <h3 className="text-4xl">INSTANT EXECUTION</h3>
          <p className="max-w-[400px] font-kavivanar">
            Unleash the raw power of Solana with trades that execute in
            miliseconds with NEAR ZERO gas fees. Get the trading experience of a
            CEX with the resillence and reilability of a DEX.
          </p>
        </div>

        <div className="hidden md:block h-[100px] w-[2px] bg-gradient-to-b from-[#2E0E42] via-[#4D2158] to-[#2E0E42]" />

        <div className="text-center">
          <h3 className="text-4xl">50X LEVERAGE</h3>
          <p className="max-w-[400px] font-kavivanar">
            Long and short your favorite cryptocurrencies with up to 50x
            leverage while maintaining 100% self custody and control of your
            assets... Not your keys, not your coins!
          </p>
        </div>

        <div className="hidden md:block h-[100px] w-[2px] bg-gradient-to-b from-[#2E0E42] via-[#4D2158] to-[#2E0E42]" />

        <div className="text-center">
          <h3 className="text-4xl">EARN REAL YIELD</h3>
          <p className="max-w-[400px] font-kavivanar">
            Adrena is focused on actual financial inclu-sion. 100% of the
            revenue generated is passed through to token holders, liqudity
            providers, and users of the platform.
          </p>
        </div>
      </div>

      <Community setIsMidLoaded={setIsMidLoaded} isLoaded={isLoaded} />

      <div className="relative">
        <Image
          src={diamondImg}
          alt="seperator"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 rotate-45"
        />
      </div>

      <TwoToken setIsBtmLoaded={setIsBtmLoaded} isLoaded={isLoaded} />

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center my-[100px] px-7">
        <div className="text-center">
          <h3 className="text-4xl">ADX</h3>
          <p className="max-w-[400px] font-kavivanar">
            Increase your winnings without increasing your bankroll Unleash our
            inner degen with up to 50% leverage.
          </p>
        </div>

        <div className="hidden md:block h-[100px] w-[2px] bg-gradient-to-b from-[#2E0E42] via-[#4D2158] to-[#2E0E42]" />

        <div className="text-center">
          <h3 className="text-4xl">ALP</h3>
          <p className="max-w-[400px] font-kavivanar">
            Increase your winnings without increasing your bankroll Unleash our
            inner degen with up to 50% leverage.
          </p>
        </div>
        <div className="hidden md:block h-[100px] w-[2px] bg-gradient-to-b from-[#2E0E42] via-[#4D2158] to-[#2E0E42]" />

        <div className="text-center">
          <h3 className="text-4xl">Rewards</h3>
          <p className="max-w-[400px] font-kavivanar">
            Increase your winnings without increasing your bankroll Unleash our
            inner degen with up to 50% leverage.
          </p>
        </div>
      </div>

      <FAQ />
      </div>
    </main>
  );
}
