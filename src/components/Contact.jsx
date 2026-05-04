"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-primary">Get in Touch</h2>
          <p className="text-text-secondary mt-2">Contact Me</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-center text-text-primary">Talk to me</h3>

            <div className="bg-gray-50 dark:bg-brand-card p-6 rounded-2xl border border-gray-200 dark:border-gray-700 text-center space-y-3 hover:border-orange-500 transition-all shadow-sm">

              {/* Icon */}
              <div className="text-orange-500 flex justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Title */}
              <h4 className="font-bold text-gray-900 dark:text-white">
                Email Me
              </h4>

              {/* Email */}
              <p className="text-sm text-gray-600 dark:text-gray-300">
                webdesignrahim4061@gmail.com
              </p>

              {/* Button */}
              <a
                href="mailto:webdesignrahim4061@gmail.com"
                className="inline-block text-sm font-semibold text-orange-500 hover:text-orange-600 transition"
              >
                Send a message →
              </a>

            </div>


            <div className="bg-gray-50 dark:bg-brand-card p-6 rounded-2xl border border-gray-200 dark:border-gray-700 text-center space-y-2 hover:border-brand-orange transition-colors shadow-sm">
              <div className="text-brand-orange flex justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <h4 className="font-bold text-text-primary">LinkedIn</h4>
              <p className="text-sm text-text-secondary">Abdur Rahim Bin Bakkar</p>
              <a href="https://www.linkedin.com/in/fswd-abdur-rahim-bin-bakkar/" className="text-xs font-bold text-text-muted block pt-2">Write me →</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-xl font-bold text-center text-text-primary">Write me your project</h3>
            <form
              action="https://formsubmit.co/webdesignrahim4061@gmail.com"
              method="POST"
              className="space-y-6 text-gray-900 dark:text-white"
            >

              {/* Disable captcha (important for smooth submit) */}
              <input type="hidden" name="_captcha" value="false" />

              {/* Optional: redirect after submit */}
              <input type="hidden" name="_next" value="https://your-website.com/thank-you" />

              {/* NAME */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white 
      border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-4 
      focus:border-orange-500 focus:ring-0 peer outline-none placeholder-transparent transition-all"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 transition-all
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
      peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs
      peer-focus:bg-white dark:peer-focus:bg-gray-900 peer-focus:px-1
      peer-focus:text-orange-500"
                >
                  Name
                </label>
              </div>

              {/* EMAIL */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white 
      border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-4 
      focus:border-orange-500 focus:ring-0 peer outline-none placeholder-transparent transition-all"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 transition-all
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
      peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs
      peer-focus:bg-white dark:peer-focus:bg-gray-900 peer-focus:px-1
      peer-focus:text-orange-500"
                >
                  Email
                </label>
              </div>

              {/* MESSAGE */}
              <div className="relative">
                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white 
      border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-4 
      focus:border-orange-500 focus:ring-0 peer outline-none placeholder-transparent transition-all"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 transition-all
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
      peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs
      peer-focus:bg-white dark:peer-focus:bg-gray-900 peer-focus:px-1
      peer-focus:text-orange-500"
                >
                  Message
                </label>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold
    flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>

            </form>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
