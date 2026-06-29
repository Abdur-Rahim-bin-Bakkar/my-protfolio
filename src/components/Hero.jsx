"use client";
import React from 'react';
import { motion } from 'framer-motion';
import image from '@/assets/me.png'
import Image from 'next/image';
import github from '@/assets/github.png'
import linkedin from '@/assets/linkdin.png'
import HeroTyping from './HeroTyping';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Hero = () => {
  const technologies = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS',
    'Node.js', 'Express', 'MongoDB', 'Bootstrap', 'DaisyUI', 'HeroUI', 'Better Auth',
    'ES6', 'DOM', 'Prisma', 'PostgreSQL', 'TypeScript'
  ];

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 mt-15">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >

          {/* INTRO */}
          <div>
            <p className="text-lg text-gray-400 flex items-center gap-2">
              Hello <span className="text-orange-500 text-xl">👋</span>
            </p>

            <div className="w-16 h-[3px] bg-orange-500 mt-2 rounded-full"></div>
          </div>

          {/* NAME */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-text-primary">
            I am <span className="text-orange-500">Abdur Rahim</span><br />
            bin Bakkar
          </h1>

          {/* TYPING */}
          <HeroTyping />

          {/* CTA + SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4 items-center"
          >
            <Link
              href="#projects"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold shadow-lg transition-all hover:scale-105"
            >
              🚀 Get a Project
            </Link>

            <Link
              href="#about"
              className="px-6 py-3 border border-gray-400 dark:border-gray-600 rounded-xl font-semibold text-text-secondary hover:border-orange-500 transition hover:scale-105"
            >
              📄 My Resume
            </Link>

            {/* SOCIAL */}
            <div className="flex gap-4 ml-2">
              <Link href="https://www.linkedin.com" target="_blank">
                <FaLinkedin className="text-3xl hover:text-orange-500 transition hover:scale-110" />
              </Link>

              <Link href="https://github.com" target="_blank">
                <FaGithub className="text-3xl hover:text-orange-500 transition hover:scale-110" />
              </Link>

              <a href="https://facebook.com" target="_blank">
                <FaFacebook className="text-3xl hover:text-orange-500 transition hover:scale-110" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <div className="relative group">

            {/* glow background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-purple-500 blur-3xl opacity-25 rounded-full group-hover:opacity-40 transition"></div>

            {/* rings */}
            <div className="absolute inset-0 border-2 border-orange-500/30 rounded-full scale-110"></div>
            <div className="absolute inset-0 border border-orange-500/20 rounded-full scale-125"></div>

            {/* image */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl group-hover:scale-105 transition duration-500">
              <Image
                src={image}
                alt="Abdur Rahim Profile"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </motion.div>

      </div>

      {/* Technology Marquee */}
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2, duration: 1 }}
  className="mt-20 py-10 border-y border-gray-100 dark:border-gray-800/40 overflow-hidden relative group"
>

  {/* LEFT FADE */}
  <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>

  {/* RIGHT FADE */}
  <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

  {/* MARQUEE */}
  <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">

    {[...technologies, ...technologies].map((tech, index) => (
      <div
        key={index}
        className="flex items-center mx-10 md:mx-14"
      >
        <span className="text-lg md:text-2xl font-semibold tracking-[0.2em] uppercase text-gray-500 dark:text-gray-300 hover:text-orange-500 transition-colors duration-300">
          {tech}
        </span>

        <span className="mx-6 w-1.5 h-1.5 bg-orange-500/40 rounded-full"></span>
      </div>
    ))}

  </div>
</motion.div>
    </section>
  );
};

export default Hero;
