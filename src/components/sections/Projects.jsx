"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const projects = [
  
  {
    image: "/studynook.png",
    title: "StudyNook",
    description:
      'A full-stack library room booking platform where users can browse, book, and manage study rooms with JWT authentication and Firebase login.',
    tags: ["React", "Express.js", "MongoDB", "Firebase", "JWT", "DaisyUI"],
    github: "https://github.com/Rabiul-Sujon/studynook-client",
    demo: "https://studynook-client-beryl.vercel.app/",
  },
  {
    image: "/momentumx.png",
    title: "MomentumX",
    description:
      'A full-stack Fitness & Gym Management Platform with class booking, Stripe payments, community forum, and role-based dashboards for User, Trainer, and Admin.',
    tags: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB", "Stripe", "Better Auth"],
    github: "https://github.com/Rabiul-Sujon/momentumx-client",
    demo: "https://momentumx-client.vercel.app/",
  },
  {
    image: "/borrowbooks.png",
    title: "BorrowBooks",
    description:
      'A full-stack book marketplace built with Next.js and Better Auth where users can browse, borrow, and manage books with role-based access.',
    tags: ["Next.js", "MongoDB", "Better Auth", "DaisyUI"],
    github: "https://github.com/Rabiul-Sujon/borrowbooks.next",
    demo: "https://borrowbooks-next.vercel.app/",
  },
];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Projects() {
  return (
    <section style={{ backgroundColor: "#020C1B", padding: "40px 0 80px" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 32px" }}>

        {/* Heading */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <h2 style={{ color: "#CCD6F6", fontSize: "32px", fontWeight: 700 }}>Projects</h2>
          <p style={{ color: "rgba(204,214,246,0.45)", fontSize: "14px", marginTop: "8px" }}>Recent Projects</p>
        </motion.div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(100,255,218,0.1)",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
              whileHover={{ borderColor: "rgba(100,255,218,0.35)" }}
            >
          {/* Image */}
          <div style={{
           width: "100%",
           height: "180px",
           overflow: "hidden",
           borderBottom: "1px solid rgba(100,255,218,0.08)",
         }}>
           <img
           src={project.image}
           alt={project.title}
           style={{
           width: "100%",
           height: "100%",
           objectFit: "cover",
        }}
         />
         </div>

              {/* Content */}
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>

                <h3 style={{ color: "#CCD6F6", fontSize: "15px", fontWeight: 700 }}>{project.title}</h3>

                <p style={{ color: "rgba(204,214,246,0.45)", fontSize: "12px", lineHeight: 1.7 }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "rgba(100,255,218,0.07)",
                        border: "1px solid rgba(100,255,218,0.15)",
                        borderRadius: "20px",
                        padding: "3px 10px",
                        color: "#64FFDA",
                        fontSize: "11px",
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "10px", marginTop: "auto", paddingTop: "12px" }}>
                  
                    <a href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: "6px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(204,214,246,0.15)",
                      borderRadius: "8px",
                      padding: "8px 14px",
                      color: "#CCD6F6",
                      fontSize: "12px",
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    <FaGithub size={14} /> GitHub
                  </a>
                  
                   <a href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: "6px",
                      background: "rgba(100,255,218,0.08)",
                      border: "1px solid rgba(100,255,218,0.25)",
                      borderRadius: "8px",
                      padding: "8px 14px",
                      color: "#64FFDA",
                      fontSize: "12px",
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    <HiOutlineExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}