"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML', level: 'Advanced' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Tailwind', level: 'Advanced' },
    { name: 'Bootstrap', level: 'Basic' },
    { name: 'Next.js', level: 'Intermediate' },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Express', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'Better Auth', level: 'Basic' },
  ];

  const techIcons = [
    { name: 'HTML', logo: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'CSS', logo: 'https://cdn.simpleicons.org/css3/1572B6' },
    { name: 'JS', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'ES6', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'DOM', logo: 'https://cdn.simpleicons.org/codeigniter/EF4444' },
    { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Next', logo: 'https://cdn.simpleicons.org/nextdotjs/000/fff' },
    { name: 'Tailwind', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Daisy', logo: 'https://cdn.simpleicons.org/daisyui/5AD7E4' },
    { name: 'HeroUI', logo: 'https://cdn.simpleicons.org/nextui/000/fff' },
    { name: 'Node', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Express', logo: 'https://cdn.simpleicons.org/express/000/fff' },
    { name: 'Mongo', logo: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { name: 'Auth', logo: 'https://cdn.simpleicons.org/auth0/EB5424' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-primary">Technologies</h2>
          <p className="text-text-secondary mt-2">My Tech Stack</p>
        </motion.div>

        {/* Scrolling/Grid Tech Icons */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-20"
        >
          {techIcons.map((icon) => (
            <motion.div 
              key={icon.name} 
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center p-3 shadow-md border border-gray-100 dark:border-gray-700 cursor-default group" title={icon.name}
            >
              <img 
                src={icon.logo} 
                alt={icon.name} 
                className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
              />
            </motion.div>
          ))}
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Frontend Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-brand-card p-10 rounded-[2.5rem] border border-gray-200 dark:border-gray-700 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <h3 className="text-2xl font-bold mb-10 text-center text-text-primary flex items-center justify-center gap-3">
              <span className="w-8 h-1 bg-brand-orange rounded-full"></span>
              Frontend Developer
              <span className="w-8 h-1 bg-brand-orange rounded-full"></span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-4 group/item">
                  <div className="text-brand-orange bg-brand-orange/10 p-2 rounded-lg group-hover/item:bg-brand-orange group-hover/item:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-text-primary">{skill.name}</p>
                    <p className="text-xs text-text-muted font-medium uppercase tracking-wider">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Backend Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-brand-card p-10 rounded-[2.5rem] border border-gray-200 dark:border-gray-700 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <h3 className="text-2xl font-bold mb-10 text-center text-gray-900 dark:text-white flex items-center justify-center gap-3">
              <span className="w-8 h-1 bg-green-500 rounded-full"></span>
              Backend Developer
              <span className="w-8 h-1 bg-green-500 rounded-full"></span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-4 group/item">
                  <div className="text-green-500 bg-green-500/10 p-2 rounded-lg group-hover/item:bg-green-500 group-hover/item:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-text-primary">{skill.name}</p>
                    <p className="text-xs text-text-muted font-medium uppercase tracking-wider">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
