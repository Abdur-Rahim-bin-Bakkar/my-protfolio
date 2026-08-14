"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
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
      const res = await fetch(`/api/projects?page=${page}&limit=${limit}`);
      const data = await res.json();
      setProjects(data.projects);
      setTotalPages(data.totalPages);
      setTotalProjects(data.totalProjects);
      setLoading(false);
    };
    getProjects();
  }, [page]);

  const SkeletonCard = () => (
    <div className="rounded-3xl border border-brand-card-border bg-brand-card/30 overflow-hidden animate-pulse">
      <div className="h-56 bg-text-muted/15" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-text-muted/15 rounded-full w-3/4" />
        <div className="h-4 bg-text-muted/15 rounded-full w-full" />
        <div className="h-4 bg-text-muted/15 rounded-full w-2/3" />
        <div className="flex gap-2">
          <div className="h-6 bg-text-muted/15 rounded-full w-16" />
          <div className="h-6 bg-text-muted/15 rounded-full w-20" />
          <div className="h-6 bg-text-muted/15 rounded-full w-14" />
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="relative py-32 bg-background px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/5 to-transparent blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-500/5 to-transparent blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-medium tracking-widest uppercase text-sm mb-3">My Work</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-500 rounded-full" />
        </motion.div>

        {/* Info bar */}
        <div className="flex justify-between items-center mb-10">
          <p className="text-sm text-text-muted">
            Showing{" "}
            <span className="font-bold text-text-secondary">
              {(page - 1) * limit + 1}
            </span>
            -
            <span className="font-bold text-text-secondary">
              {Math.min(page * limit, totalProjects)}
            </span>{" "}
            of{" "}
            <span className="font-bold text-text-secondary">
              {totalProjects}
            </span>{" "}
            projects
          </p>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project._id || index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Gradient border wrapper */}
                <div className="relative rounded-3xl bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-orange-500/10 p-[1px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                  <div className="relative rounded-3xl bg-brand-card/80 border border-brand-card-border overflow-hidden backdrop-blur-sm">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />

                      {/* Badge */}
                      <span className="absolute top-4 left-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-orange-500/30">
                        Featured
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="mb-3 text-xl font-bold text-text-primary group-hover:text-orange-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="mb-5 line-clamp-2 text-sm leading-7 text-text-muted">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.tags?.map((tag, i) => (
                          <span
                            key={`${project._id}-${i}-${tag}`}
                            className="rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1 text-xs font-medium text-orange-400"
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
                          className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-2.5 text-center text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02]"
                        >
                          Demo
                        </Link>

                        <Link
                          href={`/${project._id}`}
                          className="rounded-xl border border-orange-500/30 py-2.5 text-center text-sm font-semibold text-orange-400 transition-all hover:bg-orange-500/10 hover:border-orange-500/50"
                        >
                          Details
                        </Link>

                        <a
                          href={project.code}
                          target="_blank"
                          className="rounded-xl border border-brand-card-border py-2.5 text-center text-sm font-semibold text-text-secondary transition-all hover:border-orange-500/30 hover:text-orange-400"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-16">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-5 py-2.5 rounded-xl bg-brand-card/50 border border-brand-card-border text-sm font-medium text-text-secondary disabled:opacity-30 hover:border-orange-500/30 hover:text-orange-400 transition-all"
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                page === i + 1
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25"
                  : "bg-brand-card/50 border border-brand-card-border text-text-secondary hover:border-orange-500/30 hover:text-orange-400"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="px-5 py-2.5 rounded-xl bg-brand-card/50 border border-brand-card-border text-sm font-medium text-text-secondary disabled:opacity-30 hover:border-orange-500/30 hover:text-orange-400 transition-all"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
