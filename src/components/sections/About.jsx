"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";
import { FiBriefcase, FiFolder, FiHeadphones } from "react-icons/fi";

const stats = [
  {
    icon: <FiBriefcase size={22} />,
    heading: "Experience",
    sub: "1 Year Working",
  },
  {
    icon: <FiFolder size={22} />,
    heading: "Completed",
    sub: "10+ Projects",
  },
  {
    icon: <FiHeadphones size={22} />,
    heading: "Support",
    sub: "Online 24/7",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen relative overflow-hidden bg-[#020C1B] flex flex-col items-center justify-center px-6 py-10"
    >
      {/* Blue glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-800/10 rounded-full blur-3xl pointer-events-none" />

      {/* Heading */}
      <motion.div
        className="text-center mb-16 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-[#CCD6F6]">About</h2>
        <p className="mt-2 text-sm text-[#CCD6F6]/40 tracking-widest uppercase">
          My Introduction
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 max-w-6xl w-full">

        {/* Left — Photo */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ width: "340px", height: "420px", position: "relative" }}
        >
          <Image
            src="/rabiul--sujon.png"
            alt="Rabiul Sujon"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top",
              maskImage:
                "linear-gradient(to bottom, black 60%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 60%, transparent 100%)",
            }}
          />
        </motion.div>

        {/* Right — Content */}
        <div className="flex flex-col gap-8 flex-1">

          {/* Stat Cards */}
          <motion.div
            className="grid grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.heading}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(100,255,218,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(100,255,218,0.15)";
                }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(100,255,218,0.15)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "12px",
                  padding: "20px 16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "default",
                  transition: "border-color 0.3s",
                }}
              >
                <span style={{ color: "#64FFDA" }}>{stat.icon}</span>
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#CCD6F6" }}>
                  {stat.heading}
                </span>
                <span style={{ fontSize: "11px", color: "rgba(237,242,254,0.4)", textAlign: "center" }}>
                  {stat.sub}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              color: "rgba(204,214,246,0.6)",
              fontSize: "15px",
              lineHeight: "1.85",
            }}
          >
            Proficient in React.js, Next.js, Node.js, and MongoDB, I build
            scalable, high-performance web applications. Skilled in RESTful
            APIs, Express.js, and modern frontend tools, I craft clean UI
            with Tailwind CSS and ShadCN. With an eye for design and a
            passion for performance, I deliver real-time systems and impactful
            digital experiences — from concept to deployment.
          </motion.p>

          {/* Download Resume */}
          <motion.a
            href="/resume.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            whileHover={{
              borderColor: "rgba(100,255,218,0.4)",
              color: "#64FFDA",
              background: "rgba(100,255,218,0.06)",
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 28px",
              border: "1px solid rgba(204,214,246,0.2)",
              borderRadius: "8px",
              color: "#CCD6F6",
              fontSize: "14px",
              fontWeight: 500,
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(10px)",
              textDecoration: "none",
              width: "fit-content",
            }}
          >
            Download Resume
            <HiDownload size={18} />
          </motion.a>

        </div>
      </div>
    </section>
  );
}