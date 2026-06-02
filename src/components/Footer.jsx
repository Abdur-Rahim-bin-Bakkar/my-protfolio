"use client";
import React from 'react';
import { motion } from 'framer-motion';
import github from '@/assets/github.png'
import linkedin from '@/assets/linkdin.png'
import Image from 'next/image';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer' className="bg-background border-t border-gray-200 dark:border-gray-800 py-16 px-4 mx-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold tracking-tight text-text-primary">Abdur <span className="text-brand-orange">Rahim</span></h2>
          <p className="text-text-secondary text-sm max-w-xs">Building professional web applications with modern technologies and a focus on user experience.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 gap-8"
        >
          <div>
            <h4 className="font-bold mb-6 text-text-primary">Quick Links</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><a href="#home" className="hover:text-brand-orange transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-orange transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-brand-orange transition-colors">Projects</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-text-primary">Services</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Development</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">SEO</a></li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h4 className="font-bold text-text-primary">Connect With Me</h4>
          <div className="flex gap-4 flex-col justify-center items-center md:items-start">
            <div className="flex gap-4 items-center">
              <a href="https://www.linkedin.com/in/fswd-abdur-rahim-bin-bakkar/" target="_blank">

                <FaLinkedin className='text-4xl hover:scale-110 duration-700 hover:text-orange-500' />
              </a>

              <a href="https://github.com/Abdur-Rahim-bin-Bakkar" target="_blank">
                <FaGithub className='text-4xl hover:scale-110 duration-700 hover:text-orange-500' />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61582681106407" target="_blank">
                <FaFacebook className='text-4xl hover:scale-110 duration-700 hover:text-orange-500' />
              </a>
            </div>
            <br />
            <div className='font-bold text-lg space-y-3'>

              <p>Phone Number: 01873135444</p>
              <p>Whats App: 01873135444</p>
              <p>Email: webdesignrahim4061@gmail.com</p>
            </div>
          </div>
        </motion.div>
      </div>

    </footer>
  );
};

export default Footer;
