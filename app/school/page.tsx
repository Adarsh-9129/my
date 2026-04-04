export default function SchoolProjectDetails() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat p-6 flex justify-center"
      style={{
        backgroundImage: `url('https://thumbs.dreamstime.com/b/abstract-pink-flowing-waves-background-elegant-ethereal-featuring-translucent-various-shades-against-clean-white-419142632.jpg')`,
      }}
    >
      {/* Light overlay for readability on soft pink bg */}
      <div className="absolute inset-0 bg-black/20"></div> {/* Zyada dark na ho, sirf thoda contrast */}

      <div className="max-w-4xl w-full bg-white/92 backdrop-blur-md p-8 rounded-2xl shadow-xl relative z-10 border border-white/20">

        {/* Header */}
        <h1 className="text-3xl font-bold text-indigo-700 mb-2">
          School Management System
        </h1>

        <p className="text-gray-600 mb-6">
          Complete School Administration & Management Software
        </p>

        {/* Overview */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            Project Overview
          </h2>

          <p className="text-gray-700 leading-relaxed">
            This project helps schools manage students, teachers,
            attendance, fees, exams, and communication using a
            digital platform. It reduces paperwork and improves efficiency.
          </p>
        </section>

        {/* Features */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            Main Features
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Student Registration & Profile Management</li>
            <li>Teacher & Staff Management</li>
            <li>Daily Attendance Tracking System</li>
            <li>Fee Collection & Due Management</li>
            <li>Exam Results & Report Cards</li>
            <li>Parent Notification System</li>
            <li>Online Notices & Announcements</li>
            <li>Admin Dashboard</li>
          </ul>
        </section>

        {/* Technology */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "React",
              "Tailwind CSS",
              "MongoDB",
              "Node.js",
              "REST API",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Responsibilities */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            My Role
          </h2>

          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Designed UI using Tailwind CSS</li>
            <li>Developed frontend in Next.js</li>
            <li>Connected backend APIs</li>
            <li>Managed database structure</li>
            <li>Tested and deployed project</li>
          </ul>
        </section>

        {/* Back Button */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-block bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition"
          >
            ← Back to Resume
          </a>
        </div>

      </div>
    </div>
  );
}