import React from 'react';
import bg from '../assets/mid-bg.png';
import tradeMonster from '../assets/trade-monster.png';

import Image from 'next/image';
import { motion } from 'framer-motion';

export const MidAnimation = () => {
  return (
    <div className="relative">
      <Image src={bg} className="absolute right-0 object-cover" alt="bg" />
      <motion.img
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        src={'Images/trade-monster.png'}
        className="absolute right-0 w-[550px] z-[4]"
        alt="bg"
      />

      <motion.img
        initial={{ scale: 0.99, rotate: 0 }}
        animate={{ scale: 1, rotate: -5 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        src={'Images/mid-big-head.png'}
        className="absolute right-[100px] top-[-100px] w-[950px] z-[3]"
        alt="bg"
      />

      <motion.img
        initial={{ scale: 0.99, rotate: 0 }}
        animate={{ scale: 1, rotate: -2 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        src={'Images/mid-extra.png'}
        className="absolute right-[450px] top-[0px] w-[650px] z-[2]"
        alt="bg"
      />

      <motion.img
        initial={{ scale: 0.99, y: 0 }}
        animate={{ scale: 1, y: -10 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        src={'Images/mid-small-head.png'}
        className="absolute right-[750px] top-[0px] w-[650px] z-[3]"
        alt="bg"
      />

      <motion.img
        initial={{ scale: 0.99, y: 0 }}
        animate={{ scale: 1, y: -10 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        src={'Images/mid-top-monster.png'}
        className="absolute left-[00px] top-[0px] w-[750px]"
        alt="bg"
      />
    </div>
  );
};
