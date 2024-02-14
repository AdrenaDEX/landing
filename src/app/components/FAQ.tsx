import Image from 'next/image';
import chevron from '../assets/chevron.svg';
import monsterPillarImg from '../assets/trade-monster.png';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function FAQ() {
  const [activeQ, setActiveQ] = useState<null | number>(null);

  const FAQs = [
    {
      question: 'What are your trading fees?',
      answer:
        'Increase your winnings without increasing your bankroll Unleash our inner degen with up to 50% leverage.',
    },
    {
      question: 'Are Liquidity Provider fees included in the quoted price?',
      answer:
        'Increase your winnings without increasing your bankroll Unleash our inner degen with up to 50% leverage.',
    },
    {
      question: 'My swap fails, reporting a slippage error. What should I do?',
      answer:
        'Increase your winnings without increasing your bankroll Unleash our inner degen with up to 50% leverage.',
    },
    {
      question: 'What does rent for accounts mean?',
      answer:
        'Increase your winnings without increasing your bankroll Unleash our inner degen with up to 50% leverage.',
    },
    {
      question: 'Do you have whitepaper or gitbook?',
      answer:
        'Increase your winnings without increasing your bankroll Unleash our inner degen with up to 50% leverage.',
    },
  ];

  return (
    <div className="relative flex flex-col items-center p-4 min-h-[75vh]">
      <Image
        src={monsterPillarImg}
        alt="seperator"
        className="absolute top-0 sm:top-[-25px] right-0 z-[-1] w-[200px] "
        style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
      />

      <Image
        src={monsterPillarImg}
        alt="seperator"
        className="hidden sm:block absolute rotate-180 left-0 bottom-[-150px] z-[-1] w-[300px] "
        style={{ filter: 'drop-shadow(0px 0px 40px #000)' }}
      />

      <div className="flex flex-col items-center mt-14">
        <h2 className="text-6xl mb-12">FAQ</h2>
        <div className="flex flex-col gap-6 w-full max-w-[700px] border border-white/10 p-5 bg-[#2F0E43]/50 backdrop-blur-md rounded-2xl">
          {FAQs.map((faq, i) => (
            <div
              className={twMerge(
                'p-3 w-full cursor-pointer hover:opacity-50 transition-opacity duration-300',
                activeQ === i && 'hover:opacity-100',
                i !== FAQs.length - 1 && 'border-b border-b-white/10',
              )}
              onClick={() => setActiveQ(activeQ === i ? null : i)}
              key={i}
            >
              <div className="flex flex-row justify-between">
                <p className="font-medium">{faq.question}</p>
                <Image
                  src={chevron}
                  alt="chevron"
                  width={16}
                  height={16}
                  className={twMerge(
                    activeQ === i && 'rotate-180',
                    'transition duration-300 ml-3',
                  )}
                />
              </div>

              <p
                className={twMerge(
                  activeQ === i ? 'block' : 'hidden',
                  'opacity-75 text-sm mt-2 max-w-[400px]',
                )}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute w-1/4 h-[150%] top-[-200px] left-0 bg-gradient-to-r from-[#330c45] gradient__control" />
      <div className="absolute w-1/4 h-[150%] top-[-200px] right-0 bg-gradient-to-l from-[#330c45] gradient__control" />
    </div>
  );
}
