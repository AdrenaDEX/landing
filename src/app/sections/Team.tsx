import Image from 'next/image';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import aldoImg from '../../../public/Images/team/aldo.png';
import cortoImg from '../../../public/Images/team/corto2.png';
import endoImg from '../../../public/Images/team/endo.png';
import kinoImg from '../../../public/Images/team/kino.png';
import orexImg from '../../../public/Images/team/orex.png';
import tyroImg from '../../../public/Images/team/tyro.png';

export default function Team({
  className,
  is4k,
}: {
  className?: string;
  is4k: boolean;
}) {
  const [hovering, setHovering] = useState<
    'Endo' | 'Corto' | 'Orex' | 'Aldo' | 'Tyro' | 'Kino' | null
  >(null);

  return (
    <div
      className={twMerge('relative', className, is4k ? 'mt-[6em]' : '')}
      style={is4k ? { fontSize: '2em' } : {}}
    >
      <div className="relative w-full flex flex-col overflow-hidden items-center">
        <h1 className="text-center sm:text-[5em] lg:text-[6em] z-10">
          Launch Team
        </h1>

        <div
          className={twMerge(
            'w-[36em] sm:w-[35em] mb-3 h-[42em] relative scale-[0.65] sm:scale-[0.9] ',
            is4k ? 'mt-[4em]' : 'sm:mt-[8em] md:mt-8',
          )}
        >
          <div>
            <div
              className={twMerge(
                'absolute top-[-4em] left-[7em] md:top-auto md:bottom-[4em] md:left-[-4em] z-[6]',
                is4k ? 'text-[3em]' : 'text-4xl',
                hovering === 'Endo' ? 'visible' : 'hidden',
              )}
            >
              Endo
            </div>

            <Image
              onMouseEnter={() => setHovering('Endo')}
              onMouseLeave={() => setHovering(null)}
              className={twMerge(
                'w-[21em] h-[25em] absolute scale-x-[-1] bottom-[-2em] left-[-5em] z-[4]',
                hovering !== null && hovering !== 'Endo' ? 'grayscale' : '',
              )}
              src={endoImg}
              alt="endo pfp"
            />
          </div>

          <div>
            <div
              className={twMerge(
                'absolute top-[-4em] left-[7em] md:top-auto z-[6]',
                is4k
                  ? 'text-[3em] left-[6em] bottom-[8em]'
                  : 'text-4xl md:bottom-[9em]',
                hovering === 'Corto' ? 'visible' : 'hidden',
              )}
            >
              Corto
            </div>

            <Image
              onMouseEnter={() => setHovering('Corto')}
              onMouseLeave={() => setHovering(null)}
              className={twMerge(
                'w-[21em] h-[23em] absolute bottom-[-3em] left-[10em] z-[5]',
                hovering !== null && hovering !== 'Corto' ? 'grayscale' : '',
              )}
              src={cortoImg}
              alt="corto pfp"
            />
          </div>

          <div>
            <div
              className={twMerge(
                'absolute top-[-4em] left-[7em] md:top-auto md:bottom-[4em] text-4xl z-[6]',
                is4k ? 'text-[3em] left-[14em]' : 'md:left-[15.5em]',
                hovering === 'Orex' ? 'visible' : 'hidden',
              )}
            >
              Orex
            </div>

            <Image
              onMouseEnter={() => setHovering('Orex')}
              onMouseLeave={() => setHovering(null)}
              className={twMerge(
                'w-[21em] h-[23em] absolute bottom-0 left-[21em] scale-x-[-1] z-[3]',
                hovering !== null && hovering !== 'Orex' ? 'grayscale' : '',
              )}
              src={orexImg}
              alt="orex pfp"
            />
          </div>

          <div>
            <div
              className={twMerge(
                'absolute top-[-4em] left-[7em] md:top-auto z-[6]',
                is4k
                  ? 'text-[3em] bottom-[12em] left-[11.5em]'
                  : 'text-4xl md:bottom-[14em] md:left-[13em]',
                hovering === 'Tyro' ? 'visible' : 'hidden',
              )}
            >
              Tyro
            </div>

            <Image
              onMouseEnter={() => setHovering('Tyro')}
              onMouseLeave={() => setHovering(null)}
              className={twMerge(
                'w-[25em] h-[26em] absolute bottom-[15em] left-[15em] z-[2] rotate-[-18deg]',
                hovering !== null && hovering !== 'Tyro' ? 'grayscale' : '',
              )}
              src={tyroImg}
              alt="tyro pfp"
            />
          </div>

          <div>
            <div
              className={twMerge(
                'absolute top-[-4em] left-[7em] md:top-auto z-[6]',
                is4k
                  ? 'text-[3em] bottom-[9.5em] left-[-2em]'
                  : 'text-4xl md:bottom-[13em] md:left-[-1em]',
                hovering === 'Aldo' ? 'visible' : 'hidden',
              )}
            >
              Aldo
            </div>

            <Image
              onMouseEnter={() => setHovering('Aldo')}
              onMouseLeave={() => setHovering(null)}
              className={twMerge(
                'w-[22em] h-[22em] absolute bottom-[12em] scale-x-[-1] left-[-2em] z-[2] rotate-12',
                hovering !== null && hovering !== 'Aldo' ? 'grayscale' : '',
              )}
              src={aldoImg}
              alt="aldo pfp"
            />
          </div>

          <div>
            <div
              className={twMerge(
                'absolute top-[-4em] left-[7em] md:top-auto z-[6]',
                is4k
                  ? 'text-[3em] bottom-[13em] left-[-0.5em]'
                  : 'text-4xl md:bottom-[15em] md:left-[-1em]',
                hovering === 'Kino' ? 'visible' : 'hidden',
              )}
            >
              Kino
            </div>

            <Image
              onMouseEnter={() => setHovering('Kino')}
              onMouseLeave={() => setHovering(null)}
              className={twMerge(
                'w-[22em] h-[22em] absolute bottom-[24em] scale-x-[-1] left-[2em] z-[1] rotate-[35deg] ',
                hovering !== null && hovering !== 'Kino' ? 'grayscale' : '',
              )}
              src={kinoImg}
              alt="kino pfp"
            />
          </div>

          <div
            className={twMerge(
              'absolute right-0 bg-gradient-to-b from-[#16283D00] to-[#16283D] z-10 m-auto self-center',
              is4k
                ? 'bottom-[-100px] w-[1600px] h-[400px]'
                : 'bottom-[-40px] w-[800px] h-[200px]',
            )}
          />
        </div>
      </div>
    </div>
  );
}
