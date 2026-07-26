"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaSchool,
  FaBookOpen,
  FaAward,
} from "react-icons/fa";

const Qualification = () => {
  const education = [
    {
      title: "Diploma in Engineering",
      institute: "Tangail Polytechnic Institute",
      period: "2023 - Present",
      icon: <FaGraduationCap />,
      gradient: "from-orange-500 to-red-500",
      description:
        "Currently studying Computer Science & Technology and building full-stack projects.",
    },
    {
      title: "Secondary School Certificate",
      institute: "Barai Bari AKU Institution",
      period: "2022",
      icon: <FaAward />,
      gradient: "from-emerald-500 to-teal-500",
      description: "Completed SSC with GPA 5.00.",
    },
    {
      title: "Junior School Certificate",
      institute: "Barai Bari AKU Institution",
      period: "2019",
      icon: <FaBookOpen />,
      gradient: "from-blue-500 to-cyan-500",
      description: "Completed Junior School Certificate successfully.",
    },
    {
      title: "Primary School Certificate",
      institute: "Barai Bari AKU Institution",
      period: "2016",
      icon: <FaSchool />,
      gradient: "from-orange-500 to-orange-500",
      description: "Completed Primary education successfully.",
    },
    {
      title: "Primary Education Started",
      institute: "Barai Bari Primary School",
      period: "2010",
      icon: <FaSchool />,
      gradient: "from-orange-500 to-orange-500",
      description: "Started educational journey with curiosity.",
    },
  ];

  return (
    <section id="qualifications" className="relative py-32 bg-background overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-orange-500/5 to-orange-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-500/5 to-orange-500/5 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-orange-500/30 rounded-full animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 border border-orange-500/20 rounded-full animate-float-delayed" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-orange-500 font-medium tracking-widest uppercase text-sm mb-3">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Qualification <span className="gradient-text">Timeline</span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-500 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-orange-500 via-orange-500 to-orange-500 rounded-full"
            />
          </div>

          <div className="space-y-12">
            {education.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative md:grid md:grid-cols-2 items-center gap-10"
                >

                  {/* LEFT SIDE (desktop) */}
                  <div className={`hidden md:block ${isLeft ? "text-right" : ""}`}>
                    {isLeft && (
                      <div className="ml-auto max-w-md p-6 rounded-2xl bg-brand-card/40 border border-brand-card-border backdrop-blur-sm hover:border-orange-500/20 transition-all duration-300">
                        <div className={`w-12 h-12 ml-auto flex items-center justify-center text-white text-lg rounded-xl bg-gradient-to-r ${item.gradient} shadow-lg`}>
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-bold mt-4 text-text-primary">
                          {item.title}
                        </h3>
                        <p className="text-orange-400 text-sm mt-1 font-medium">
                          {item.institute}
                        </p>
                        <p className="text-text-secondary mt-3 text-sm leading-relaxed">
                          {item.description}
                        </p>
                        <span className={`inline-block mt-4 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${item.gradient} text-white`}>
                          {item.period}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CENTER DOT */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                      className={`w-5 h-5 rounded-full bg-gradient-to-r ${item.gradient} border-[3px] border-background shadow-lg shadow-orange-500/20`}
                    />
                  </div>

                  {/* RIGHT SIDE (desktop) */}
                  <div className={`hidden md:block ${!isLeft ? "text-left" : ""}`}>
                    {!isLeft && (
                      <div className="mr-auto max-w-md p-6 rounded-2xl bg-brand-card/40 border border-brand-card-border backdrop-blur-sm hover:border-orange-500/20 transition-all duration-300">
                        <div className={`w-12 h-12 flex items-center justify-center text-white text-lg rounded-xl bg-gradient-to-r ${item.gradient} shadow-lg`}>
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-bold mt-4 text-text-primary">
                          {item.title}
                        </h3>
                        <p className="text-orange-400 text-sm mt-1 font-medium">
                          {item.institute}
                        </p>
                        <p className="text-text-secondary mt-3 text-sm leading-relaxed">
                          {item.description}
                        </p>
                        <span className={`inline-block mt-4 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${item.gradient} text-white`}>
                          {item.period}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* MOBILE */}
                  <div className="md:hidden">
                    <div className="relative pl-8">
                      {/* Mobile line */}
                      <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-500/50 to-orange-500/50 rounded-full" />
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className={`absolute left-0 top-2 w-4 h-4 rounded-full bg-gradient-to-r ${item.gradient} border-[2px] border-background shadow-lg`}
                      />
                      <div className="p-5 rounded-2xl bg-brand-card/40 border border-brand-card-border backdrop-blur-sm">
                        <div className={`w-10 h-10 flex items-center justify-center text-white text-sm rounded-lg bg-gradient-to-r ${item.gradient} shadow-lg`}>
                          {item.icon}
                        </div>
                        <h3 className="text-base font-bold mt-3 text-text-primary">
                          {item.title}
                        </h3>
                        <p className="text-orange-400 text-xs mt-1 font-medium">
                          {item.institute}
                        </p>
                        <p className="text-text-secondary mt-2 text-xs leading-relaxed">
                          {item.description}
                        </p>
                        <span className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.gradient} text-white`}>
                          {item.period}
                        </span>
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
