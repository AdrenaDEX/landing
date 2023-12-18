'use client';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import FAQ from './components/FAQ';
import Hero from './sections/Hero';
import Community from './sections/Community';
import TwoToken from './sections/TwoToken';

import diamondImg from './assets/diamond.png';

import Image from 'next/image';

export default function Home() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  const [isMidLoaded, setIsMidLoaded] = useState(false);
  const [isBtmLoaded, setIsBtmLoaded] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    if (
      typeof navigator !== 'undefined' &&
      navigator.userAgent.indexOf('Safari') !== -1 &&
      navigator.userAgent.indexOf('Chrome') === -1
    ) {
      setIsSafari(true);
    }
  }, []);

  const isLoaded = isHeaderLoaded && isMidLoaded && isBtmLoaded && !isSafari;
  
  console.log(isLoaded, isHeaderLoaded, isMidLoaded, isBtmLoaded, isSafari);
  return (
    <main>
      <div>
        {(isLoaded || isSafari) && (
          <div
            className={twMerge(
              'border-transparent bg-transparent',
              'fixed w-full p-5 px-10 flex flex-row justify-between items-center border z-20 transition duration-300 fade-in',
            )}
          >
            <p className="font-specialmonster text-2xl mr-5 font-light">
              Adrena
            </p>

            <a href="https://alpha.adrena.xyz/">
              <button className="p-1 sm:p-3 bg-[#4C34A4] w-[100px] sm:w-[200px] font-kavivanar text-sm shadow-xl hover:bg-[#432D87] transition duration-300">
                TRADE NOW
              </button>
            </a>
          </div>
        )}

        <Hero
          isLoaded={isLoaded}
          setIsHeaderLoaded={setIsHeaderLoaded}
          isSafari={isSafari}
        />

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center my-[100px] px-7">
          <div className="text-center">
            <h3 className="text-4xl">INSTANT EXECUTION</h3>
            <p className="max-w-[400px] font-kavivanar">
              Unleash the raw power of Solana with trades that execute in
              miliseconds with NEAR ZERO gas fees. Get the trading experience of
              a CEX with the resillence and reilability of a DEX.
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

        <Community
          setIsMidLoaded={setIsMidLoaded}
          isLoaded={isLoaded}
          isSafari={isSafari}
        />

        <div className="relative">
          <Image
            src={diamondImg}
            alt="seperator"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 rotate-45"
          />
        </div>

        <TwoToken
          setIsBtmLoaded={setIsBtmLoaded}
          isLoaded={isLoaded}
          isSafari={isSafari}
        />

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center my-[100px] px-7">
          <div className="text-center">
            <h3 className="text-4xl">ADX</h3>
            <p className="max-w-[400px] font-kavivanar">
              Increase your winnings without increasing your bankroll Unleash
              our inner degen with up to 50% leverage.
            </p>
          </div>

          <div className="hidden md:block h-[100px] w-[2px] bg-gradient-to-b from-[#2E0E42] via-[#4D2158] to-[#2E0E42]" />

          <div className="text-center">
            <h3 className="text-4xl">ALP</h3>
            <p className="max-w-[400px] font-kavivanar">
              Increase your winnings without increasing your bankroll Unleash
              our inner degen with up to 50% leverage.
            </p>
          </div>
          <div className="hidden md:block h-[100px] w-[2px] bg-gradient-to-b from-[#2E0E42] via-[#4D2158] to-[#2E0E42]" />

          <div className="text-center">
            <h3 className="text-4xl">Rewards</h3>
            <p className="max-w-[400px] font-kavivanar">
              Increase your winnings without increasing your bankroll Unleash
              our inner degen with up to 50% leverage.
            </p>
          </div>
        </div>

        <FAQ />
      </div>
    </main>
  );
}
