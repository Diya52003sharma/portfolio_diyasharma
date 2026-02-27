import React, { useState } from "react";

export default function Portfolio() {
  const [open, setOpen] = useState(false);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [msg, setMsg] = useState("");

  return (
    <div className="font-sans bg-[#0b0f14] text-slate-200 scroll-smooth">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed w-full top-0 left-0 bg-[#0b0f14]/90 backdrop-blur border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          {/* LOGO */}
          <a href="#home" className="flex flex-col">
            <span className="text-2xl font-extrabold tracking-widest text-emerald-400">
              FOCUS
            </span>
            <span className="text-xs text-slate-400">Build - Learn - Grow</span>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-6 text-lg">
            <a href="#home" className="hover:text-emerald-400">Home</a>
            <a href="#skills" className="hover:text-emerald-400">Skills</a>
            <a href="#projects" className="hover:text-emerald-400">Projects</a>
            <a href="#contact" className="hover:text-emerald-400">Contact</a>
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden flex flex-col justify-between w-6 h-5"
            onClick={() => setOpen(!open)}
          >
            <span className="block h-0.5 bg-slate-300"></span>
            <span className="block h-0.5 bg-slate-300"></span>
            <span className="block h-0.5 bg-slate-300"></span>
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-[#0b0f14] px-6 pb-4">
            <a href="#home" className="block py-2 hover:text-emerald-400">Home</a>
            <a href="#skills" className="block py-2 hover:text-emerald-400">Skills</a>
            <a href="#projects" className="block py-2 hover:text-emerald-400">Projects</a>
            <a href="#contact" className="block py-2 hover:text-emerald-400">Contact</a>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center text-center px-6 pt-28
        bg-gradient-to-br from-[#0b0f14] via-[#0f172a] to-[#042f2e]"
      >
        <div>
          <h2 className="text-6xl md:text-6xl font-extrabold 
            bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm Diya Sharma
          </h2>

          <p className="text-xl mt-4 text-slate-300">Frontend Developer</p>

          <p className="mt-4 max-w-2xl mx-auto text-slate-400 leading-relaxed">
            Frontend Developer focused on crafting clean, responsive, and visually
            engaging web interfaces using modern technologies.
          </p>

          <a
            href="\Diya_Sharma_Resume_web developer.pdf"
            download
            target="_blank"
            className="inline-block mt-6 px-8 py-3 rounded-xl
            bg-gradient-to-r from-emerald-500 to-cyan-500
            text-black font-semibold hover:scale-105 transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="py-20 bg-[#0f172a]">
        <h2 className="text-center text-4xl font-bold text-emerald-400 mb-12">
          Skills
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 px-6">
          {[
            { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Tailwind CSS", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
            { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
            { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "AWS", img: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
    { name: "Linux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
{ name: "Ubuntu", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
{ name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },

{ name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },

{ name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },

{ name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },

{ name: "Vercel", img: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },

{ name: "Netlify", img: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },

          ].map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-4 p-6
              border border-slate-800 rounded-2xl
              hover:bg-[#0b0f14] font-semibold 
              hover:shadow-[0_0_25px_rgba(52,211,153,0.2)]
              transition bg-gradient-to-t from-emerald-500 to-cyan-500"
            >
              <img src={skill.img} alt={skill.name} className="w-16 h-16" />
              <p className="font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-20 bg-[#0b0f14]">
        <h2 className="text-center text-4xl font-bold text-emerald-400 mb-12">
          Projects
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          {[
            {
              title: "AI Mock Interview Platform",
              desc: "AI-powered interview system with feedback and analytics.",
              link: "https://ai-interview-lwxx.onrender.com/",
            },
            {
              title: "Engineering Hub",
              desc: "Student resource platform with notes and videos.",
              link: "https://engghub.onrender.com/",
            },
            {
              title: "Hotel Website",
              desc: "Responsive hotel website built with React.",
              link: "",
            },
            {
  title: "PG Project",
  desc: "A responsive PG accommodation website where users can browse rooms, view facilities, check pricing, and contact owners. Built with React for smooth UI and modern user experience.",
  link: "http://54.226.184.69:5000/",
},
{
  title: "Fitzen project",
  desc: "A full-stack fitness web application that provides AI-generated diet plans, trainer booking, and online package payments. Built using React, Node.js, Express, MongoDB, and Stripe integration.",
  link: "http://13.233.230.15/",
},
{
  title: "Mechanic Project",
  desc: "A vehicle service management platform where users can add vehicles, book services, and interact with mechanics. Includes admin dashboard, authentication, and AI assistant integration using MERN stack.",
  link: "http://13.233.111.214:5000/",
},
          ].map((project) => (
            <div
              key={project.title}
              className="bg-[#020617] border border-slate-800 rounded-2xl p-6
              hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
              transition"
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {project.title}
              </h3>
              <p className="mt-3 text-slate-400">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                className="inline-block mt-4 text-emerald-300 hover:text-emerald-400"
              >
                Live →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
     {/* ================= CONTACT ================= */}
<section id="contact" className="py-20 bg-[#0f172a]">
  <h2 className="text-center text-4xl font-bold text-emerald-400 mb-10">
    Contact Me
  </h2>

  <div className="max-w-xl mx-auto p-6 bg-[#020617] border border-slate-800 rounded-2xl">
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();

        const phoneNumber = "919878458281"; // ✅ country code ke sath
        const text = `Hello! 👋\n\nName: ${name}\nEmail: ${email}\nMessage: ${msg}`;

        window.open(
          `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
          "_blank"
        );
      }}
    >
      <input
        type="text"
        className="p-3 bg-[#0b0f14] border border-slate-800 rounded-lg outline-emerald-400"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        className="p-3 bg-[#0b0f14] border border-slate-800 rounded-lg outline-emerald-400"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <textarea
        rows="4"
        className="p-3 bg-[#0b0f14] border border-slate-800 rounded-lg outline-emerald-400"
        placeholder="Message"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        required
      />

      <button
        type="submit"
        className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold p-3 rounded-lg hover:scale-105 transition"
      >
        Send Message on WhatsApp
      </button>
    </form>
  </div>
</section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-6 text-slate-500 bg-[#0b0f14] border-t border-slate-800">
        © 2025 Diya Sharma | Frontend Developer
      </footer>
    </div>
  );
}
