import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import Akash from "./assets/akash.jpg";
import Second from "./assets/2nd.jpg";
import Third from "./assets/3rd.jpg";
import Fourth from "./assets/4th.jpg";
import Sixth from "./assets/6th.jpg";
import Seventh from "./assets/7th.jpg";

import Slider from "./component/Slider";

const projects = [
  {
    name: "Tiffin Service",
    url: "https://v0-tiffin-service-website.vercel.app/",
    img: Second,
  },
  {
    name: "Doggy Ecommerce",
    url: "https://doggy-delta.vercel.app/",
    img: Third,
  },
  {
    name: "React Movie App",
    url: "https://react-movie-nu.vercel.app/",
    img: Fourth,
  },
  {
    name: "Tiles Marketplace",
    url: "https://resonant-gecko-05e06f.netlify.app/",
    img: Sixth,
  },
  {
    name: "Sunmica 3D",
    url: "https://comforting-paprenjak-aee9a2.netlify.app/",
    img: Seventh,
  },
];

const education = [
  { degree: "BCA", institution: "P.G.D.A.V College", year: "2020 – 2023" },
  { degree: "XII (Commerce)", institution: "CBSE", year: "2020" },
];

const experience = [
  {
    role: "Software Developer",
    company: "Megdap",
    location: "Pune",
    duration: "Oct 2022 – Present",
    description: [
      "Built frontend with React.js, Next.js, Tailwind CSS.",
      "Developed AI Prompt Dashboard.",
      "Integrated Power BI and Elasticsearch.",
    ],
  },
];

const internships = [
  {
    company: "DC Techworks",
    role: "Intern",
    description: "Built interactive apps with HTML, CSS, JS.",
  },
  {
    company: "Techrupt Innovation",
    role: "Intern",
    description: "Created responsive UIs using Next.js.",
  },
  {
    company: "Green Light Studio",
    role: "Intern",
    description: "Designed UIs for NFT marketplaces.",
  },
  {
    company: "Angel AI",
    role: "Intern",
    description: "Integrated APIs and styled layouts.",
  },
];

function App() {
  const [stars, setStars] = useState([]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/AkashGargResume.pdf";
    link.download = "AkashGargResume.pdf";
    link.click();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStars((prevStars) => {
        const newStar = {
          id: Math.random(),
          left:
            window.innerWidth * 0.6 + Math.random() * (window.innerWidth * 0.2),
          animationDelay: Math.random() * 2,
        };
        if (prevStars.length >= 3) {
          return [...prevStars.slice(1), newStar];
        }
        return [...prevStars, newStar];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden pt-8 pb-12">
      {/* Fixed Diagonal Background */}
      <div
        className="fixed inset-0 z-[-10]"
        style={{
          background: "linear-gradient(45deg, #6EE7B7 0%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse at 0% 50%, black 10%, transparent 70%)",
        }}
      ></div>
      {/* Existing Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 z-[-5]"></div>

      {/* Shooting Stars */}
      <div className="night">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.left}px`,
              top: "10%",
              animationDelay: `${star.animationDelay}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 grid grid-cols-1 gap-y-8 md:gap-4 md:grid-cols-2 gap-4 items-center justify-center max-w-6xl mx-auto px-4 md:px-8"
      >
        <div className="flex flex-col mb-8 lg:mb-0 items-center md:items-start gap-4 text-center md:text-left max-w-md mx-auto">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32">
            <Canvas
              camera={{ position: [0, 0, 5] }}
              className="absolute inset-0 z-0"
              style={{ zIndex: 0 }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[200, 100, 0]} />
              <Sphere visible args={[1, 100, 200]} scale={[1.5, 0.75, 1.5]}>
                <MeshDistortMaterial
                  color="#4ADE80"
                  attach="material"
                  distort={0.6}
                  speed={3}
                />
              </Sphere>
              <OrbitControls enableZoom={false} />
            </Canvas>
            <img
              src={Akash}
              alt="Akash"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover rounded-full opacity-90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 z-50"
            />
          </div>
          <div>
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3 tracking-tight">
              Akash Garg
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-2 font-medium">
              Frontend-Focused Full Stack Developer
            </p>
            <p className="text-xs sm:text-sm md:text-base mb-1">
              📍 India | 📧 engage.akash@gmail.com
            </p>
            <p className="text-xs sm:text-sm md:text-base mb-1">
              📱 +91 8178898309, +91 8505893525
            </p>
            <p className="text-xs sm:text-sm md:text-base mb-1">
              🌐 English, Hindi, Japanese
            </p>

            <div className="flex justify-between items-center">
              <p className="text-xs sm:text-sm md:text-base mb-4">
                🖧{" "}
                <a
                  href="https://github.com/webAKAsh"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-green-400"
                >
                  Github
                </a>
              </p>
              <p className="text-xs sm:text-sm md:text-base mb-4">
                🔗{" "}
                <a
                  href="https://linkedin.com/in/akash-garg-ab278b212"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-green-400"
                >
                  Linkedin
                </a>
              </p>
              <p className="text-xs sm:text-sm md:text-base mb-4">
                🏷️{" "}
                <a
                  href="https://www.credly.com/users/akash_garg"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-green-400"
                >
                  Credly
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-0 w-full h-64 md:h-80 flex flex-col items-center justify-center p-4 rounded-xl max-w-md mx-auto mb-6 md:mb-0 text-center md:text-right">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-tight w-full">
            Career Objective
          </h2>
          <p className="text-base leading-relaxed">
            To contribute as a Frontend Developer in a growth-driven company
            where I can build scalable, responsive applications with great
            UI/UX. Skilled at frontend architecture and passionate about
            innovation. Seeking opportunities to leverage my expertise in
            React.js, Next.js, and modern web technologies to deliver
            exceptional user experiences.
          </p>
          <div className="w-full mt-4 flex justify-center  md:justify-end">
            <button
              onClick={handleDownload}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 cursor-pointer rounded-lg text-white font-semibold transition-colors"
            >
              View Resume
            </button>
          </div>
        </div>
      </motion.div>

      <div className="py-4 my-4">
        <Slider />
      </div>

      {/* Work Experience and Internships Section */}
      <section className="relative z-10 my-8 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Work Experience & Internships
        </h2>
        <div className="grid md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {/* Left Side: Work Experience (2/5 width) */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
              Work Experience
            </h3>
            {experience.map((exp, index) => (
              <div
                key={index}
                className="mb-6 p-4 bg-gray-900 rounded-lg shadow-md"
              >
                <h4 className="text-lg font-bold">{exp.role}</h4>
                <p className="text-sm text-gray-300">
                  {exp.company}, {exp.location} | {exp.duration}
                </p>
                <ul className="text-sm list-disc list-inside mt-2">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Side: Internships (3/5 width) */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
              Internships
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {internships.map((intern, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-green-400">
                    {intern.company}
                  </h4>
                  <p className="text-sm text-gray-300">{intern.role}</p>
                  <p className="text-sm mt-2">{intern.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section (Premium Grid) */}
      <section className="relative z-10 my-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative block rounded-xl overflow-hidden bg-gray-900/80 group"
            >
              <div className="sharp-border"></div>
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-40 object-cover rounded-xl"
              />
              <div className="p-4">
                <span className="text-lg font-semibold text-green-400 group-hover:text-green-300 transition-colors">
                  {project.name}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
