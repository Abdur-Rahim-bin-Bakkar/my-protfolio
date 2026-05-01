"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Qualification = () => {
  const education = [
    { 
      title: 'Diploma in Engineering', 
      company: 'Tangail polytechnic institute', 
      period: '2023 - Present' 
    },
    { 
      title: 'Secondary School Certificate (SSC)', 
      company: 'Barai Bari AKU Institution', 
      period: '2022',
      details: 'Result: GPA 5.00'
    },
    { 
      title: 'Junior School Certificate (JSC)', 
      company: 'Barai Bari AKU Institution', 
      period: '2019' 
    },
    { 
      title: 'Primary School Certificate (PSC)', 
      company: 'Barai Bari AKU Institution', 
      period: '2016' 
    },
    { 
      title: 'Primary Education', 
      company: 'Barai Bari Primary School', 
      period: 'Started in 2010' 
    },
  ];

  return (
    <section id="qualifications" className="py-24 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Qualification</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">My journey</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center gap-2 font-bold text-brand-orange text-xl">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l9-5-9-5-9 5 9 5zm0 0v6" />
            </svg>
            Education
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800"></div>
          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative grid grid-cols-2 gap-8 items-start"
              >
                {/* Left Side */}
                <div className={index % 2 === 0 ? "text-right" : "text-right opacity-0 pointer-events-none"}>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.company}</p>
                  <p className="text-xs text-brand-orange font-semibold mt-1">{item.period}</p>
                  {item.details && <p className="text-xs text-green-600 dark:text-green-400 font-bold mt-1">{item.details}</p>}
                </div>
                
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-1">
                  <div className="w-4 h-4 bg-brand-orange rounded-full border-4 border-white dark:border-brand-dark"></div>
                </div>
                
                {/* Right Side */}
                <div className={index % 2 !== 0 ? "pl-8 text-left" : "pl-8 opacity-0 pointer-events-none"}>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.company}</p>
                  <p className="text-xs text-brand-orange font-semibold mt-1">{item.period}</p>
                  {item.details && <p className="text-xs text-green-600 dark:text-green-400 font-bold mt-1">{item.details}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
