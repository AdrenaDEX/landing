import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import adxImage from '../assets/adrena_logo_adx_color.svg';
import alpImage from '../assets/adrena_logo_alp_color.svg';
import FeeStreamAnimation from '../components/FeeStreamAnimation';

export default function FeeDistribution({
  className,
  is4k,
}: {
  className?: string;
  is4k: boolean;
}) {
  return (
    <div
      className={twMerge('relative z-10 pb-[5em] overflow-hidden', className)}
      style={is4k ? { fontSize: '2em' } : {}}
    >
      <div className="relative w-full h-full flex">
        <Image
          src={alpImage}
          className={twMerge(
            'absolute hidden sm:block w-[40%] left-[-20%] top-[35%] opacity-5 grayscale',
          )}
          alt="fees schema"
        />

        <Image
          src={adxImage}
          className="absolute hidden sm:block w-[40%] right-[-20%] top-[35%] opacity-5 grayscale"
          alt="fees schema"
        />

        <div
          className={twMerge(
            'flex flex-col px-10 z-30 w-full items-center',
            is4k ? 'mt-[2em]' : 'mt-[5em]',
          )}
        >
          <h1 className="text-center mt-[1em] sm:text-[5em] sm:mt-[0.5em] lg:mt-0 lg:mb-0 lg:text-[6em]">
            100% Fees Redistribution
          </h1>

          <FeeStreamAnimation is4k={is4k} />
        </div>
      </div>
    </div>
  );
}
