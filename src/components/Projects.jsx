"use client";
import React from 'react';
import { motion } from 'framer-motion';
import app from '@/assets/app.png'
import Image from 'next/image';

const Projects = () => {
  console.log(app)
  const projects = [
    {
      id:1,
      title: 'Online-Book-Borrowing-Platform',
      description: 'Online-Book-Borrowing-Platform, There have email password and google authentication system.',
      tags: ['Next JS', 'MongoDb','Better Auth', "HTML", "CSS", "Java Script",'Tailwind'],
      image: 'https://i.ibb.co.com/PZJVtBvp/Screenshot-2026-05-01-212108.png',
      demo: 'https://book-library-two-kohl.vercel.app/',
      code: 'https://github.com/Abdur-Rahim-bin-Bakkar/Online-Book-Borrowing-Platform-'
    },
    {
      id:2,
      title: 'News web application',
      description: 'Real-time News Application, Journalism Without Fear or Favour There have email password and google authentication system.',
      tags: ['Next JS', 'MongoDb','Better Auth', "HTML", "CSS", "Java Script",'Tailwind'],
      image: 'https://i.ibb.co.com/SDvmzB7s/Screenshot-2026-05-01-211731.png',
      demo: 'https://dragon-news-two-gold.vercel.app/news/01',
      code: 'https://github.com/Abdur-Rahim-bin-Bakkar/dragon-news-web-application'
    },
    {
      id:3,
      title: 'Application stor',
      description: 'a simple application stor web application',
      tags: ['React Router', 'React', "HTML", "CSS", "Java Script",'Tailwind'],
      image: 'https://i.ibb.co.com/xtvLVCXD/Screenshot-2026-05-01-201825.png',
      demo: 'https://application-stor-abdur-rahim.vercel.app/',
      code: 'https://github.com/Abdur-Rahim-bin-Bakkar/application-store'
    },
    {
      id:4,
      title: 'KeenKeeper',
      description: 'KeenKeeper is a modern relationship management web app that helps users keep track of their friends, interactions, and connection status. It allows users to organize meaningful relationships, monitor engagement frequency, and ensure no important connection is neglected.',
      tags: ['Next JS', 'React', "HTML", "CSS", "Java Script",'Tailwind','Daisy UI'],
      image: 'https://i.ibb.co.com/cKw1M3qN/Screenshot-2026-05-01-212807.png',
      demo: 'https://communication-web-application.vercel.app/',
      code: 'https://github.com/Abdur-Rahim-bin-Bakkar/keen-keeper-application-with-next-js'
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <img src={app} alt="" />
          <h2 className="text-4xl font-bold light:text-black dark:text-white">Projects</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Most Recent Work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-brand-card rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 group hover:border-brand-orange/50 transition-all shadow-sm"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase font-bold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-600 dark:text-gray-300">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <a href={project.demo} className="text-xs font-bold text-brand-orange flex items-center gap-1 hover:underline">
                    Demo <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                  <a href={project.code} className="text-xs font-bold text-gray-500 dark:text-gray-400 flex items-center gap-1 hover:underline">
                    Code <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                  <a href={`/${project.id}`} className="text-xs font-bold text-gray-500 dark:text-gray-400 flex items-center gap-1 hover:underline">
                    View Details <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
