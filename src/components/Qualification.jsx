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
      color: "from-orange-500 to-red-500",
      description:
        "Currently studying Computer Science & Technology and building full-stack projects.",
    },
    {
      title: "Secondary School Certificate (SSC)",
      institute: "Barai Bari AKU Institution",
      period: "2022",
      icon: <FaAward />,
      color: "from-green-500 to-emerald-500",
      description: "Completed SSC with GPA 5.00.",
    },
    {
      title: "Junior School Certificate (JSC)",
      institute: "Barai Bari AKU Institution",
      period: "2019",
      icon: <FaBookOpen />,
      color: "from-blue-500 to-cyan-500",
      description: "Completed Junior School Certificate successfully.",
    },
    {
      title: "Primary School Certificate (PSC)",
      institute: "Barai Bari AKU Institution",
      period: "2016",
      icon: <FaSchool />,
      color: "from-purple-500 to-pink-500",
      description: "Completed Primary education successfully.",
    },
    {
      title: "Primary Education Started",
      institute: "Barai Bari Primary School",
      period: "2010",
      icon: <FaSchool />,
      color: "from-yellow-500 to-orange-500",
      description: "Started educational journey with curiosity.",
    },
  ];

  return (
    <section id="qualifications" className="py-28 bg-background relative overflow-hidden">

      {/* background glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-500">
            Qualification Journey
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3">
            My education timeline
          </p>
        </motion.div>

        {/* Timeline wrapper */}
        <div className="relative">

          {/* center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-orange-500 via-red-500 to-orange-400 rounded-full"></div>

          <div className="space-y-16">

            {education.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative md:grid md:grid-cols-2 items-center gap-10"
                >

                  {/* LEFT SIDE (desktop only) */}
                  <div
                    className={`hidden md:block ${
                      isLeft ? "text-right" : "opacity-0"
                    }`}
                  >
                    {isLeft && (
                      <div className="ml-auto max-w-md p-6 rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-xl">

                        <div className={`w-14 h-14 ml-auto flex items-center justify-center text-white text-xl rounded-2xl bg-gradient-to-r ${item.color}`}>
                          {item.icon}
                        </div>

                        <h3 className="text-xl font-bold mt-4 dark:text-white">
                          {item.title}
                        </h3>

                        <p className="text-brand-orange mt-1">
                          {item.institute}
                        </p>

                        <p className="text-gray-500 dark:text-gray-400 mt-3">
                          {item.description}
                        </p>

                        <span className="inline-block mt-4 px-4 py-2 bg-brand-orange text-white rounded-full text-sm">
                          {item.period}
                        </span>

                      </div>
                    )}
                  </div>

                  {/* CENTER DOT */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                    <div
                      className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} border-4 border-background`}
                    ></div>
                  </div>

                  {/* RIGHT SIDE (desktop only) */}
                  <div
                    className={`hidden md:block ${
                      !isLeft ? "text-left" : "opacity-0"
                    }`}
                  >
                    {!isLeft && (
                      <div className="mr-auto max-w-md p-6 rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-xl">

                        <div className={`w-14 h-14 flex items-center justify-center text-white text-xl rounded-2xl bg-gradient-to-r ${item.color}`}>
                          {item.icon}
                        </div>

                        <h3 className="text-xl font-bold mt-4 dark:text-white">
                          {item.title}
                        </h3>

                        <p className="text-brand-orange mt-1">
                          {item.institute}
                        </p>

                        <p className="text-gray-500 dark:text-gray-400 mt-3">
                          {item.description}
                        </p>

                        <span className="inline-block mt-4 px-4 py-2 bg-brand-orange text-white rounded-full text-sm">
                          {item.period}
                        </span>

                      </div>
                    )}
                  </div>

                  {/* MOBILE (single column - NO DUPLICATION ISSUE) */}
                  <div className="md:hidden">
                    <div className="p-6 rounded-3xl bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xl">

                      <div className={`w-12 h-12 flex items-center justify-center text-white text-lg rounded-xl bg-gradient-to-r ${item.color}`}>
                        {item.icon}
                      </div>

                      <h3 className="text-lg font-bold mt-3 dark:text-white">
                        {item.title}
                      </h3>

                      <p className="text-brand-orange text-sm mt-1">
                        {item.institute}
                      </p>

                      <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                        {item.description}
                      </p>

                      <span className="inline-block mt-3 px-3 py-1 bg-brand-orange text-white rounded-full text-xs">
                        {item.period}
                      </span>

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