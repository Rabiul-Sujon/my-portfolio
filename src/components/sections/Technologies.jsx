"use client";
import { motion } from "framer-motion";

const row1 = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
];

const row2 = [
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  {
    name: "NestJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  },
  {
    name: "SEO",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

function TechIcon({ tech, i }) {
  return (
    <motion.div
      custom={i}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.1 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: "76px",
          height: "76px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "border-color 0.3s, background 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(100,255,218,0.4)";
          e.currentTarget.style.background = "rgba(100,255,218,0.06)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
          e.currentTarget.style.background = "rgba(255,255,255,0.04)";
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tech.icon}
          alt={tech.name}
          style={{
            width: "36px",
            height: "36px",
            objectFit: "contain",
            filter:
              tech.name === "Express" || tech.name === "Next.js"
                ? "invert(1)"
                : "none",
          }}
        />
      </div>
      <span
        style={{
          fontSize: "13px",
          color: "rgba(204,214,246,0.5)",
          textAlign: "center",
        }}
      >
        {tech.name}
      </span>
    </motion.div>
  );
}

export default function Technologies() {
  return (
    <section
      id="technologies"
      style={{
        minHeight: "100vh",
        background: "#020C1B",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "60px", // Decreased section top margin/padding
        paddingBottom: "100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blue glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-800/10 rounded-full blur-3xl pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "45px", zIndex: 10 }} // Tightened title spacing
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: "#CCD6F6", margin: 0 }}>
          Technologies
        </h2>
        <p style={{ marginTop: "8px", fontSize: "12px", color: "rgba(204,214,246,0.4)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          My Tech Stack
        </p>
      </motion.div>

      {/* Row 1 */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
          maxWidth: "900px",
          marginBottom: "50px",
          zIndex: 10,
          position: "relative",
        }}
      >
        {row1.map((tech, i) => (
          <TechIcon key={tech.name} tech={tech} i={i} />
        ))}
      </div>

      {/* Row 2 */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
          maxWidth: "900px",
          zIndex: 10,
          position: "relative",
        }}
      >
        {row2.map((tech, i) => (
          <TechIcon key={tech.name} tech={tech} i={i + 8} />
        ))}
      </div>
    </section>
  );
}