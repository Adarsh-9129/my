"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Form Data:", form);
    alert("Message Sent Successfully!");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-700 via-purple-600 to-yellow-400 px-6 py-20">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-14">
        <section className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Have a project idea or need support? Let’s work together and build something great.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12">
          {/* Left side - contact info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Mail />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600 text-sm">shivmishra77777@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Phone />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600 text-sm">+91 9129190628</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <MapPin />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600 text-sm">India</p>
              </div>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-xl">
              <h4 className="font-semibold text-indigo-900 mb-2">Why Contact Me?</h4>
              <p className="text-sm text-indigo-700 leading-relaxed">
                I help businesses and individuals turn ideas into high-performing digital products with modern technologies.
              </p>
            </div>
          </div>

          {/* Right side - form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 text-gray-400" size={18} />
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="w-full pl-10 pr-4 py-2.5 border rounded-lg resize-none focus:ring-2 focus:ring-indigo-500 outline-none transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}