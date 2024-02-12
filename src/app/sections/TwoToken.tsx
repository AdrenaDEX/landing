import React from 'react';

import sepImg from '../assets/line.png';
import Image from 'next/image';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import Button from '../components/Button';

export default function TwoToken({
  isLoaded,
  setIsBtmLoaded,
}: {
  isLoaded: boolean;
  setIsBtmLoaded: (v: boolean) => void;
}) {
  const { RiveComponent } = useRive({
    src: 'btmMonster.riv',
    autoplay: true,
    onLoad: () => {
      setIsBtmLoaded(true);
    },
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.BottomRight,
    }),
  });

  return (
    <div className="relative">
      <div className="relative w-full h-[100vh] flex items-center px-10">
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: isLoaded ? '1' : '0',
            transition: 'opacity 0.3s',
            filter: 'drop-shadow(0px 0px 40px #000)',
          }}
        >
          <RiveComponent className="absolute w-full h-full" />
        </div>
        <div className="flex flex-col gap-3 z-10">
          <div>
            <h2 className="text-6xl mb-3 font-openbrush">Our 2-token model</h2>
            <p className="mb-3 max-w-[600px] font-kavivanar">
              Building upon the 2-token model system used by perps dex innovator
              GMX, we&apos;ve taken their token structure to the next level,
              providing token holders with the as much control and value
              possible to help shape Adrena long term.
            </p>

            <p className="mb-3 max-w-[600px] font-kavivanar">
              Our governance and utility token, ADX, accrues 30% of the
              platform&apos;s generated fees. ALP is the liquidity provider
              token that accrues 70% of the platform&apos;s generated fees. All
              of this is supplemented with our attractive distribution model
              which rewards ALL participants of the platform.
            </p>
          </div>
          <Button />
        </div>
      </div>
      {isLoaded && (
        <Image
          src={sepImg}
          alt="seperator"
          className="absolute seperator seperator__top fade-in-3"
          style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
        />
      )}
      <div className="absolute w-1/4 h-[120%] top-0 left-0 bg-gradient-to-r from-[#330c45] gradient__control" />
      <div className="absolute w-1/4 h-[120%] top-0 right-0 bg-gradient-to-l from-[#330c45] gradient__control" />
    </div>
  );
}
