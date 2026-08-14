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

  const techLogos = {
    'HTML': 'https://cdn.simpleicons.org/html5/E34F26',
    'CSS': 'https://cdn.simpleicons.org/css/663399',
    'TypeScript': 'https://cdn.simpleicons.org/typescript/3178C6',
    'JavaScript': 'https://cdn.simpleicons.org/javascript/F7DF1E',
    'React': 'https://cdn.simpleicons.org/react/61DAFB',
    'Next.js': 'https://cdn.simpleicons.org/nextdotjs/000000',
    'Tailwind': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
    'Bootstrap': 'https://cdn.simpleicons.org/bootstrap/7952B3',
    'Hero UI': 'https://cdn.simpleicons.org/heroui/6D28D9',
    'Daisy UI': 'https://cdn.simpleicons.org/daisyui/5A0EF8',
    'Node.js': 'https://cdn.simpleicons.org/nodedotjs/339933',
    'Express': 'https://cdn.simpleicons.org/express/000000',
    'MongoDB': 'https://cdn.simpleicons.org/mongodb/47A248',
    'Prisma': 'https://cdn.simpleicons.org/prisma/2D3748',
    'PostgreSQL': 'https://cdn.simpleicons.org/postgresql/4169E1',
    'Better Auth': 'https://cdn.simpleicons.org/betterauth/6D28D9',
    'REST API': 'https://cdn.simpleicons.org/openapiinitiative/6BA539',
    'Figma': 'https://cdn.simpleicons.org/figma/F24E1E',
    'Git': 'https://cdn.simpleicons.org/git/F05032',
    'GitHub': 'https://cdn.simpleicons.org/github/181717',
    'VS Code': 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg',
  };

  const invertableLogos = new Set(['Next.js', 'Express', 'Prisma', 'GitHub']);

  const initialGradient = {
    'Better Auth': 'from-purple-500 to-fuchsia-500',
  };

  const renderLogo = (name, className) => {
    const logo = techLogos[name];

    if (logo) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt={name}
          title={name}
          className={`${className} ${invertableLogos.has(name) ? 'dark:invert' : ''} object-contain`}
        />
      );
    }

    return (
      <span
        className={`bg-gradient-to-br ${initialGradient[name] || 'from-orange-500 to-orange-600'} flex items-center justify-center font-bold text-white ${className}`}
      >
        {name}
      </span>
    );
  };

  const techIcons = [
    ...new Map(
      skillCategories.flatMap((category) =>
        category.skills.map((skill) => [skill.name, skill.name])
      )
    ).values(),
  ].map((name) => ({ name, logo: techLogos[name] }));

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
          className="flex flex-wrap justify-center gap-4 sm:gap-5 mb-24"
        >
          {techIcons.map((icon) => (
            <motion.div
              key={icon.name}
              variants={itemVariants}
              whileHover={{ scale: 1.08, y: -6 }}
              className="group flex flex-col items-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-orange-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-2xl border border-brand-card-border bg-gradient-to-br from-brand-card to-brand-card/50 dark:from-brand-card dark:to-brand-card/40 flex items-center justify-center p-3.5 shadow-md group-hover:border-orange-500/40 group-hover:shadow-orange-500/20 group-hover:shadow-lg transition-all duration-300 cursor-default" title={icon.name}>
                  {renderLogo(icon.name, "w-full h-full")}
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-0.5 rounded-full bg-gradient-to-r from-orange-500/0 via-orange-500/70 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="mt-3 text-center text-xs font-medium text-text-secondary group-hover:text-orange-400 transition-colors duration-300">
                {icon.name}
              </p>
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
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex items-center gap-2 text-sm font-medium text-text-primary">
                        {renderLogo(skill.name, "w-4 h-4")}
                        {skill.name}
                      </span>
                      <span className="text-xs text-text-muted">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-text-muted/20 rounded-full overflow-hidden">
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
