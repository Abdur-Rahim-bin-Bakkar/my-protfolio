"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    const formData = new FormData(e.target);

    const response = await fetch(
      "https://formsubmit.co/ajax/webdesignrahim4061@gmail.com",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      setSuccess("Message sent successfully!");
      e.target.reset();
    } else {
      setSuccess("Something went wrong.");
    }

    setLoading(false);
  };
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
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-green-500">
                Let's Talk 👋
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-400 leading-7">
                Have an idea, project, or job opportunity?
                Feel free to reach out through any platform below.
                I'll reply as soon as possible.
              </p>
            </div>

            {/* EMAIL */}

            <a
              href="mailto:webdesignrahim4061@gmail.com"
              className="group flex items-center gap-5 rounded-3xl border border-gray-200 dark:border-white/10
    bg-white/70 dark:bg-white/5
    backdrop-blur-xl
    p-6
    shadow-lg
    hover:shadow-orange-500/20
    hover:border-orange-500
    hover:-translate-y-2
    duration-300"
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl
      bg-orange-100
      dark:bg-orange-500/20"
              >
                <FaEnvelope className="text-3xl text-orange-500" />
              </div>

              <div className="flex-1">
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                  Email
                </h4>

                <p className="text-gray-600 dark:text-gray-400">
                  webdesignrahim4061@gmail.com
                </p>

                <span className="text-orange-500 font-semibold">
                  Send Email →
                </span>
              </div>
            </a>

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/fswd-abdur-rahim-bin-bakkar/"
              target="_blank"
              className="group flex items-center gap-5 rounded-3xl border border-gray-200 dark:border-white/10
    bg-white/70 dark:bg-white/5
    backdrop-blur-xl
    p-6
    shadow-lg
    hover:shadow-blue-500/20
    hover:border-blue-500
    hover:-translate-y-2
    duration-300"
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl
      bg-blue-100
      dark:bg-blue-500/20"
              >
                <FaLinkedin className="text-3xl text-blue-600" />
              </div>

              <div className="flex-1">
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                  LinkedIn
                </h4>

                <p className="text-gray-600 dark:text-gray-400">
                  Abdur Rahim Bin Bakkar
                </p>

                <span className="text-blue-500 font-semibold">
                  Connect →
                </span>
              </div>
            </a>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/8801873135444"
              target="_blank"
              className="group flex items-center gap-5 rounded-3xl border border-gray-200 dark:border-white/10
    bg-white/70 dark:bg-white/5
    backdrop-blur-xl
    p-6
    shadow-lg
    hover:shadow-green-500/20
    hover:border-green-500
    hover:-translate-y-2
    duration-300"
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl
      bg-green-100
      dark:bg-green-500/20"
              >
                <FaWhatsapp className="text-3xl text-green-500" />
              </div>

              <div className="flex-1">
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                  WhatsApp
                </h4>

                <p className="text-gray-600 dark:text-gray-400">
                  +880 1873-135444
                </p>

                <span className="text-green-500 font-semibold">
                  Chat Now →
                </span>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-200 dark:border-white/10
  bg-white/70 dark:bg-white/5
  backdrop-blur-xl
  shadow-xl
  p-8 lg:p-10"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Let's Build Something Amazing 🚀
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Tell me about your project and I'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}

              <div>
                <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-2xl
        border border-gray-300 dark:border-white/10
        bg-white dark:bg-[#161B22]
        px-5 py-4
        text-gray-900 dark:text-white
        outline-none
        transition-all
        focus:border-orange-500
        focus:ring-4
        focus:ring-orange-500/20"
                />
              </div>

              {/* EMAIL */}

              <div>
                <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@gmail.com"
                  className="w-full rounded-2xl
        border border-gray-300 dark:border-white/10
        bg-white dark:bg-[#161B22]
        px-5 py-4
        text-gray-900 dark:text-white
        outline-none
        transition-all
        focus:border-orange-500
        focus:ring-4
        focus:ring-orange-500/20"
                />
              </div>

              {/* MESSAGE */}

              <div>
                <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                  Project Details
                </label>

                <textarea
                  rows={6}
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full rounded-2xl
        border border-gray-300 dark:border-white/10
        bg-white dark:bg-[#161B22]
        px-5 py-4
        text-gray-900 dark:text-white
        outline-none
        resize-none
        transition-all
        focus:border-orange-500
        focus:ring-4
        focus:ring-orange-500/20"
                />
              </div>

              {/* BUTTON */}

              <button
                disabled={loading}
                type="submit"
                className="group flex w-full items-center justify-center gap-3
      rounded-2xl
      bg-gradient-to-r
      from-orange-500
      to-orange-600
      py-4
      text-lg
      font-semibold
      text-white
      shadow-lg
      transition-all
      hover:scale-[1.02]
      hover:shadow-orange-500/30
      disabled:cursor-not-allowed
      disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        opacity=".25"
                      />
                      <path
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>

                    Sending...
                  </>
                ) : (
                  <>
                    Send Message

                    <svg
                      className="h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M22 2L11 13"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M22 2L15 22L11 13L2 9L22 2Z"
                      />
                    </svg>
                  </>
                )}
              </button>

              {success && (
                <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center text-green-700 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-400">
                  {success}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
