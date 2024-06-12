import 'rc-slider/assets/index.css';

import Slider from 'rc-slider';
import { ReactNode, useState } from 'react';
import { twMerge } from 'tailwind-merge';

// ADRENA Style
const colorA = 'var(--color-blue-500)';
const colorB = 'var(--color-gray-200)';

export default function LeverageSlider({
  className,
  value,
  onChange,
  is4k,
}: {
  value?: number;
  className?: string;
  onChange: (v: number) => void;
  is4k?: boolean;
}) {
  // Use this state to allow user to remove everything in the input
  // overwise the user is stuck with one number, which is bad ux
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLeverageInputEmpty, setIsLeverageInputEmpty] =
    useState<boolean>(false);

  return (
    <div className={twMerge('flex flex-col', className)}>
      <div className="flex p-6 h-[3.5em]">
        <Slider
          className="relative bottom-3"
          min={1.1}
          max={100}
          value={value}
          defaultValue={1}
          step={1}
          marks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].reduce(
            (acc, mark) => {
              acc[mark] = (
                <span
                  className={twMerge(
                    'text-white opacity-30 hover:opacity-100',
                    is4k ? 'text-2xl' : 'text-sm lg:text-xs xl:text-sm',
                  )}
                >
                  x{mark}
                </span>
              );
              return acc;
            },
            {} as Record<number, ReactNode>,
          )}
          railStyle={{
            backgroundColor: colorB,
          }}
          trackStyle={{
            backgroundColor: 'white',
            height: 2,
          }}
          handleStyle={{
            backgroundColor: 'white',
            borderColor: 'white',
            borderWidth: '3px',
          }}
          activeDotStyle={{
            backgroundColor: 'white',
            borderColor: colorA,
          }}
          dotStyle={{
            borderRadius: 0,
            width: '2px',
            border: 0,
            height: '0.8em',
            backgroundColor: colorB,
            borderColor: colorB,
          }}
          // Use as number because we don't use the slider as a range
          onChange={(v) => onChange(v as number)}
        />
      </div>
    </div>
  );
}
