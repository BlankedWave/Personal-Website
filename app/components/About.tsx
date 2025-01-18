import React from "react";
import { Fira_Code } from "next/font/google";
import { RevealWrapper } from "next-reveal";

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-firacode",
});

function About() {
  return (
    <section id="about">
      <RevealWrapper origin="bottom" delay={500}>
        <div className="lg:h-screen p-6 lg:py-28 lg:px-60 grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:gap-0 gap-12">
          <div>
            <div className="flex gap-2 items-center">
              <p className={`text-[#64ffda] ${firaCode.className} lg:text-lg`}>
                01.
              </p>
              <h1 className="text-[#ccd6f6] text-xl font-semibold lg:font-bold lg:text-[1.7rem] flex gap-1.5">
                <span>About</span>
                <span>Me</span>
              </h1>
              <div className="w-full h-[1.5px] bg-[#233554]"></div>
            </div>
            <div className="text-[#8892b0] space-y-4 mt-8">
              <p>
                Hello! My name is Aqil, and I enjoy creating solutions and content that connect with people. 
                My interest in technology started during my geek era when I explored programming, 
                content creation, and troubleshooting as part of my studies and hobbies.
              </p>
              <p>
                Fast-forward to today, I possess a basic set of skills
                in HTML, CSS, JavaScript, C++, Laravel, Python, and
                Java.
              </p>
              <p>
                My expertise lies in basic troubleshooting and multimedia editing.
                I am a jack of all trades and master of none which means I have basic skills
                in others like Machine Learning, Data Prediction, Sentiment Analysis and so on.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <div
                className={`grid grid-cols-2 gap-2 ${firaCode.className} text-sm`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Microsoft PowerBI</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Python</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>C++</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Laravel</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>JavaScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>HTML & CSS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-[14.5rem] h-[14.5rem] lg:w-[18.75rem] lg:h-[18.75rem] relative group">
            <img
              src="/assets/myself.png"
              alt="Pic of Myself"
              className="w-full h-full object-cover object-[50%] duration-200 ease-linear group-hover:-translate-y-[3px] group-hover:-translate-x-[3px] rounded"
            />
            <div className="absolute inset-0 bg-[#64ffda99] rounded group-hover:bg-transparent z-10 duration-200 ease-linear"></div>
            <div className="absolute top-4 left-4 border-2 border-[#64ffda] rounded w-full h-full -z-50 group-hover:translate-y-[3px] group-hover:translate-x-[3px] duration-200 ease-linear"></div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}

export default About;
