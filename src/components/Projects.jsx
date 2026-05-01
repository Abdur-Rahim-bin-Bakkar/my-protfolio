"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'GameHub Pro',
      description: 'The ultimate live streaming platform for gamers to connect and compete globally.',
      tags: ['React', 'Tailwind', 'Socket.io'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPGXCmaeby6aXkKBI8clU57N2sNRsPcnkxE5qfjvbRVpOcQEd_WQsV8KkKecUVq2HxbRXokpvpvtmP_cHrxHsfRjDbd8SqhfvI7Bx-AK_6ITUxywsQyWmwPSNJ8iqLEKSv46XeJvDBnGmFO-XWv2u2gsK5LkQE_Ho06pU7U9iiZVn1sJTLeLfaYmy0JJXB0wKgXLmTSecjk2s0MiRNrpjtf758jTte2mPeabv4QMh3AXI6_HLaDBvTUZ-E6prE6DqytnsnelRF2vz7',
      demo: '#',
      code: '#'
    },
    {
      title: 'DocSync AI',
      description: 'Real-time collaborative document editor with AI-powered suggestions and dark mode.',
      tags: ['Node.js', 'MongoDB', 'Next.js'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqhUxWFrpy2bYxJ9Yr80_hhikLZnK9VDZVwtKlciyn6_gXjODnRmxdTykSiyz3GnQ_7lZ0gvv9FX4F39D2UcyovfR7aprtqaTZ3ACPsPxYzNmSqGBVahHCiK9dTQxQevQuvvrgDRPkCRoaUDQuj_QbYqthLdCD3LwBVWGFo3zdE5CYyIB5gdTdhV97Ik4U8AfQxOrLjWDcuZUFqKvYC-lnYKbar2zRh4jALTE5vI-L3Ki-WN8Tno2Gx1BPTRmja1ZS3ajtfSVQ-DDN',
      demo: '#',
      code: '#'
    },
    {
      title: 'CloudVault',
      description: 'A secure cloud storage solution with folder management and instant file sharing features.',
      tags: ['Firebase', 'React', 'S3'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwiPySpLVfm1peKxg67ysscsortHTQUCcI4xgVrDbX5EiWD6EwKMSXq-BTYh9uIHqmAWkp7q7Vr_uN5_azaZGmvHkHsHBsSLZ03yq_b2ntH2FGIyytdZcbgS9VYfVTGm9y2O_9saGVvgs22EdajMD1i3D4di8FQ333foI4Tgr8wVfrt_kP-azhUiSjjLM0zchoFfP8j1GoOvxGPSRdsE73w8dpuYtxyP0O0K0Y5U2ly1-hgsFkU73Q2ZqQRTEgtgMRrJ-sHuLIglw7',
      demo: '#',
      code: '#'
    }
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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Projects</h2>
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
