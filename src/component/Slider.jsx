import React from "react";
import Frontend from "../assets/frontendLib.png";
import JS from "../assets/js.png";
import RWD from "../assets/rwd.png";
import D3 from "../assets/d3.png";
import LORG from "../assets/lfo.png";
import FDC3 from "../assets/fdc3.png";
import Oapi from "../assets/oapi.png";
import JSSecurity from "../assets/js-security.png";

const Slider = () => {
  const certificates = [
    { src: Frontend, contain: false },
    { src: JS, contain: false },
    { src: RWD, contain: false },
    { src: D3, contain: false },
    { src: LORG, contain: true },
    { src: FDC3, contain: true },
    { src: Oapi, contain: true },
    { src: JSSecurity, contain: true },
  ];

  const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "Typescript",
    "MERN Stack",
    "Redux",
    "Next.js",
    "Power BI",
    "Apache Superset",
    "React Native",
    "MySQL",
    "SQLite",
    "Python",
    "Linux",
    "Shell Scripting",
    "OpenAPI",
    "Git",
    "GitHub",
  ];

  return (
    <div className="overflow-x-hidden w-screen xl:min-h-screen flex flex-col lg:flex-row lg:pr-32">
      {/* Right Side - Certificates */}
      <div className="w-full lg:w-3/4 relative overflow-hidden flex items-center justify-center clip-wave-right py-8">
        <div className="w-full overflow-x-hidden px-4">
          <div className="slider flex w-max animate-slide">
            {/* Slide 1 */}
            <div className="slide flex">
              {certificates.map((cert, idx) => (
                <div
                  key={`cert1-${idx}`}
                  className="certificate min-w-[150px] sm:min-w-[200px] md:min-w-[250px] h-[120px] sm:h-[150px] md:h-[180px] m-2 flex items-center justify-center bg-transparent shadow-md overflow-hidden rounded-lg"
                >
                  <img
                    src={cert.src}
                    alt={`Certificate ${idx + 1}`}
                    className={`w-full h-full ${
                      cert.contain ? "object-contain py-2" : "object-cover"
                    }`}
                  />
                </div>
              ))}
            </div>
            {/* Slide 2 (Duplicate) */}
            <div className="slide flex">
              {certificates.map((cert, idx) => (
                <div
                  key={`cert2-${idx}`}
                  className="certificate min-w-[150px] sm:min-w-[200px] md:min-w-[250px] h-[120px] sm:h-[150px] md:h-[180px] m-2 flex items-center justify-center bg-transparent shadow-md overflow-hidden rounded-lg"
                >
                  <img
                    src={cert.src}
                    alt={`Certificate ${idx + 1}`}
                    className={`w-full h-full ${
                      cert.contain ? "object-contain py-2" : "object-cover"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Left Side - Skills */}
      <div className="w-full lg:w-1/4 relative z-10 pl-6 py-8 max-w-3xl mx-auto clip-wave-left overflow-hidden flex flex-col items-center justify-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
          Skills and Certifications
        </h2>
        <div className="flex flex-wrap justify-center gap-2 max-w-full">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="border border-green-400 rounded-full px-3 py-1 text-xs sm:text-sm bg-gray-800/50 hover:bg-green-500/20 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
