"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      gradient: 'from-orange-500 to-red-500',
      bgGlow: 'bg-orange-500/5',
      borderGlow: 'border-orange-500/20',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'TypeScript', level: 70 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 80 },
        { name: 'Next.js', level: 75 },
        { name: 'Tailwind', level: 92 },
        { name: 'Bootstrap', level: 60 },
        { name: 'Hero UI', level: 70 },
        { name: 'Daisy UI', level: 75 },
      ],
    },
    {
      title: 'Backend',
      gradient: 'from-green-500 to-emerald-500',
      bgGlow: 'bg-green-500/5',
      borderGlow: 'border-green-500/20',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 75 },
        { name: 'MongoDB', level: 75 },
        { name: 'Prisma', level: 65 },
        { name: 'PostgreSQL', level: 65 },
        { name: 'Better Auth', level: 50 },
      ],
    },
    {
      title: 'Tools',
      gradient: 'from-blue-500 to-cyan-500',
      bgGlow: 'bg-blue-500/5',
      borderGlow: 'border-blue-500/20',
      skills: [
        { name: 'REST API', level: 85 },
        { name: 'Figma', level: 65 },
        { name: 'Git', level: 80 },
        { name: 'GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
      ],
    },
  ];

  const techIcons = [
    { name: 'HTML', logo: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/1280px-Official_CSS_Logo.svg.png' },
    { name: 'TS', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'JS', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Next', logo: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
    { name: 'Tailwind', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Node', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Express', logo: 'https://cdn.simpleicons.org/express/ffffff' },
    { name: 'Mongo', logo: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { name: 'Prisma', logo: 'https://cdn.simpleicons.org/prisma/2D3748' },
    { name: 'Postgres', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'Git', logo: 'https://cdn.simpleicons.org/git/F05032' },
    { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma/F24E1E' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="relative py-32 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-500/3 via-orange-500/3 to-orange-500/3 blur-3xl rounded-full" />
      <div className="absolute top-20 right-20 w-4 h-4 border border-orange-500/20 rounded-full animate-float" />
      <div className="absolute bottom-20 left-20 w-3 h-16 bg-gradient-to-b from-orange-500/10 to-transparent rounded-full animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-medium tracking-widest uppercase text-sm mb-3">What I Know</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-500 rounded-full" />
        </motion.div>

        {/* Scrolling/Grid Tech Icons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-24"
        >
          {techIcons.map((icon) => (
            <motion.div
              key={icon.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-500/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-16 h-16 bg-brand-card/60 border border-brand-card-border rounded-2xl flex items-center justify-center p-3 shadow-lg hover:border-orange-500/30 transition-all duration-300 cursor-default" title={icon.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={icon.logo}
                  alt={icon.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center text-xs text-text-muted mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{icon.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.15 }}
              className={`relative p-8 rounded-3xl border ${category.borderGlow} bg-brand-card/30 backdrop-blur-sm overflow-hidden group`}
            >
              {/* Background glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 ${category.bgGlow} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />

              {/* Title */}
              <div className="relative z-10 mb-8">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className={`mt-2 w-12 h-1 rounded-full bg-gradient-to-r ${category.gradient}`} />
              </div>

              {/* Skills */}
              <div className="relative z-10 space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                      <span className="text-xs text-text-muted">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.05, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
