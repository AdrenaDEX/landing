import React from 'react';
import Lottie from 'lottie-react';

import loader from './animation_llnqetok.json';

const rendererSettings = {
  preserveAspectRatio: 'xMidYMid slice',
};

export default function Loader({
  height = 30,
  width = 120,
}: {
  height?: number;
  width?: number;
}) {
  return (
    <Lottie
      animationData={loader}
      rendererSettings={rendererSettings}
      loop={false}
      style={{ height, width }}
    />
  );
}
