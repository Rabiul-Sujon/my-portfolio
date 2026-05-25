"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  MdOutlineDesktopWindows, MdOutlineApi,
  MdOutlinePhoneAndroid,
} from "react-icons/md";
import { TbCode, TbStack2, TbVector } from "react-icons/tb";

const services = [
  {
    icon: <MdOutlineDesktopWindows size={36} />,
    title: "Frontend Development",
    description: "Crafting beautiful, responsive user interfaces with modern frameworks.",
    points: [
      { label: "UI Design", detail: "Pixel-perfect interfaces" },
      { label: "React & Next.js", detail: "Modern component architecture" },
      { label: "Tailwind CSS", detail: "Utility-first styling" },
      { label: "Animations", detail: "Smooth motion with Framer Motion" },
      { label: "Performance", detail: "Fast load times & optimization" },
    ],
  },
  {
    icon: <TbCode size={36} />,
    title: "Backend Development",
    description: "Building robust and scalable server-side solutions.",
    points: [
      { label: "Node.js & Express", detail: "REST API architecture" },
      { label: "Database Design", detail: "MongoDB & Firebase" },
      { label: "Authentication", detail: "Secure auth with BetterAuth" },
      { label: "API Integration", detail: "Third-party service connections" },
      { label: "Server Management", detail: "Deployment & monitoring" },
    ],
  },
  {
    icon: <TbStack2 size={36} />,
    title: "Full Stack Development",
    description: '"Creating end-to-end web solutions with frontend and backend expertise."',
    points: [
      { label: "Design & Planning", detail: "Blueprint for success" },
      { label: "Front-End Development", detail: "User-friendly interfaces" },
      { label: "Back-End Development", detail: "Server-side functionality" },
      { label: "Database Management", detail: "Efficient data storage" },
      { label: "Scaling & Deployment", detail: "Launch with confidence" },
    ],
  },
  {
    icon: <MdOutlinePhoneAndroid size={36} />,
    title: "Mobile Hybrid App Development",
    description: "Building cross-platform mobile apps that run on iOS and Android.",
    points: [
      { label: "React Native", detail: "Cross-platform development" },
      { label: "UI/UX Design", detail: "Mobile-first interfaces" },
      { label: "Push Notifications", detail: "Real-time engagement" },
      { label: "Offline Support", detail: "Works without internet" },
      { label: "App Store", detail: "Publishing & deployment" },
    ],
  },
  {
    icon: <TbVector size={36} />,
    title: "Prototype Development",
    description: "Rapidly turning ideas into working prototypes for validation.",
    points: [
      { label: "Wireframing", detail: "Sketch the idea fast" },
      { label: "MVP Build", detail: "Minimum viable product" },
      { label: "User Testing", detail: "Validate with real users" },
      { label: "Iteration", detail: "Fast feedback loop" },
      { label: "Handoff", detail: "Ready for production" },
    ],
  },
  {
    icon: <MdOutlineApi size={36} />,
    title: "API Development",
    description: "Designing and building clean, documented RESTful APIs.",
    points: [
      { label: "REST API Design", detail: "Clean endpoint structure" },
      { label: "Authentication", detail: "JWT & OAuth support" },
      { label: "Documentation", detail: "Swagger & Postman ready" },
      { label: "Rate Limiting", detail: "Secure & performant" },
      { label: "Testing", detail: "Unit & integration tests" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <section style={{ backgroundColor: "#020C1B", padding: "12px 0 80px 0", position: "relative" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 32px" }}>

        {/* Heading */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
          style={{ textAlign: "center", marginBottom: "4px" }}
        >
          <h2 style={{ color: "#CCD6F6", fontSize: "32px", fontWeight: 700 }}>Services</h2>
          <p style={{ color: "rgba(204,214,246,0.45)", fontSize: "14px", marginTop: "8px",}}>What I offer</p>
        </motion.div>

        {/* 3x2 Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1}
              onClick={() => setSelected(service)}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(100,255,218,0.1)",
                borderRadius: "16px",
                padding: "36px 24px 28px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                transition: "border 0.2s, background 0.2s",
              }}
              whileHover={{ background: "rgba(100,255,218,0.05)", borderColor: "rgba(100,255,218,0.3)" }}
            >
              <span style={{ color: "#64FFDA" }}>{service.icon}</span>
              <h3 style={{ color: "#CCD6F6", fontSize: "15px", fontWeight: 600 }}>{service.title}</h3>
              <button
                style={{
                  background: "none", border: "none", color: "#0EA5E9",
                  fontSize: "13px", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: "4px"
                }}
              >
                View More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 50,
              backgroundColor: "rgba(2,12,27,0.8)",
              backdropFilter: "blur(6px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "24px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "rgba(10,25,47,0.95)",
                border: "1px solid rgba(100,255,218,0.15)",
                borderRadius: "20px",
                padding: "40px",
                maxWidth: "480px",
                width: "100%",
                position: "relative",
              }}
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: "absolute", top: "16px", right: "16px",
                  background: "rgba(255,255,255,0.08)", border: "none",
                  color: "#CCD6F6", width: "28px", height: "28px",
                  borderRadius: "50%", cursor: "pointer", fontSize: "14px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                ✕
              </button>

              {/* Title */}
              <h3 style={{ color: "#CCD6F6", fontSize: "20px", fontWeight: 700, marginBottom: "12px", textAlign: "center" }}>
                {selected.title}
              </h3>

              {/* Description */}
              <p style={{ color: "rgba(204,214,246,0.55)", fontSize: "13px", textAlign: "center", fontStyle: "italic", marginBottom: "8px" }}>
                {selected.description}
              </p>

              {/* Teal dot */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#64FFDA", display: "inline-block" }} />
              </div>

              {/* Points */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {selected.points.map((point) => (
                  <li key={point.label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ color: "#64FFDA", fontSize: "16px" }}>◎</span>
                    <span>
                      <span style={{ color: "#CCD6F6", fontSize: "13px", fontWeight: 600 }}>{point.label}: </span>
                      <span style={{ color: "rgba(204,214,246,0.55)", fontSize: "13px" }}>{point.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}