import React from "react";
import {useTypewriter, Cursor} from "react-simple-typewriter";

const Banner = () => {
	const [text] = useTypewriter({
    words: ['Full Stack Developer.', 'Web developer.'],
    loop: true, 
		typeSpeed: 20, 
		deleteSpeed: 10, 
		delaySpeed: 2000,
  });

  return (
    <section id="home" className="w-full pt-10 pb-20 flex border-b-1 border-black font-titleFont">
      <div className="w-1/2">
				<div className="flex flex-col gap-3">
					<h4 className="text-lg font'normal">Welcome to my website</h4>
					<h1 className="text-6xl font-bold text-white">
						{" "}
						Hi, I'm {" "}
						<span className="text-designColor capitalize">Daria Batiuk</span>
						</h1>
						<h2 className="text-4xl font-bold text-white">
							<span>{text}</span>
							<Cursor
							cursorBlinking ="false"
							cursorStyle=" | "
							cursorColor="#ff014f"
							/>
						</h2>
						<p className="text-base font-bodyFont leading-6 tracking-wide">
						Motivated front-end developer with expertise in developing and maintaining user-friendly, responsive, and cross-browser compatible websites and web applications using HTML, CSS, JavaScript and React
						</p>
				</div>
			</div>
			<div className="w-1/2"></div>
    </section>
  );
};

export default Banner;
