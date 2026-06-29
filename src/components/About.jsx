"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "@/assets/mex.png";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Abdur_Rahim_Resume.pdf";
    link.click();
  };

  const stats = [
    {
      title: "Experience",
      value: "1+ Year",
      desc: "Learning & Building",
      icon: "⏳",
    },
    {
      title: "Projects",
      value: "10+",
      desc: "Completed Works",
      icon: "🚀",
    },
    {
      title: "Support",
      value: "24/7",
      desc: "Available Online",
      icon: "💬",
    },
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">

      {/* background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-text-primary">
            About <span className="text-brand-orange">Me</span>
          </h2>
          <p className="text-text-secondary mt-3 text-lg">
            Get to know more about who I am
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl blur opacity-40 group-hover:opacity-70 transition"></div>

              <div className="relative w-80 h-96 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl transform hover:scale-105 transition duration-300">
                <Image
                  src={image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white/70 dark:bg-brand-card backdrop-blur border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition text-center"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-bold text-sm">{item.title}</h4>
                  <p className="text-brand-orange font-bold">{item.value}</p>
                  <p className="text-xs text-text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-text-secondary leading-relaxed text-lg">
              I’m a passionate <span className="text-brand-orange font-semibold">MERN Stack Developer</span> and CST student.
              I love building modern, responsive, and user-friendly web applications.
              My goal is to turn ideas into real-world digital products using clean and scalable code.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleDownload}
                className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-orange-500/30 transition hover:scale-105"
              >
                Download Resume
              </button>

              <a
                href="#contact"
                className="px-8 py-3 rounded-xl border border-gray-400 dark:border-gray-600 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Contact Me
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;