import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Button({ className }: { className?: string }) {
  return (
    <a href="https://alpha.adrena.xyz/">
      <button
        className={twMerge(
          'relative group flex flex-row item-center justify-center p-3 bg-[#4C34A4] hover:bg-[#432d87] border border-[#4C34A4] transition-all duration-300 w-[200px] shadow-xl hover:shadow-none font-kavivanar font-bold rounded-full',
          className,
        )}
      >
        <span className="absolute left-5 self-center opacity-0 group-hover:left-7 group-hover:opacity-100 transition-all duration-300">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 8C1 7.72386 1.22386 7.5 1.5 7.5L13.2929 7.5L10.1464 4.35355C9.95118 4.15829 9.95118 3.84171 10.1464 3.64645C10.3417 3.45118 10.6583 3.45118 10.8536 3.64645L14.8536 7.64645C15.0488 7.84171 15.0488 8.15829 14.8536 8.35355L10.8536 12.3536C10.6583 12.5488 10.3417 12.5488 10.1464 12.3536C9.95118 12.1583 9.95118 11.8417 10.1464 11.6464L13.2929 8.5H1.5C1.22386 8.5 1 8.27614 1 8Z"
              fill="white"
            />
          </svg>
        </span>
        <span className="group-hover:translate-x-1 transition-all duration-300">
          TRADE NOW
        </span>
      </button>
    </a>
  );
}
