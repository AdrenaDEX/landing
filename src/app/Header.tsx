import Button from '@/app/components/Button';
import Image from 'next/image';

import logo from '../../public/Images/adrena-logo.svg';
import { useEffect, useState } from 'react';

export default function Header({ isLoaded }: { isLoaded: boolean }) {
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
    <div className="border-transparent bg-[#00000050] fixed w-full pt-2 pb-2 pl-4 pr-4 flex flex-row justify-between items-center border z-30 transition duration-300 fade-in max-w-[1980px]">
      <Image src={logo} alt="adrena logo" className="w-[10em]" />

      <Button className="p-2 w-[125px] sm:w-[175px] text-sm" />
    </div>
  );
}
