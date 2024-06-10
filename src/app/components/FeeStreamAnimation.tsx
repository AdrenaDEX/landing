import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import adxImage from '../assets/adrena_logo_adx_color.svg';
import alpImage from '../assets/adrena_logo_alp_color.svg';
import arrowsImage from '../assets/arrows.svg';
import feesImage from '../assets/fees.png';
import usdcImage from '../assets/usdc.svg';
import { twMerge } from 'tailwind-merge';

export default function FeeStreamAnimation({ is4k }: { is4k: boolean }) {
  const LINES = [3, 2, 3, 5, 2, 3, 3, 4, 5];

  return (
    <div
      className={twMerge(
        'relative  items-center flex flex-col justify-center w-full m-auto',
        is4k ? 'scale-[1.5] top-[10em] pb-[8em]' : 'scale-[0.85]',
      )}
    >
      <div className="w-full h-full flex flex-col items-center">
        <Image src={feesImage} className="w-[500px] z-10" alt="adx logo" />

        <div className="flex flex-row gap-2 h-[200px] w-full items-start justify-center scale-x-[-1]">
          {LINES.map((duration, i) => (
            <motion.div
              className={`flex items-center justify-center w-[1px] h-full bg-gradient-to-b from-[#2776ca00] to-[#2775CA]`}
              key={i}
            >
              <motion.span
                initial={{ transform: 'translatey(-100px)' }}
                animate={{ transform: 'translatey(150px)' }}
                transition={{
                  duration,
                  delay: 0.5 * i,
                  ease: 'linear',
                  repeat: Infinity,
                }}
                className="absolute"
              >
                <Image src={usdcImage} width={12} height={12} alt="adx logo" />
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex flex-row w-full">
        <div className="w-full h-full hidden lg:flex items-center justify-end">
          <div className="bg-[#182A3D] z-10 border text-center border-white w-full max-w-[300px] flex-none rounded-2xl">
            <div className="p-3">
              <div className="flex flex-row gap-3 items-center justify-center">
                <Image src={alpImage} width={24} height={24} alt="adx logo" />
                <h2>70% ALP</h2>
              </div>
              <p className="opacity-50">shared between</p>
            </div>
            <div className="relative flex flex-row border-t border-t-white">
              <p className="p-3 w-full text-sm m-auto">Liquid</p>
              <div className="flex items-center justify-center w-[30px] h-[30px] border border-white rounded-full m-auto flex-none">
                <Image src={arrowsImage} width={18} height={18} alt="arrows" />
              </div>
              <p className="p-3 w-full text-sm m-auto">Locked stake</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 h-full w-full max-w-[200px] items-start justify-center scale-x-[-1]">
            {LINES.slice(2).map((duration, i) => (
              <motion.div
                className={`flex items-center w-full h-[1px] bg-gradient-to-r from-[#2775CA] to-[#fff]`}
                key={i}
              >
                <motion.span
                  initial={{ transform: 'translatex(0px)' }}
                  animate={{ transform: 'translatex(250px)' }}
                  transition={{
                    duration,
                    delay: 0.5 * i,
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                  className="absolute"
                >
                  <Image
                    src={usdcImage}
                    width={12}
                    height={12}
                    alt="adx logo"
                  />
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>

        <Image
          src={usdcImage}
          className="w-[200px] h-[200px] m-auto z-10 rounded-full"
          style={{
            boxShadow: '0px 0px 0px 4px #fff',
          }}
          alt="adx logo"
        />

        <div className="w-full h-full hidden lg:flex items-center">
          <div className="flex flex-col gap-3 h-full w-full max-w-[200px] items-start justify-center">
            {LINES.slice(7).map((duration, i) => (
              <motion.div
                className={`flex items-center w-full h-[1px] bg-gradient-to-r from-[#2775CA] to-[#fff]`}
                key={i}
              >
                <motion.span
                  initial={{ transform: 'translatex(0px)' }}
                  animate={{ transform: 'translatex(250px)' }}
                  transition={{
                    duration,
                    delay: 0.5 * i,
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                  className="absolute"
                >
                  <Image
                    src={usdcImage}
                    width={12}
                    height={12}
                    alt="adx logo"
                  />
                </motion.span>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#182A3D] z-10 border text-center border-white w-full max-w-[300px] flex-none rounded-2xl">
            <div className="p-3">
              <div className="flex flex-row gap-3 items-center justify-center">
                <Image src={adxImage} width={24} height={24} alt="adx logo" />
                <h2>20% ADX</h2>
              </div>
              <p className="opacity-50">shared between</p>
            </div>
            <div className="relative flex flex-row border-t border-t-white">
              <p className="p-3 w-full text-sm m-auto">Staked</p>
              <div className="flex items-center justify-center w-[30px] h-[30px] border border-white rounded-full m-auto flex-none">
                <Image src={arrowsImage} width={18} height={18} alt="arrows" />
              </div>
              <p className="p-3 w-full text-sm m-auto">Locked stake</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col items-center lg:hidden">
        <div className="flex flex-row gap-3 h-[200px] w-full items-center justify-center scale-x-[-1]">
          {LINES.slice(1).map((duration, i) => (
            <motion.div
              className={`flex items-center justify-center w-[1px] h-full bg-gradient-to-b from-[#2775CA] to-[#fff]`}
              key={i}
            >
              <motion.span
                initial={{ transform: 'translatey(-100px)' }}
                animate={{ transform: 'translatey(150px)' }}
                transition={{
                  duration,
                  delay: 0.5 * i,
                  ease: 'linear',
                  repeat: Infinity,
                }}
                className="absolute"
              >
                <Image src={usdcImage} width={12} height={12} alt="adx logo" />
              </motion.span>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#182A3D] z-10 border text-center border-white w-[300px] flex-none rounded-2xl">
          <div className="p-3">
            <div className="flex flex-row gap-3 items-center justify-center">
              <Image src={alpImage} width={24} height={24} alt="adx logo" />
              <h2>70% ALP</h2>
            </div>
            <p className="opacity-50">shared between</p>
          </div>
          <div className="relative flex flex-row border-t border-t-white">
            <p className="p-3 w-full text-sm m-auto">Liquid</p>
            <div className="flex items-center justify-center w-[30px] h-[30px] border border-white rounded-full m-auto flex-none">
              <Image src={arrowsImage} width={18} height={18} alt="arrows" />
            </div>
            <p className="p-3 w-full text-sm m-auto">Locked stake</p>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col items-center lg:hidden">
        <div className="flex flex-row gap-3 h-[200px] w-full items-center justify-center scale-x-[-1]">
          {LINES.slice(4).map((duration, i) => (
            <motion.div
              className={`flex items-center justify-center w-[1px] h-full bg-gradient-to-b from-[#2775CA] to-[#fff]`}
              key={i}
            >
              <motion.span
                initial={{ transform: 'translatey(-100px)' }}
                animate={{ transform: 'translatey(150px)' }}
                transition={{
                  duration,
                  delay: 0.5 * i,
                  ease: 'linear',
                  repeat: Infinity,
                }}
                className="absolute"
              >
                <Image src={usdcImage} width={12} height={12} alt="adx logo" />
              </motion.span>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#182A3D] z-10 border text-center border-white w-[300px] flex-none rounded-2xl">
          <div className="p-3">
            <div className="flex flex-row gap-3 items-center justify-center">
              <Image src={adxImage} width={24} height={24} alt="adx logo" />
              <h2>20% ADX</h2>
            </div>
            <p className="opacity-50">shared between</p>
          </div>
          <div className="relative flex flex-row border-t border-t-white">
            <p className="p-3 w-full text-sm m-auto">Staked</p>
            <div className="flex items-center justify-center w-[30px] h-[30px] border border-white rounded-full m-auto flex-none">
              <Image src={arrowsImage} width={18} height={18} alt="arrows" />
            </div>
            <p className="p-3 w-full text-sm m-auto">Locked stake</p>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col items-center">
        <div className="flex flex-row gap-3 h-[200px] w-full items-center justify-center scale-x-[-1]">
          {LINES.slice(8).map((duration, i) => (
            <motion.div
              className={`flex items-center justify-center w-[1px] h-full bg-gradient-to-b from-[#2775CA] to-[#fff]`}
              key={i}
            >
              <motion.span
                initial={{ transform: 'translatey(-100px)' }}
                animate={{ transform: 'translatey(150px)' }}
                transition={{
                  duration,
                  delay: 0.5 * i,
                  ease: 'linear',
                  repeat: Infinity,
                }}
                className="absolute"
              >
                <Image src={usdcImage} width={12} height={12} alt="adx logo" />
              </motion.span>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#182A3D] z-10 border text-center border-white w-[300px] flex-none rounded-2xl p-3">
          <div className="flex flex-row gap-3 items-center justify-center">
            <Image src={adxImage} width={24} height={24} alt="adx logo" />
            <h3>10% ADX Buyback</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
