"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: <FaGithub size={20} />, href: "https://github.com/Rabiul-Sujon/", label: "GitHub" },
  { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/maven-rabiul/", label: "LinkedIn" },
  { icon: <FaTwitter size={20} />, href: "https://x.com/MavenRabi98070", label: "Twitter" },
  { icon: <MdEmail size={20} />, href: "mailto:alamrabiul889@gmail.com", label: "Email" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0D1117",
        borderTop: "1px solid rgba(240,217,59,0.1)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="pt-16 pb-8"
    >
      <div style={{ width: "100%", maxWidth: "1024px", padding: "0 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
            marginTop:'20px',
            marginBottom: "28px",
          }}
        >
          {/* Col 1 — Brand */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 style={{ color: "#F0D93B", fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>
              Rabiul Sujon
            </h2>
            <p style={{ color: "rgba(248,248,248,0.55)", fontSize: "13px", lineHeight: 1.7 }}>
              Full Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
          </motion.div>

          {/* Col 2 — Quick Links */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <h3 style={{ color: "#F8F8F8", fontSize: "14px", fontWeight: 600, marginBottom: "16px" }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{ color: "rgba(248,248,248,0.55)", fontSize: "13px", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F0D93B")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(248,248,248,0.55)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Connect */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
            <h3 style={{ color: "#F8F8F8", fontSize: "14px", fontWeight: 600, marginBottom: "16px" }}>
              Connect With Me
            </h3>
            <div style={{ display: "flex", gap: "18px" }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{ color: "rgba(248,248,248,0.55)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F0D93B")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(248,248,248,0.55)")}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(240,217,59,0.1)", paddingTop: "20px", paddingBottom:'20px' }}>
          <p style={{ textAlign: "center", color: "rgba(248,248,248,0.35)", fontSize: "13px" }}>
            © 2026 Rabiul Sujon. All rights reserved. Built with{" "}
            <span style={{ color: "#F0D93B" }}>Next.js</span> &{" "}
            <span style={{ color: "#F0D93B" }}>Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}