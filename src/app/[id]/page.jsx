import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { notFound } from "next/navigation";

const ProjectDetailsPage = async ({ params }) => {
  const { id } = await params;

  // MongoDB Connection
  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME);

  // Get Single Project
  const currentProject = await db.collection("projects").findOne({
    _id: new ObjectId(id),
  });

  // If project not found
  if (!currentProject) {
    notFound();
  }

  return (
 <section className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-[#020617] dark:via-[#0F172A] dark:to-[#111827] py-20">
  <div className="max-w-7xl mx-auto px-5">

    {/* Back Button */}
    <Link
      href="/#projects"
      className="inline-flex items-center gap-2 rounded-full border border-orange-500 px-5 py-2 text-orange-500 font-semibold transition hover:bg-orange-500 hover:text-white dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-500 dark:hover:text-white"
    >
      ← Back to Projects
    </Link>

    <div className="grid lg:grid-cols-2 gap-16 mt-12 items-center">

      {/* Left Side */}
      <div className="group relative">

        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 opacity-20 blur-2xl group-hover:opacity-40 transition"></div>

        <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xl">

          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />

        </div>

      </div>

      {/* Right Side */}

      <div>

        <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-500 border border-orange-500/20 dark:bg-orange-500/15 dark:text-orange-400 dark:border-orange-400/30">
          🚀 Featured Project
        </span>

        <h1 className="mt-6 text-5xl font-extrabold text-gray-900 dark:text-slate-100">
          {currentProject.title}
        </h1>

        <p className="mt-6 text-lg leading-9 text-gray-600 dark:text-slate-300">
          {currentProject.description}
        </p>

        {/* Tech */}

        <div className="mt-10">

          <h2 className="mb-5 text-xl font-bold text-gray-900 dark:text-slate-100">
            Technologies
          </h2>

          <div className="flex flex-wrap gap-3">

            {currentProject.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-orange-500/20 bg-orange-50 dark:bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-600 dark:text-orange-300 dark:border-orange-400/20 transition hover:scale-105"
              >
                {tag}
              </span>
            ))}

          </div>

        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4 mt-12">

          <Link
            href={currentProject.demo}
            target="_blank"
            className="rounded-xl bg-orange-500 px-8 py-4 text-white font-semibold shadow-lg hover:bg-orange-600 transition"
          >
            🚀 Live Demo
          </Link>

          <Link
            href={currentProject.code}
            target="_blank"
            className="rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-8 py-4 font-semibold text-gray-700 dark:text-slate-200 hover:border-orange-500 hover:text-orange-500 dark:hover:border-orange-400 dark:hover:text-orange-400 transition"
          >
            💻 Source Code
          </Link>

        </div>

        {/* Info */}

        <div className="grid md:grid-cols-3 gap-5 mt-14">

          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 p-6 shadow-lg">

            <p className="text-sm text-gray-500 dark:text-slate-400">
              Category
            </p>

            <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-slate-100">
                {
                    currentProject?.category || 'Frontend'
                }
              
            </h3>

          </div>

          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 p-6 shadow-lg">

            <p className="text-sm text-gray-500 dark:text-slate-400">
              Status
            </p>

            <h3 className="mt-2 text-xl font-bold text-emerald-500">
               {
                    currentProject?.status || 'Working'
                }
            </h3>

          </div>

          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 p-6 shadow-lg">

            <p className="text-sm text-gray-500 dark:text-slate-400">
              Technologies
            </p>

            <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-slate-100">
              {currentProject.tags?.length}+
            </h3>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
  );
};

export default ProjectDetailsPage;