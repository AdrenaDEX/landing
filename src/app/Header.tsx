import Image from 'next/image';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Button from '@/app/components/Button';

import logo from '../../public/Images/adrena-logo.svg';

export default function Header({
  isLoaded,
  is4k,
}: {
  isLoaded: boolean;
  is4k: boolean;
}) {
  const [scrollStarted, setScrollStarted] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop || 0;

      setScrollStarted(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isLoaded || !scrollStarted) {
    return null;
  }

  return (
    <div
      className={twMerge(
        'border-transparent bg-[#00000050] fixed w-full pt-2 pb-2 pl-4 pr-4 flex flex-row justify-between items-center border z-30 transition duration-300 fade-in',
        is4k ? 'h-[8em] pl-8' : '',
      )}
    >
      <Image
        src={logo}
        alt="adrena logo"
        className={twMerge(is4k ? 'w-[20em]' : 'w-[10em]')}
      />

      <Button
        className={twMerge(
          'p-2 w-[125px] text-sm',
          is4k ? 'p-6 w-[400px] text-[2em]' : 'sm:w-[175px]',
        )}
      />
    </div>
  );
}
