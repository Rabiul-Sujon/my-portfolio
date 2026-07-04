"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin,FaPaperPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const contactCards = [
  {
    icon: <MdEmail size={28} />,
    label: "EMAIL",
    handle: "alamrabiul889@gmail.com",
    link: "mailto:alamrabiul889@gmail.com",
    color: "#64FFDA",
  },
  {
    icon: <FaLinkedin size={28} />,
    label: "LINKEDIN",
    handle: "maven-rabiul",
    link: "https://www.linkedin.com/in/maven-rabiul/",
    color: "#0EA5E9",
  },
  {
    icon: <FaXTwitter size={28} />,
    label: "TWITTER",
    handle: "@MavenRabi98070",
    link: "https://x.com/MavenRabi98070",
    color: "#0EA5E9",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.success) {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", project: "" });
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Something went wrong. Please try again.");
  }
};

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(100,255,218,0.15)",
    borderRadius: "8px",
    padding: "12px 16px",
    color: "#CCD6F6",
    fontSize: "13px",
    outline: "none",
    marginTop: "6px",
  };

  return (
    <section style={{ backgroundColor: "#020C1B", padding: "40px 0 80px" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 32px" }}>

        {/* Heading */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <h2 style={{ color: "#CCD6F6", fontSize: "32px", fontWeight: 700 }}>Get in Touch</h2>
          <p style={{ color: "rgba(204,214,246,0.45)", fontSize: "14px", marginTop: "8px" }}>Contact Me</p>
        </motion.div>

        {/* 2 col layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "40px", alignItems: "start" }}>

          {/* Left — Social Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ color: "rgba(204,214,246,0.45)", fontSize: "13px", marginBottom: "4px" }}>Talk to me</p>
            {contactCards.map((card, i) => (
              <motion.div
                key={card.label}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(100,255,218,0.1)",
                  borderRadius: "14px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  textAlign: "center",
                }}
              >
                <div style={{
                  width: "52px", height: "52px", borderRadius: "12px",
                  background: "rgba(100,255,218,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: card.color,
                }}>
                  {card.icon}
                </div>
                <p style={{ color: "#CCD6F6", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em" }}>{card.label}</p>
                <p style={{ color: "rgba(204,214,246,0.45)", fontSize: "12px" }}>{card.handle}</p>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0EA5E9", fontSize: "12px", textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#64FFDA")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#0EA5E9")}
                >
                  Write me →
                </a>
              </motion.div>
            ))}
          </div>

          {/* Right — Form */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}
          >
            <p style={{ color: "rgba(204,214,246,0.45)", fontSize: "13px", marginBottom: "20px" }}>Write me your project</p>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

              <div>
                <label style={{ color: "rgba(204,214,246,0.6)", fontSize: "13px" }}>Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Insert your Name"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.border = "1px solid rgba(100,255,218,0.5)")}
                  onBlur={(e) => (e.target.style.border = "1px solid rgba(100,255,218,0.15)")}
                />
              </div>

              <div>
                <label style={{ color: "rgba(204,214,246,0.6)", fontSize: "13px" }}>Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Insert your email"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.border = "1px solid rgba(100,255,218,0.5)")}
                  onBlur={(e) => (e.target.style.border = "1px solid rgba(100,255,218,0.15)")}
                />
              </div>

              <div>
                <label style={{ color: "rgba(204,214,246,0.6)", fontSize: "13px" }}>Project</label>
                <textarea
                  name="project"
                  value={form.project}
                  onChange={handleChange}
                  placeholder="Write your project"
                  rows={5}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => (e.target.style.border = "1px solid rgba(100,255,218,0.5)")}
                  onBlur={(e) => (e.target.style.border = "1px solid rgba(100,255,218,0.15)")}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  alignSelf: "flex-end",
                  background: "rgba(100,255,218,0.08)",
                  border: "1px solid rgba(100,255,218,0.3)",
                  borderRadius: "50px",
                  padding: "12px 28px",
                  color: "#64FFDA",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Send Message <FaPaperPlane size={14} />
              </motion.button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}