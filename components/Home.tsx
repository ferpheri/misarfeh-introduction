"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Typewriter from "./Typewriter";

type Coordinates = {
  x: number;
  y: number;
  delay: number;
};

const generateRandomCoordinates = (): Coordinates => {
  const angle = Math.random() * 2 * Math.PI;
  const distance = Math.random() * 100 + 100;
  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    delay: Math.random() * 0.5,
  };
};

const splashVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (custom: Coordinates) => ({
    opacity: 1,
    scale: [0, 1, 0],
    rotate: [0, 360],
    x: custom.x,
    y: custom.y,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
      delay: custom.delay,
    },
  }),
};

const HomePage = () => {
  const logoInstances: Coordinates[] = Array.from({ length: 10 }).map(() =>
    generateRandomCoordinates()
  );

  return (
    <div className="content relative">
      <div className="hero justify-center items-center flex flex-col mb-5">
        <h1 className="text-[3.5rem] sm:text-[3.75rem] xl:text-[4rem] xl:mb-6 mb-4">
          می صرفه
        </h1>
        <p className="text-[1.5rem] sm:text-[1.75rem] xl:text-[1.75rem] mt-1" >
          <Typewriter />
        </p>
        <Image
          alt="misarfeh"
          src={"/misarfehLogo.png"}
          width={180}
          height={180}
          className="mt-6 sm:w-28 xl:w-30 w-24 h-auto"
        />

        <div className="relative mt-9 xl:mt-12 flex justify-center items-center">
          <Link
            href="#"
            className="z-50 relative border-2 sm:text-xl xl:text-xl xl:py-3 xl:px-16 sm:py-3 sm:px-9 border-neutral-neutral90 text-lg py-2 px-8 bg-primary-primary98 hover:bg-neutral-neutral90 text-key-colors-primary rounded-rounded-6"
          >
            به زودی
          </Link>
          {logoInstances.map((coords, index) => (
            <motion.div
              key={index}
              custom={coords}
              variants={splashVariants}
              initial="hidden"
              animate="visible"
              className="absolute"
              style={{
                width: 30,
                height: 30,
                top: 0,
                left: "50%",
              }}
            >
              <Image
                src="/misarfehLogo.png"
                alt="splash-logo"
                width={30}
                height={30}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
