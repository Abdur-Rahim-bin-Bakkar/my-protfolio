"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowUp,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-orange-500/20 bg-gradient-to-b from-[#0f172a] via-[#111827] to-black text-white"
    >
      {/* Background Blur */}
      <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-600/10 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-5">
              Abdur{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Rahim
              </span>
            </h2>

            <p className="text-gray-400 leading-8">
              Passionate Full Stack Developer creating modern, scalable and
              high-performance web applications using Next.js, React, Node.js
              and MongoDB.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="rounded-full bg-orange-500 px-6 py-3 font-semibold transition hover:scale-105 hover:bg-orange-600"
              >
                Hire Me
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                className="rounded-full border border-orange-500 px-6 py-3 font-semibold transition hover:bg-orange-500"
              >
                Resume
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-orange-400">
              Quick Links
            </h3>

            <div className="space-y-4">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 transition hover:text-orange-400 hover:translate-x-2"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-orange-400">
              Services
            </h3>

            <div className="space-y-4 text-gray-400">
              <p>✔ Full Stack Development</p>
              <p>✔ Frontend Development</p>
              <p>✔ Backend API</p>
              <p>✔ MongoDB Database</p>
              <p>✔ Authentication</p>
              <p>✔ Responsive Website</p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-orange-400">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex gap-3 items-center">
                <FaPhoneAlt className="text-orange-500" />
                <span>+8801873135444</span>
              </div>

              <div className="flex gap-3 items-center">
                <FaWhatsapp className="text-orange-500" />
                <span>+8801873135444</span>
              </div>

              <div className="flex gap-3 items-center">
                <FaEnvelope className="text-orange-500" />
                <span>webdesignrahim4061@gmail.com</span>
              </div>

              <div className="flex gap-3 items-center">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>Dhaka, Bangladesh</span>
              </div>

              {/* Social */}
              <div className="flex gap-5 pt-6">

                <a
                  href="https://github.com/Abdur-Rahim-bin-Bakkar"
                  target="_blank"
                  className="text-3xl transition duration-300 hover:-translate-y-2 hover:text-orange-500"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/fswd-abdur-rahim-bin-bakkar/"
                  target="_blank"
                  className="text-3xl transition duration-300 hover:-translate-y-2 hover:text-orange-500"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61582681106407"
                  target="_blank"
                  className="text-3xl transition duration-300 hover:-translate-y-2 hover:text-orange-500"
                >
                  <FaFacebook />
                </a>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

        {/* Bottom */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-center text-gray-500">
            © {currentYear}{" "}
            <span className="text-orange-400 font-semibold">
              Abdur Rahim
            </span>
            . All Rights Reserved.
          </p>

          <button
            onClick={scrollTop}
            className="group rounded-full bg-orange-500 p-4 transition hover:scale-110 hover:bg-orange-600"
          >
            <FaArrowUp className="group-hover:-translate-y-1 transition" />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;