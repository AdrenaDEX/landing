import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import adxImage from '../assets/adrena_logo_adx_color.svg';
import alpImage from '../assets/adrena_logo_alp_color.svg';
import FeeStreamAnimation from '../components/FeeStreamAnimation';

export default function FeeDistribution({ className }: { className?: string }) {
  return (
    <div
      className={twMerge('relative z-10 pb-[5em] overflow-hidden', className)}
    >
      <div className="relative w-full h-full flex">
        <Image
          src={alpImage}
          className="absolute hidden sm:block w-[40%] left-[-20%] top-[35%] opacity-5 grayscale"
          alt="fees schema"
        />

        <Image
          src={adxImage}
          className="absolute hidden sm:block w-[40%] right-[-20%] top-[35%] opacity-5 grayscale"
          alt="fees schema"
        />

        <div
          className={twMerge(
            'flex flex-col px-10 z-30 w-full mt-[5em] items-center',
          )}
        >
          <h1 className="text-center mt-[1em] sm:text-[5em] sm:mt-[0.5em] lg:mt-0 lg:mb-0 lg:text-[6em]">
            100% Fees Redistribution
          </h1>

          <FeeStreamAnimation />
        </div>
      </div>
    </div>
  );
}
