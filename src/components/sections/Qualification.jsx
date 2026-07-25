"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { PiGraduationCap } from "react-icons/pi";
import { BsCalendar2 } from "react-icons/bs";

const educationData = [
  {
    title: "Secondary School Certificate",
    institution: "Cantonment High School - Institute",
    date: "1997 - 2002",
    side: "left",
  },
  {
    title: "Higher Secondary Certificate",
    institution: "BAF Shaheen College - Institute",
    date: "2003 - 2005",
    side: "right",
  },
  
  {
    title: "Diploma in Business Administration",
    institution: "Alexander college,Cyprus - Institute",
    date: "2008 - 2010",
    side: "left",
  },
  {
    title: "Bachekor of Arts",
    institution: "Bangladesh Open University - Institute",
    date: "2013 - 2016",
    side: "right",
  },
];

const experienceData = [
  {
    title: "Website Management Intern",
    institution: "Canyon Entertainment Group (Canada) - Remote",
    date: "2026 - Present",
    side: "left",
  },
  {
    title: "Freelance Developer",
    institution: "Self Employed",
    date: "2023 - Present",
    side: "left",
  },
  {
    title: "Web Developer",
    institution: "Personal Projects",
    date: "2022 - Present",
    side: "right",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
};

function TimelineItem({ item, i }) {
  const isLeft = item.side === "left";
  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 40px 1fr",
        alignItems: "center",
        marginBottom: "32px",
        gap: "0",
      }}
    >
      {/* Left side */}
      {isLeft ? (
        <div style={{ textAlign: "right", paddingRight: "24px" }}>
          <h4 style={{ color: "#CCD6F6", fontSize: "14px", fontWeight: 600 }}>{item.title}</h4>
          <p style={{ color: "rgba(204,214,246,0.45)", fontSize: "12px", marginTop: "4px" }}>{item.institution}</p>
          <p style={{ color: "rgba(204,214,246,0.35)", fontSize: "11px", marginTop: "6px", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "4px" }}>
            <BsCalendar2 size={10} /> {item.date}
          </p>
        </div>
      ) : <div />}

      {/* Center dot */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{
          width: "12px", height: "12px", borderRadius: "50%",
          backgroundColor: "#64FFDA",
          border: "2px solid #020C1B",
          boxShadow: "0 0 8px rgba(100,255,218,0.5)",
          zIndex: 1,
        }} />
      </div>

      {/* Right side */}
      {!isLeft ? (
        <div style={{ textAlign: "left", paddingLeft: "24px" }}>
          <h4 style={{ color: "#CCD6F6", fontSize: "14px", fontWeight: 600 }}>{item.title}</h4>
          <p style={{ color: "rgba(204,214,246,0.45)", fontSize: "12px", marginTop: "4px" }}>{item.institution}</p>
          <p style={{ color: "rgba(204,214,246,0.35)", fontSize: "11px", marginTop: "6px", display: "flex", alignItems: "center", gap: "4px" }}>
            <BsCalendar2 size={10} /> {item.date}
          </p>
        </div>
      ) : <div />}
    </motion.div>
  );
}

export default function Qualification() {
  const [activeTab, setActiveTab] = useState("education");
  const data = activeTab === "education" ? educationData : experienceData;

  return (
    <section style={{ backgroundColor: "#020C1B", padding: "40px 0 80px" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 32px" }}>

        {/* Heading */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
          style={{ textAlign: "center", marginBottom: "32px" }}
        >
          <h2 style={{ color: "#CCD6F6", fontSize: "32px", fontWeight: 700 }}>Qualification</h2>
          <p style={{ color: "rgba(204,214,246,0.45)", fontSize: "14px", marginTop: "8px" }}>My personal journey</p>
        </motion.div>

        {/* Tabs */}
        <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginBottom: "40px" }}>
          {[
            { key: "experience", label: "Experience", icon: <BsPersonWorkspace size={16} /> },
            { key: "education", label: "Education", icon: <PiGraduationCap size={16} /> },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", gap: "8px",
                color: activeTab === tab.key ? "#64FFDA" : "rgba(204,214,246,0.45)",
                fontSize: "15px", fontWeight: activeTab === tab.key ? 600 : 400,
                borderBottom: activeTab === tab.key ? "2px solid #64FFDA" : "2px solid transparent",
                paddingBottom: "6px",
                transition: "all 0.2s",
              }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: 0, bottom: 0,
            width: "2px",
            backgroundColor: "rgba(100,255,218,0.15)",
          }} />

          {data.map((item, i) => (
            <TimelineItem key={item.title} item={item} i={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}