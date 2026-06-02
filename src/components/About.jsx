"use client";
import React from 'react';
import { motion } from 'framer-motion';
import image from '@/assets/mex.png'
import Image from 'next/image';

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-primary">About ME</h2>
          <p className="text-text-secondary mt-2">My Introduction</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-94 h-80 object-cover rounded-3xl overflow-hidden bg-white dark:bg-brand-card border border-gray-200 dark:border-gray-700 shadow-xl transform -rotate-3 hover:rotate-0 transition-all duration-300">
              <Image
                src={image}
                alt="Jensen Professional"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-brand-card p-4 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="text-brand-orange mb-2 flex justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-black">Experience</h4>
                <p className="text-xs text-text-muted">Warking and learning</p>
              </div>

              <div className="bg-gray-50 dark:bg-brand-card p-4 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="text-brand-orange mb-2 flex justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-black">Completed</h4>
                <p className="text-xs text-text-muted">10+ Projects</p>
              </div>

              <div className="bg-gray-50 dark:bg-brand-card p-4 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="text-brand-orange mb-2 flex justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-black">Support</h4>
                <p className="text-xs text-text-muted">Online 24/12</p>
              </div>
            </div>

            <p className="text-text-secondary leading-relaxed">
              I’m a CST student and a MERN stack web developer who loves turning ideas into real-world web applications. I have experience working with modern technologies like React, Node.js, and MongoDB to build responsive and dynamic websites. I am always eager to learn new technologies and improve my skills.
            </p>

            <button onClick={handleDownload} className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-brand-orange/20">
              Download Resume
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
