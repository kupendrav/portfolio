import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="pink"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full bg-black-100 bg-opacity-75 dark:bg-black-900 dark:bg-opacity-75
          absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-black-100 bg-opacity-75 dark:bg-black-900 dark:bg-opacity-75
            pointer-events-none"
          style={{
            maskImage: "radial-gradient(ellipse at center, transparent 20%, black)",
          }}
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-900 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
           <div
              style={{
              backgroundImage: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(7,7,48,1) 20%, rgba(0,212,255,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
                  }}  
                  ><TextGenerateEffect
            words='Transforming Concepts into Seamless User Experiences'   
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          /></div>
          

          <p
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
                  style={{
                    backgroundImage:"linear-gradient(90deg, rgba(0,119,111,1) 0%, rgba(135,29,159,0.9304971988795518) 34%, rgba(0,212,255,0.8716736694677871) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
          >
            Hi! I&apos;m Kupendra, a Next.js Developer based in Bengaluru.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
