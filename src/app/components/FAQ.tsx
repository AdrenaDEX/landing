import Image from 'next/image';
import chevron from '../assets/chevron.svg';
import monsterPillarImg from '../assets/trade-monster.png';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function FAQ() {
  const [activeQ, setActiveQ] = useState<null | number>(null);

  const FAQs = [
    {
      question: 'Do you have whitepaper or gitbook?',
      answer:
        'Increase your winnings without increasing your bankroll Unleash our inner degen with up to 50% leverage.',
    },
    {
      question: 'What are your trading fees?',
      answer:
        'Increase your winnings without increasing your bankroll Unleash our inner degen with up to 50% leverage.',
    },
    {
      question: 'What differentiates you from other competitors like GMX ?',
      answer:
        'Increase your winnings without increasing your bankroll Unleash our inner degen with up to 50% leverage.',
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center p-4 min-h-[75vh] overflow-hidden">
      <Image
        src={monsterPillarImg}
        alt="seperator"
        className="hidden sm:block absolute top-[-50px] right-0 z-[-1] w-[500px] "
        style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
      />

      <Image
        src={monsterPillarImg}
        alt="seperator"
        className="absolute rotate-180 left-0 bottom-[-150px] z-[-1] w-[400px] "
        style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
      />

      <div>
        <h2 className="text-6xl mb-6">FAQ</h2>
        <div className="flex flex-col gap-6 w-full max-w-[500px]">
          {FAQs.map((faq, i) => (
            <div
              className="p-3 border border-white/25 rounded-md w-full cursor-pointer bg-[#2F0E43]/50 backdrop-blur-2xl"
              onClick={() => setActiveQ(activeQ === i ? null : i)}
              key={i}
            >
              <div className="flex flex-row justify-between">
                <p className="font-medium font-kavivanar">{faq.question}</p>
                <Image
                  src={chevron}
                  alt="chevron"
                  width={16}
                  height={16}
                  className={twMerge(
                    activeQ === i && 'rotate-180',
                    'transition duration-300',
                  )}
                />
              </div>

              <p
                className={twMerge(
                  activeQ === i ? 'block' : 'hidden',
                  'opacity-75 text-sm mt-2 max-w-[400px] font-kavivanar',
                )}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
