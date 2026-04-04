import Link from "next/link";
import Image from "next/image";

export default function Resume() {

  // ===== EXPERIENCE DATA =====
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Academic Project",
      year: "2023 - 2024",
      color: "border-indigo-500",
      points: [
        "Designed UI components",
        "Optimized website speed",
        "Worked with designers",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-purple-600 to-yellow-400 px-4 py-10">

      {/* Overlay */}
      <div className="min-h-screen bg-white/85 backdrop-blur-sm rounded-2xl shadow-2xl max-w-6xl mx-auto overflow-hidden">

        {/* ===== HEADER ===== */}
        <div className="bg-black/70 text-white p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Profile */}
            <div className="flex items-center gap-5">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/copy.png"
                  alt="Profile"
                  width={120}
                  height={120}
                  className="object-cover"
                />
              </div>

              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Adarsh Mishra
                </h1>

                <p className="text-blue-300 text-lg">
                  Full Stack Developer
                </p>

                <p className="text-sm text-gray-300">
                  📍 India | ✉️ shivmishra77777@gmail.com
                </p>
              </div>
            </div>

            {/* Navbar */}
            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-2">
              <ul className="flex gap-8 text-sm font-semibold">
                <li className="hover:text-yellow-300 transition">
                  <Link href="/">HOME</Link>
                </li>
                <li className="hover:text-yellow-300 transition">
                  <Link href="/expertise">EXPERTISE</Link>
                </li>
                <li className="hover:text-yellow-300 transition">
                  <Link href="/working">WORKING</Link>
                </li>
                <li className="text-yellow-300">
                  <Link href="/contact">CONTACT</Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* ===== BODY ===== */}
        <div className="p-6 md:p-10 grid md:grid-cols-3 gap-8 text-gray-800">

          {/* ===== LEFT SIDE ===== */}
          <div className="space-y-7">

            {/* About */}
            <div>
              <h2 className="text-xl font-bold text-indigo-700 mb-2">
                About Me
              </h2>
              <p className="text-sm leading-relaxed">
                Passionate Full Stack Developer experienced in building
                scalable, modern and responsive applications.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xl font-bold text-indigo-700 mb-2">
                Skills
              </h2>
              <ul className="space-y-1 text-sm">
                <li>✔ HTML / CSS / Tailwind</li>
                <li>✔ JavaScript / TypeScript</li>
                <li>✔ React / Next.js</li>
                <li>✔ Node.js / MongoDB</li>
                <li>✔ Git / GitHub</li>
                <li>✔ Coral Draw</li>
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-xl font-bold text-indigo-700 mb-2">
                Languages
              </h2>
              <ul className="text-sm space-y-1">
                <li>Hindi</li>
                <li>English</li>
              </ul>
            </div>

          </div>

          {/* ===== RIGHT SIDE ===== */}
          <div className="md:col-span-2 space-y-10">

            {/* Education */}
            <div>
              <h2 className="text-xl font-bold text-indigo-700 mb-4">
                Education
              </h2>

              <div className="space-y-4">

                {/* BCA */}
                <div className="bg-white rounded-xl shadow p-5 border-l-4 border-indigo-500">
                  <h3 className="font-semibold">
                    Bachelor of Computer Application
                  </h3>
                  <p className="text-sm text-gray-600">
                   MAYA DEVI  University (M.D.U)
                  </p>
                  <span className="text-xs text-gray-500">
                    2023 - 2027
                  </span>
                </div>

                {/* 12th */}
                <div className="bg-white rounded-xl shadow p-5 border-l-4 border-indigo-500">
                  <h3 className="font-semibold">
                    Intermediate (12th)
                  </h3>
                  <p className="text-sm text-gray-600">
                    {/* Add your board name if you want, e.g. CBSE / ISC / UP Board */}
                    [R.P.S.R.D.INTER COLLEGE(U.P)BOARDS]
                  </p>
                  <span className="text-xs text-gray-500">
                    2021 - 2023
                  </span>
                </div>

                {/* 10th */}
                <div className="bg-white rounded-xl shadow p-5 border-l-4 border-indigo-500">
                  <h3 className="font-semibold">
                    High School (10th)
                  </h3>
                  <p className="text-sm text-gray-600">
                    {/* Add your board name if you want */}
                    [L.D.S.D.GIRLS.INTER COLLEGE(U.P)BOARDS]
                  </p>
                  <span className="text-xs text-gray-500">
                    2020 - 2021
                  </span>
                </div>

              </div>
            </div>

            {/* ===== WORKING EXPERIENCE ===== */}
            <div>
              <h2 className="text-xl font-bold text-indigo-700 mb-4">
                Working Experience
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {experiences.map((item, index) => (
                  <div
                    key={index}
                    className={`relative bg-white rounded-2xl shadow-xl p-6
                      border-t-4 ${item.color}
                      hover:-translate-y-2 hover:shadow-2xl
                      transition-all duration-300`}
                  >
                    <span className="absolute -top-3 right-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow">
                      Active
                    </span>

                    <h3 className="text-lg font-bold mb-1">
                      {item.role}
                    </h3>

                    <p className="text-sm text-indigo-600 font-medium">
                      {item.company}
                    </p>

                    <p className="text-xs text-gray-500 mb-3">
                      {item.year}
                    </p>

                    <ul className="space-y-1 text-sm text-gray-600 list-disc ml-5">
                      {item.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ===== FOOTER ===== */}
        <footer className="bg-black/80 text-gray-300 mt-10">
          <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6 text-sm">

            {/* About */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Adarsh Mishra
              </h3>
              <p>
                Passionate Full Stack Developer building modern, fast and
                scalable web applications.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Quick Links
              </h3>
              <ul className="space-y-1">
                <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
                <li><Link href="/expertise" className="hover:text-yellow-400">Expertise</Link></li>
                
                <li><a href="https://www.linkedin.com/in/adarsh-mishra-60541a3ab" target="_blank" className="hover:text-yellow-400">LinkedIn</a></li>
                <li><a href="https://github.com/Adarsh-9129" target="_blank" className="hover:text-yellow-400">Github</a></li>
                <li><a href="https://www.instagram.com/" target="_blank" className="hover:text-yellow-400">Instagram</a></li>

              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Contact
              </h3>
              <ul className="space-y-1">
                <li>📍 India</li>
                <li>✉️ shivmishra77777@gmail.com</li>
                <li>📞 +91 9129190628</li>
              </ul>
            </div>

          </div>

          <div className="border-t border-white/20 text-center py-4 text-xs">
            © {new Date().getFullYear()} Adarsh Mishra | All Rights Reserved
          </div>
        </footer>

      </div>
    </div>
  );
}