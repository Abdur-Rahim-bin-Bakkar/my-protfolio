"use client";
import React from 'react';
import { motion } from 'framer-motion';
import image from '@/assets/me.png'
import Image from 'next/image';

const Hero = () => {
  const technologies = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 
    'Node.js', 'Express', 'MongoDB', 'Bootstrap', 'DaisyUI', 'HeroUI', 'Better Auth',
    'ES6', 'DOM', 'Prisma', 'PostgreSQL', 'TypeScript'
  ];

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 mt-15">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-grow">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block">
            <h2 className="text-2xl font-medium flex items-center gap-2">
              Hello <span className="text-brand-orange">.</span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-brand-orange mt-1"
            ></motion.div>
          </div>
          <h1 className="text-2xl  md:text-5xl font-bold leading-tight text-text-primary">
            I'm Abdur Rahim bin bakar<br />
            <span className="text-text-secondary">Web Developer</span>
          </h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a href="#projects" className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-brand-orange/20">
              Get a project?
            </a>
            <a href="#about" className="border border-gray-300 dark:border-gray-600 hover:border-brand-orange dark:hover:border-brand-orange px-8 py-3 rounded-lg font-semibold transition-all text-text-secondary">
              My resume
            </a>
            <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/fswd-abdur-rahim-bin-bakkar/" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-text-secondary hover:bg-brand-orange hover:text-white transition-all shadow-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
          
            <a href="https://github.com/Abdur-Rahim-bin-Bakkar" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-text-secondary hover:bg-brand-orange hover:text-white transition-all shadow-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.61-4.041-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
          </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 border-4 border-brand-orange/30 rounded-full scale-110"></div>
            <div className="absolute inset-0 border border-brand-orange/20 rounded-full scale-125"></div>
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-brand-dark hero-glow bg-gray-200 dark:bg-gray-800">
              <Image 
                src={image} 
                alt="Jensen Profile" 
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
        className="mt-20 py-10 border-y border-gray-100 dark:border-gray-800/50 overflow-hidden relative"
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        <div className="flex animate-marquee whitespace-nowrap">
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="text-xl md:text-2xl font-bold
              light:text-black dark:text-white  hover:text-brand-orange dark:hover:text-brand-orange transition-colors cursor-default uppercase tracking-widest">
                {tech}
              </span>
              <span className="mx-8 w-2 h-2 bg-brand-orange rounded-full opacity-20"></span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
