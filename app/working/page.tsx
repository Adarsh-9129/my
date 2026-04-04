"use client";

import Link from "next/link";

export default function WorkingPage() {
  /* ================= DATA ================= */

  const experiences = [
   
    {
      role: "Frontend Developer",
      company: "Next.js",
      year: "2023 - 2024",
      color: "border-indigo-500",
      points: [
        "Designed UI components",
        "Optimized website speed",
        "Worked with designers",
      ],
    },
  ];

  const projects = [
    {
      name: "School Management System",
      tech: "Next.js + MongoDB",
      year: "2025",
      color: "border-green-500",
      page: "/school",
    },
    {
      name: "Portfolio Website",
      tech: "React + Tailwind",
      year: "2024",
      color: "border-yellow-500",
      page: "/portfolio",
    },
    {
      name: "E-Commerce Website",
      tech: "Next.js + Stripe",
      year: "2026",
      color: "border-purple-500",
      page: "/ecommerce",
    },
  ];

  /* ================= UI ================= */

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-700 via-purple-600 to-pink-500 px-5 py-14">

      {/* Main Box */}
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-6 md:p-12">

        {/* Header */}
        <header className="text-center mb-14">

          <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-3">
            Working Experience & Projects
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional experience and real-world projects that
            showcase my technical and creative skills.
          </p>

          {/* Back Button */}
          <div className="mt-5">
            <Link
              href="/"
              className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
            >
              ← Back to Home
            </Link>
          </div>

        </header>

        {/* ================= EXPERIENCE ================= */}
        <section className="mb-16">

          <h2 className="text-2xl font-bold text-indigo-700 mb-6 border-b pb-2">
            💼 Experience
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">

            {experiences.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6
                            border-t-4 ${item.color}
                            hover:scale-105 transition`}
              >

                <h3 className="text-lg font-semibold mb-1">
                  {item.role}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.company}
                </p>

                <span className="text-xs text-gray-500">
                  {item.year}
                </span>

                <ul className="mt-4 list-disc ml-5 text-sm text-gray-600 space-y-1">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

              </div>
            ))}

          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section>

          <h2 className="text-2xl font-bold text-indigo-700 mb-6 border-b pb-2">
            🚀 Projects
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {projects.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6
                            border-t-4 ${item.color}
                            hover:scale-105 transition`}
              >

                <h3 className="text-lg font-semibold mb-2">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.tech}
                </p>

                <span className="text-xs text-gray-500">
                  {item.year}
                </span>

                <a href={item.page}> 
                <button
                  className="mt-4 w-full py-2 text-sm font-semibold
                             text-indigo-600 border border-indigo-600
                             rounded-lg hover:bg-indigo-600 hover:text-white
                             transition"
                   

                >
                  View Details
                </button>
                </a>

              </div>
            ))}

          </div>
        </section>

      </div>

    </main>
  );
}
