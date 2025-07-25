// "use client"

// import Lottie from "lottie-react";

// const AnimationLottie = ({ animationPath, width }) => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationPath,
//     style: {
//       width: '95%',
//     }
//   };

//   return (
//     <Lottie {...defaultOptions} />
//   );
// };

// export default AnimationLottie;
"use client";

import dynamic from 'next/dynamic';

// Dynamically import the Lottie component with SSR turned off
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || '95%', // Use the passed width or default to '95%'
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;