import React from 'react';

import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import feesImage from '../assets/fees.svg';
import feesPhoneImage from '../assets/fees-phone.svg';
import usdcImage from '../assets/usdc.svg';
import useBetterMediaQuery from '../hooks/useBetterMediaQuery';

export default function FeeDistribution({ className }: { className?: string }) {
  const isBigScreen = useBetterMediaQuery('(min-width: 750px)');

  return (
    <div
      className={twMerge('relative z-10 pb-[5em] overflow-hidden', className)}
    >
      <div className="relative w-full h-full flex">
        <Image
          src={usdcImage}
          className="absolute hidden sm:block w-[40%] left-[-20%] top-[35%] opacity-5 grayscale"
          alt="fees schema"
        />

        <Image
          src={usdcImage}
          className="absolute hidden sm:block w-[40%] right-[-20%] top-[35%] opacity-5 grayscale"
          alt="fees schema"
        />

        <div
          className={twMerge(
            'flex flex-col px-10 z-30 w-full mt-[8em] items-center',
          )}
        >
          <h1 className="text-center">100% Fees Redistribution</h1>

          <Image
            src={isBigScreen ? feesImage : feesPhoneImage}
            className="fade-in-3 w-full max-w-[50em] mt-[4em]"
            alt="fees schema"
          />
        </div>
      </div>
    </div>
  );
}
