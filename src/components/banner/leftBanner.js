import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedin, FaReact, FaGithub } from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ['Full Stack Developer.', 'Web developer.'],
    loop: true, 
    typeSpeed: 20, 
    deleteSpeed: 10, 
    delaySpeed: 2000,
  });

  return (
    <section id="leftBanner" className="w-full lgl:w-1/2 h-[800px] pb-20 flex border-b-[1px] border-b-black" >
<div className="w-full flex flex-col gap-20 justify-center" style={{ width: '100%' }}>
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">Welcome to my website</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm{" "}
            <span className="text-designColor capitalize">Daria Batiuk</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle=" | "
              cursorColor="#ff014f"
            />
          </h2>
          <p className="hidden sm:block text-base font-bodyFont leading-6 tracking-wide ">
            Motivated front-end developer with expertise in developing and
            maintaining user-friendly, responsive, and cross-browser compatible
            websites and web applications using HTML, CSS, JavaScript and React
          </p>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaLinkedin />
            </span>
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftBanner;
