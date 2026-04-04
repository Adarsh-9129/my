"use client";
import React from "react";
import {
  Code,
  Monitor,
  Database,
  Smartphone,
  Globe,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link"; // ← added this import (assuming Next.js)

export default function ExpertisePage() {
  const skills = [
    {
      title: "Web Development",
      desc: "Modern and scalable websites with clean architecture.",
      icon: <Globe size={32} />,
    },
    {
      title: "Frontend Development",
      desc: "High-end UI using React, Next.js & Tailwind CSS.",
      icon: <Monitor size={32} />,
    },
    {
      title: "Backend Development",
      desc: "Secure APIs using Node.js, Express & MongoDB.",
      icon: <Database size={32} />,
    },
    {
      title: "Mobile App Development",
      desc: "Android & iOS apps using React Native.",
      icon: <Smartphone size={32} />,
    },
    {
      title: "Full Stack Development",
      desc: "Complete end-to-end web solutions.",
      icon: <Code size={32} />,
    },
    {
      title: "Cyber Security",
      desc: "Website security, authentication & data protection.",
      icon: <ShieldCheck size={32} />,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 px-4 py-16">
      {/* ===== Header ===== */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
          My Expertise
        </h1>
        <p className="text-blue-600 mt-4 max-w-2xl mx-auto">
          I provide high quality digital solutions using modern
          technologies and best practices.
        </p>
      </div>

      {/* ===== Cards Section (Achievement Style) ===== */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((item, index) => (
          <div
            key={index}
            className="relative h-[230px] rounded-3xl overflow-hidden
                       group cursor-pointer shadow-xl"
          >
            {/* Background Gradient */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-sky-600 to-cyan-500
                         group-hover:from-indigo-600 group-hover:to-purple-600
                         transition-all duration-500"
            ></div>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>
            {/* Content */}
            <div
              className="relative h-full flex flex-col items-center justify-center
                         text-center px-6"
            >
              {/* Icon */}
              <div className="mb-4 text-white scale-110">
                {item.icon}
              </div>
              {/* Title */}
              <h3 className="text-white text-lg md:text-xl font-semibold">
                {item.title}
              </h3>
              {/* Description */}
              <p className="text-white/90 text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ===== Back to Home Button ===== */}
      <div className="max-w-6xl mx-auto text-center mt-16 mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 
                     bg-gradient-to-r from-indigo-600 to-purple-600 
                     hover:from-indigo-700 hover:to-purple-700 
                     text-white font-medium text-lg rounded-full 
                     shadow-lg hover:shadow-xl transition-all duration-300 
                     transform hover:-translate-y-1"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}