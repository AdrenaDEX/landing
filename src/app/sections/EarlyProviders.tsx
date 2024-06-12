import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import autonomousImg from '../../../public/Images/early-contributors/autonomous.png';
import forgdImg from '../../../public/Images/early-contributors/forgd.png';
import littleUnusualImg from '../../../public/Images/early-contributors/little-unusual.png';
import otterSecImg from '../../../public/Images/early-contributors/ottersec.png';
import overclockImg from '../../../public/Images/early-contributors/overclock.png';
import syntaxImg from '../../../public/Images/early-contributors/syntax.png';
import tritonImg from '../../../public/Images/early-contributors/triton.png';
import vendingMachineImg from '../../../public/Images/early-contributors/vending-machine.png';

export default function EarlyProviders({
  className,
  is4k,
}: {
  className?: string;
  is4k: boolean;
}) {
  const [investors, setInvestors] = useState<
    { name: string; twitter: string | null }[]
  >([]);

  useEffect(() => {
    fetchCsv();
  }, []);

  const fetchCsv = async () => {
    const investorList = process.env.NEXT_PUBLIC_INVESTOR_LIST?.split(',').map(
      (item) => {
        const [name, twitter] = item.split('/');
        return {
          name,
          twitter: twitter ?? null,
        };
      },
    ) as { name: string; twitter: string | null }[];

    setInvestors(
      investorList.sort((a, b) => {
        const aName = a.name.replace('@', '');
        const bName = b.name.replace('@', '');
        return aName.localeCompare(bName);
      }),
    );
  };

  return (
    <div
      className={twMerge('relative', className)}
      style={is4k ? { fontSize: '2em' } : {}}
    >
      <div className="relative w-full flex flex-col overflow-hidden items-center">
        <div className="flex flex-wrap items-center justify-evenly w-[90%] mt-8 border border-gray-300/10 relative pb-4 pt-4">
          <div className="absolute top-[-0.75em] left-auto right-auto text-4xl font-titletext bg-[#16293d] w-[10em] items-center flex justify-center">
            PARTNERS
          </div>

          <Image
            className="w-[3em] h-auto m-4"
            src={vendingMachineImg}
            alt="Vending Machine Logo"
          />

          <Image
            className="w-[8em] h-auto m-4 cursor-pointer"
            src={forgdImg}
            alt="Forgd Logo"
            onClick={() => window.open('https://forgd.com/')}
          />

          <Image
            className="w-[9em] h-auto m-4 cursor-pointer"
            src={syntaxImg}
            alt="Syntax Logo"
            onClick={() => window.open('https://syntaxlabs.xyz/')}
          />

          <Image
            className="w-[10em] h-auto m-4 cursor-pointer"
            src={littleUnusualImg}
            alt="Little Unusual Logo"
            onClick={() => window.open('https://littleunusual.co/landing-page')}
          />

          <Image
            className="w-[8em] h-auto m-4 cursor-pointer"
            src={autonomousImg}
            alt="Autonomous Logo"
            onClick={() => window.open('https://autonomousprojects.co')}
          />

          <Image
            className="w-[3.5em] h-auto m-4 cursor-pointer"
            src={overclockImg}
            alt="Overclock Logo"
            onClick={() => window.open('https://overclock-sol.one')}
          />

          <Image
            className="w-[3em] h-auto m-4 cursor-pointer"
            src={otterSecImg}
            alt="Ottersec Logo"
            onClick={() => window.open('https://osec.io')}
          />

          <Image
            className="w-[3em] h-auto m-4 cursor-pointer"
            src={tritonImg}
            alt="Triton Logo"
            onClick={() => window.open('https://triton.one')}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-[90%] mt-20 border border-gray-300/10 relative ml-auto mr-auto">
        <div className="absolute top-[-0.8em] left-auto right-auto text-4xl font-titletext bg-[#16293d] w-[17em] items-center flex justify-center">
          COMMUNITY CONTRIBUTORS
        </div>

        <div className="my-14 w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 text-center">
          {investors.map(({ name, twitter }, i) => {
            if (twitter) {
              return (
                <a
                  key={name + i}
                  href={`https://twitter.com/${twitter}`}
                  target="_blank"
                  rel="noreferrer"
                  className="opacity-30 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2"
                >
                  {name}{' '}
                </a>
              );
            }
            return (
              <div
                key={name + i}
                className="opacity-30 flex items-center justify-center p-2"
              >
                {name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
