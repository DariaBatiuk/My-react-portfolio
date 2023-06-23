import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "Web developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  const [isDownloading, setIsDownloading] = React.useState(false);

  const handleDownload = () => {
		setIsDownloading(true);
	
		const resumeUrl = "https://drive.google.com/uc?export=download&id=1FxER2UVWMG4EqN6UQ0Xc83hK0Gv-XrPR";
	
		const link = document.createElement("a");
		link.href = resumeUrl;
		link.download = "resume.pdf";
		link.click();
	
		setTimeout(() => {
			setIsDownloading(false);
		}, 1000);
	};


  return (
    <section
      id="leftBanner"
      className="w-full lgl:w-1/2 h-[800px] pb-20 flex border-b-[1px] border-b-black"
    >
      <div
        className="w-full flex flex-col gap-20 justify-center"
        style={{ width: "100%" }}
      >
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
          <div className="flex gap-4 mb-8">
						<a href="https://www.facebook.com/daria.batyuk" target="_blank">
						<span className="bannerIcon" >
              <FaFacebookF />
            </span>
						</a>
            
						<a href="https://www.linkedin.com/in/dariabatiuk/" target="_blank">
						<span className="bannerIcon" >
              <FaLinkedin />
            </span>
						</a>
            
						<a href="https://github.com/DariaBatiuk" target="_blank">
						<span className="bannerIcon" >
              <FaGithub />
            </span>
						</a>
            
          </div>
          <button
            onClick={handleDownload}
            className="w-1/2 h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
            disabled={isDownloading} // Добавьте disabled атрибут, чтобы предотвратить повторные нажатия во время загрузки
          >
            {isDownloading ? "Downloading..." : "Download CV"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeftBanner;
