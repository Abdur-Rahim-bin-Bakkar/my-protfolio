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
    <section className="min-h-screen bg-gray-50 dark:bg-[#0B1120] py-16">
      <div className="max-w-7xl mx-auto px-5">

        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all mb-10"
        >
          ← Back to Projects
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Image */}
          <div className="overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl group">
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right Side */}
          <div>

            <span className="inline-block px-4 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-4">
              🚀 Featured Project
            </span>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-5">
              {currentProject.title}
            </h1>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
              {currentProject.description}
            </p>

            {/* Technologies */}

            <div className="mt-10">

              <h2 className="text-xl font-bold dark:text-white mb-5">
                Technologies Used
              </h2>

              <div className="flex flex-wrap gap-3">

                {currentProject.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 text-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-12">

              <Link
                href={currentProject.demo}
                target="_blank"
                className="px-8 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
              >
                🚀 Live Demo
              </Link>

              <Link
                href={currentProject.code}
                target="_blank"
                className="px-8 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-orange-500 hover:text-orange-500 transition font-semibold"
              >
                💻 Source Code
              </Link>

            </div>

            {/* Information */}

            <div className="grid md:grid-cols-2 gap-5 mt-12">

              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-6">
                <h3 className="text-sm text-gray-500">
                  Category
                </h3>

                <p className="text-xl font-bold mt-2 dark:text-white">
                  Full Stack
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111827] p-6">
                <h3 className="text-sm text-gray-500">
                  Status
                </h3>

                <p className="text-xl font-bold mt-2 text-green-500">
                  Completed
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectDetailsPage;