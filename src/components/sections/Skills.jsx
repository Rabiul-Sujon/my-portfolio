"use client";

import { motion } from "framer-motion";
import {
  FaHtml5, FaNodeJs, FaDocker, FaWordpress,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiJavascript,
  SiReact, SiExpress, SiMongodb, SiFirebase,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";

const frontendSkills = [
  { icon: <FaHtml5 size={18} />, name: "HTML5", level: "Expert" },
  { icon: <SiNextdotjs size={18} />, name: "Next.JS", level: "Expert" },
  { icon: <SiJavascript size={18} />, name: "JavaScript", level: "Expert" },
  { icon: <SiReact size={18} />, name: "React.JS", level: "Expert" },
  { icon: <SiTailwindcss size={18} />, name: "Tailwind CSS", level: "Intermediate" },
  { icon: <FaWordpress size={18} />, name: "WordPress", level: "Intermediate" },
];

const backendSkills = [
  { icon: <FaNodeJs size={18} />, name: "Node.JS", level: "Expert" },
  { icon: <SiExpress size={18} />, name: "Express.JS", level: "Expert" },
  { icon: <SiMongodb size={18} />, name: "MongoDB", level: "Expert" },
  { icon: <SiFirebase size={18} />, name: "Firebase", level: "Intermediate" },
  { icon: <DiMysql size={18} />, name: "SQL", level: "Intermediate" },
  { icon: <FaDocker size={18} />, name: "Docker", level: "Intermediate" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
};

function SkillCard({ title, skills, custom }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={custom}
      style={{
        
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(100,255,218,0.1)",
        borderRadius: "16px",
        padding: "32px",
        backdropFilter: "blur(10px)",
      }}
    >
      <h3 style={{ color: "#64FFDA", fontSize: "16px", fontWeight: 700, marginBottom: "24px", textAlign: "center" }}>
        {title}
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {skills.map((skill) => (
          <div key={skill.name} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <span style={{ color: "#64FFDA", marginTop: "2px" }}>{skill.icon}</span>
            <div>
              <p style={{ color: "#CCD6F6", fontSize: "13px", fontWeight: 600 }}>{skill.name}</p>
              <p style={{ color: "rgba(204,214,246,0.45)", fontSize: "11px" }}>{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section style={{ backgroundColor: "#020C1B", padding: "2px 0 80px 0" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 32px" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <h2 style={{ color: "#CCD6F6", fontSize: "32px", fontWeight: 700 }}>Skills</h2>
          <p style={{ color: "rgba(204,214,246,0.45)", fontSize: "14px", marginTop: "8px" }}>
            My Technical Level
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
          <SkillCard title="Frontend Developer" skills={frontendSkills} custom={1} />
          <SkillCard title="Backend Developer" skills={backendSkills} custom={2} />
        </div>
      </div>
    </section>
  );
}