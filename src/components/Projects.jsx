"use client";
import React from 'react';
import { motion } from 'framer-motion';
import app from '@/assets/app.png'
import Image from 'next/image';
// "use client";

import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import Link from "next/link";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProjects, setTotalProjects] = useState(0);

  const limit = 3;



  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);

      const res = await fetch(
        `/api/projects?page=${page}&limit=${limit}`
      );

      const data = await res.json();

      setProjects(data.projects);
      setTotalPages(data.totalPages);
      setTotalProjects(data.totalProjects);

      setLoading(false);
    };

    getProjects();
  }, [page]);



  return (
    <section id="projects" className="py-24 bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">
            Projects
          </h2>

          <p className="text-gray-500">
            Showing{" "}
            <span className="font-bold">
              {(page - 1) * limit + 1}
            </span>
            -
            <span className="font-bold">
              {Math.min(page * limit, totalProjects)}
            </span>{" "}
            of{" "}
            <span className="font-bold">
              {totalProjects}
            </span>{" "}
            Projects
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <img src={app} alt="" />
          <h2 className="text-4xl font-bold light:text-black dark:text-white">Projects</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Most Recent Work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project._id || index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Badge */}
                <span className="absolute top-4 left-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                  Featured
                </span>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="mb-3 text-2xl font-bold text-gray-900 transition group-hover:text-orange-500 dark:text-white">
                  {project.title}
                </h3>

                <p className="mb-5 line-clamp-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-3 gap-3">

                  <Link
                    href={project.demo}
                    target="_blank"
                    className="rounded-xl bg-orange-500 py-2 text-center text-sm font-semibold text-white transition hover:bg-orange-600"
                  >
                    🚀 Demo
                  </Link>

                  <Link
                    href={project.code}
                    target="_blank"
                    className="rounded-xl border border-gray-300 py-2 text-center text-sm font-semibold text-gray-700 transition hover:border-orange-500 hover:text-orange-500 dark:border-gray-700 dark:text-gray-300 dark:hover:border-orange-500 dark:hover:text-orange-400"
                  >
                    💻 Code
                  </Link>

                  <Link
                    href={`/${project._id}`}
                    className="rounded-xl border border-orange-500 py-2 text-center text-sm font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
                  >
                    Details →
                  </Link>

                </div>

              </div>

              {/* Bottom Glow */}
              <div className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"></div>
            </motion.div>
          ))}
        </div>






        <div className="flex justify-center gap-2 mt-12">

          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 rounded-lg bg-gray-200 disabled:opacity-50"
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded-lg ${page === i + 1
                ? "bg-orange-500 text-white"
                : "bg-gray-200"
                }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-lg bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>

        </div>
      </div>
    </section>
  );
};

export default Projects;
