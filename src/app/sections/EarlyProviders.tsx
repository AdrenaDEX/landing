import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import forgdImg from '../../../public/Images/early-contributors/forgd.png';
import littleUnusualImg from '../../../public/Images/early-contributors/little-unusual.png';
import sec3Img from '../../../public/Images/early-contributors/sec3.png';
import syntaxImg from '../../../public/Images/early-contributors/syntax.png';
import vendingMachineImg from '../../../public/Images/early-contributors/vending-machine.png';
import otterSecImg from '../../../public/Images/early-contributors/ottersec.png';
import { twMerge } from 'tailwind-merge';

const investors: string[] = [
  'CryptoChris',
  'BlockchainBella',
  'SatoshiSavvy',
  'TokenTrendz',
  'DigitalDave',
  'CryptoCindy',
  'CoinConnor',
  'AltcoinAmy',
  'BlockchainBrad',
  'CryptoCarla',
  'TokenTom',
  'CoinKate',
  'CryptoCole',
  'AltcoinAlice',
  'BlockchainBen',
  'CryptoChloe',
  'TokenTerry',
  'DigitalDiana',
  'CoinCameron',
  'CryptoCassie',
  'BlockchainBilly',
  'TokenTracy',
  'AltcoinAaron',
  'CryptoClaire',
  'CoinCaleb',
  'BlockchainBrianna',
  'TokenTyler',
  'DigitalDylan',
  'CryptoCharlotte',
  'CoinCasey',
  'AltcoinAva',
  'BlockchainBobby',
  'TokenTina',
  'CryptoCarter',
  'CoinCaroline',
  'DigitalDanielle',
  'AltcoinAdam',
  'BlockchainBeth',
  'TokenTrevor',
  'CryptoCrystal',
  'CoinColton',
  'BlockchainBonnie',
  'CryptoCorey',
  'AltcoinAmelia',
  'TokenTabitha',
  'DigitalDevon',
  'CoinChristina',
  'BlockchainBarry',
  'CryptoChelsea',
  'TokenTimothy',
  'AltcoinAndrew',
  'BlockchainBecca',
  'CoinConnor',
  'CryptoClaudia',
  'TokenTiffany',
  'DigitalDerek',
  'BlockchainBianca',
  'AltcoinAlex',
  'CoinCassandra',
  'CryptoCraig',
  'TokenTamara',
  'DigitalDarren',
  'BlockchainBrittany',
  'CryptoCody',
  'CoinCourtney',
  'AltcoinAnna',
  'TokenTucker',
  'DigitalDrew',
  'BlockchainBethany',
  'CryptoCaleb',
  'CoinCheryl',
  'AltcoinAiden',
  'TokenTristan',
  'DigitalDaisy',
  'BlockchainBruce',
  'CryptoCaroline',
  'CoinChad',
  'AltcoinAria',
  'TokenTaylor',
  'DigitalDennis',
  'BlockchainBetsy',
  'CryptoCynthia',
];

export default function EarlyProviders({ className }: { className?: string }) {
  return (
    <div className={twMerge('relative', className)}>
      <div className="relative w-full flex flex-col overflow-hidden items-center">
        <div className="flex flex-wrap items-center justify-evenly w-[90%] mt-8 border border-gray-300/10 relative pb-4 pt-4">
          <div className="absolute top-[-0.75em] left-auto right-auto text-4xl font-titletext bg-[#16293d] w-[10em] items-center flex justify-center">
            PARTNERS
          </div>

          <Image
            className="w-[4em] h-auto m-4"
            src={vendingMachineImg}
            alt="Vending Machine Logo"
          />

          <Image
            className="w-[10em] h-auto m-4 cursor-pointer"
            src={forgdImg}
            alt="Forgd Logo"
            onClick={() => window.open('https://forgd.com/')}
          />

          <Image
            className="w-[3em] h-auto m-4 cursor-pointer"
            src={sec3Img}
            alt="Sec3 Logo"
            onClick={() => window.open('https://www.sec3.dev/')}
          />

          <Image
            className="w-[3em] h-auto m-4 cursor-pointer"
            src={otterSecImg}
            alt="Ottersec Logo"
            onClick={() => window.open('https://osec.io')}
          />

          <Image
            className="w-[10em] h-auto m-4 cursor-pointer"
            src={syntaxImg}
            alt="Syntax Logo"
            onClick={() => window.open('https://syntaxlabs.xyz/')}
          />

          <Image
            className="w-[14em] h-auto m-4 cursor-pointer"
            src={littleUnusualImg}
            alt="Little Unusual Logo"
            onClick={() => window.open('https://littleunusual.co/landing-page')}
          />
        </div>
      </div>

      <div className="flex items-center justify-center w-[90%] mt-14 border border-gray-300/10 relative ml-auto mr-auto">
        <div className="absolute top-[-0.8em] left-auto right-auto text-4xl font-titletext bg-[#16293d] w-[17em] items-center flex justify-center">
          COMMUNITY CONTRIBUTORS
        </div>

        <div className="mt-14 w-full flex flex-wrap items-center justify-center gap-x-8 gap-y-2 pl-4 pr-4 pb-8">
          {investors.map((investor) => {
            return (
              <div
                key={investor}
                className="opacity-30 w-[8em] flex items-center justify-center"
              >
                {investor}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
