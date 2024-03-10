'use client';
import { useEffect, useState } from 'react';

import Hero from './sections/Hero';
import Community from './sections/Community';
import TwoToken from './sections/TwoToken';

import diamondImg from './assets/diamond.png';
import githubLogo from './assets/github.svg';
import twitterLogo from './assets/twitter.svg';
import longTradeIcon from './assets/long-arrow.svg';
import shortTradeIcon from './assets/short-arrow.svg';
import screenshotTrade from './assets/screenshot-trade-2.png';

import Image from 'next/image';
import Link from 'next/link';
import Button from './components/Button';
import useTokenPrices from './hooks/useWatchTokenPrices';
import LeverageSlider from './components/LeverageSlider';
import { twMerge } from 'tailwind-merge';

export default function Home() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  const [isMidLoaded, setIsMidLoaded] = useState(false);
  const [isBtmLoaded, setIsBtmLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const tokenPrices = useTokenPrices();
  const [leverage, setLeverage] = useState<number>(50);

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

  const itemClasses =
    'text-center flex flex-col items-center justify-start relative w-[25em] lg:h-[15em]';

  return (
    <>
      {isLoaded && (
        <div className="border-transparent bg-transparent fixed w-full p-5 px-10 flex flex-row justify-between items-center border z-30 transition duration-300 fade-in max-w-[2000px] m-auto">
          <p className="font-specialmonster text-2xl mr-5 tracking-normal">
            Adrena
          </p>

          <Button className="p-2 w-[125px] sm:w-[175px] text-sm" />
        </div>
      )}

      <Hero
        isLoaded={isLoaded}
        setIsHeaderLoaded={setIsHeaderLoaded}
        setProgress={setProgress}
      />

      <div className="flex flex-col justify-center items-center relative">
        <Image
          src={screenshotTrade}
          height={432}
          width={702}
          alt="app's trade page screenshot"
          className="mt-10 max-w-full shadow-2xl shadow-black absolute top-[-7em] sm:top-[-11.5em] md:top-[-12em] -z-30 opacity-30 rounded-b-3xl"
        />

        <h1 className="mt-[2em] text-center mb-[1.5em]">Trading</h1>

        {/* Limit the width to force having max 2 items per row */}
        <div
          className={twMerge(
            'flex mt-20 pl-4 pr-4 w-full',
            // Small screen
            'flex-col gap-x-20 gap-y-28 items-center',
            // Large screen
            'lg:flex-row lg:flex-wrap lg:gap-y-0 lg:max-w-[1200px] lg:justify-evenly lg:gap-x-10 lg:text-sm',
            // Extra large screen
            'xl:max-w-[1200px] xl:text-sm',
            '2xl:max-w-full 2xl:gap-x-0 2xl:text-sm',
          )}
        >
          <div className={itemClasses}>
            <h2 className="mb-4">TRADE INSTANT</h2>

            <p className="max-w-[400px] text-center 2xl:text-[1.3em]">
              Experience OPOS: Trades Executed in Milliseconds with Near-Zero
              Gas Fees. Enjoy the Trading Efficiency of a Centralized Exchange
              (CEX) with the Resilience and Reliability of a Decentralized
              Exchange (DEX).
            </p>
          </div>

          <div className="hidden lg:block h-[100px] w-[2px] bg-gradient-to-b from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]" />

          <div className={twMerge(itemClasses, 'h-[15em]')}>
            <h2 className="mb-4">TRADE BIG</h2>

            {/*<Image
            src={longTradeIcon}
            height={50}
            width={50}
            alt="long trade icon"
            className="absolute top-[-8em] w-60 -z-10 opacity-[8%]"
          />

          <Image
            src={shortTradeIcon}
            height={50}
            width={50}
            alt="long trade icon"
            className="absolute bottom-[-8em] w-60 -z-10 opacity-[8%]"
              />*/}

            <div className="absolute -z-10 text-[10em] font-mono top-[0.5em] opacity-5 nowrap">
              x{leverage}
            </div>

            <p className="max-w-[400px] text-center 2xl:text-[1.3em]">
              Go Long and Short with Up to 50x Leverage, All while Maintaining
              100% Self Custody.
            </p>

            <LeverageSlider
              value={leverage}
              className="mt-3 w-full font-mono"
              onChange={(v: number) => {
                setLeverage(v);
              }}
            />
          </div>

          <div className="hidden 2xl:block h-[100px] w-[2px] bg-gradient-to-b from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]" />

          <div className={twMerge(itemClasses, 'h-[15em]')}>
            <h2 className="mb-4">TRADE AT FAIR PRICE</h2>

            <p className="max-w-[400px] text-center 2xl:text-[1.3em]">
              No Spread, No Slippage. Execute at Oracle Price.
            </p>

            {tokenPrices ? (
              <div className="flex flex-col min-w-[15em] w-full max-w-[18em] absolute -z-10 font-bold opacity-5 top-[2em]">
                {Object.entries(tokenPrices).map(([symbol, price], index) => {
                  if (price === null) return null;

                  return (
                    <div
                      key={symbol}
                      className="w-full flex justify-between items-center p-1 text-3xl"
                    >
                      <span>{symbol}</span>
                      <span>${Number(price.toFixed(2)).toLocaleString()}</span>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>

          <div className="hidden lg:block h-[100px] w-[2px] bg-gradient-to-b from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]" />

          <div
            className={twMerge(itemClasses, 'relative bottom-16 lg:bottom-0')}
          >
            <h2 className="mb-4">FAIR ACCESS</h2>

            <p className="max-w-[400px] text-center 2xl:text-[1.3em]">
              Trades are between you and the on-chain program. There is no
              keeper. Compete fairly for access through Solana&apos;s embedded
              priority fee system.
            </p>
          </div>

          {/*<div className={itemClasses}>
            <h2 className="mb-4">FEES TRANSAPARENCY</h2>

            <p className="max-w-[400px] text-center 2xl:text-[1.3em]">
              All fee parameters are disclosed upfront, and all calculations are
              open-source. You&apos;ll be charged a fee upon position opening,
              borrow fees while the position is active, and a fee upon position
              closure. An additional fee applies if liquidated.
            </p>
              </div>*/}
        </div>
      </div>

      {/*
        
        
          <div className="hidden md:block h-[100px] w-[2px] bg-gradient-to-b from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]" />
        
        <div className="text-center flex flex-col items-center">
          <h2 className="mb-4">COMMUNITY OWNED</h2>

          <p className="max-w-[400px] text-center 2xl:text-[1.3em]">
            100% of revenues generated are distributed to token holders: 90% in
            USDC real yield, 10% in ADX token buy backs.
          </p>
      </div>*/}

      <Community
        className="mt-[8em] lg:mt-[6em]"
        setIsMidLoaded={setIsMidLoaded}
        isLoaded={isLoaded}
      />

      <div className="relative">
        <Image
          src={diamondImg}
          alt="seperator"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 rotate-45"
        />
      </div>

      <TwoToken setIsBtmLoaded={setIsBtmLoaded} isLoaded={isLoaded} />

      <div className="relative flex flex-col md:flex-row gap-10 justify-center items-center my-[100px] px-7">
        <div className="text-center flex flex-col items-center">
          <h2 className="mb-4">ADX</h2>

          <p className="max-w-[400px] text-center 2xl:text-[1.3em]">
            Designed to foster community engagement and decentralized
            decision-making, ADX holders have the opportunity to shape the
            direction of the platform through governance proposals and voting
            mechanisms.
          </p>
        </div>

        <div className="hidden md:block h-[100px] w-[2px] bg-gradient-to-b from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]" />

        <div className="text-center flex flex-col items-center">
          <h2 className="mb-4">ALP</h2>

          <p className="max-w-[400px] text-center 2xl:text-[1.3em]">
            ALP Token, short for Adrena Liquidity Protocol Token, is the
            cornerstone of a revolutionary ecosystem designed to empower
            individuals in their financial endeavors.
          </p>
        </div>

        <div className="hidden md:block h-[100px] w-[2px] bg-gradient-to-b from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]" />

        <div className="text-center flex flex-col items-center">
          <h2 className="mb-4">Rewards</h2>

          <p className="max-w-[400px] text-center 2xl:text-[1.3em]">
            Adrena ecosystem offers a diverse range of opportunities for earning
            rewards and shaping the future of finance.
          </p>
        </div>
      </div>

      {/* <FAQ /> */}

      <div className="w-full h-[1px] mb-3 bg-gradient-to-r from-[#1A2A3D] via-[#2B3A55] to-[#1A2A3D]" />

      <footer className="flex flex-row gap-3 justify-center p-3 items-center ">
        {/* <p className="font-specialmonster">Adrena</p> */}
        <div className="flex flex-row gap-6 justify-center items-center">
          <Link
            href="https://github.com/orgs/AdrenaDEX/repositories"
            target="_blank"
          >
            <Image
              className="hover:opacity-90 cursor-pointer"
              src={githubLogo}
              alt="github icon"
              width="32"
              height="32"
            />
          </Link>

          <Link href="https://twitter.com/AdrenaProtocol" target="_blank">
            <Image
              className="hover:opacity-90 cursor-pointer"
              src={twitterLogo}
              alt="twitter icon"
              width="32"
              height="32"
            />
          </Link>
        </div>
        {/* <a href="https://alpha.adrena.xyz/">
          <button className="p-1 bg-[#4C34A4] w-[100px] text-sm shadow-xl hover:bg-[#432D87] transition duration-300 rounded-full">
            TRADE NOW
          </button>
        </a> */}
      </footer>
    </>
  );
}
