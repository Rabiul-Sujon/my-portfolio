"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home", icon: "🏠" },
  { name: "Tech Stack", href: "#technologies", icon: "💻" },
  { name: "Qualification", href: "#qualification", icon: "📋" },
  { name: "Projects", href: "#projects", icon: "📁" },
  { name: "Contact Me", href: "#contact", icon: "📩" },
];

const moreLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => setMoreOpen(false);
    if (moreOpen) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [moreOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-[#020C1B]/90 backdrop-blur-md border-b-2 border-teal-400/10"
            : "bg-[#020C1B]/60 backdrop-blur-md border-b-2 border-[#CCD6F6]/5"
        }`}
        style={{ height: "72px", margin: "0 30px" }}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-[#CCD6F6] tracking-widest cursor-pointer z-50"
        >
          RS<span className="text-teal-400">.</span>
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className="relative flex items-center gap-1 px-5 py-2.5 rounded-full text-sm font-medium text-[#CCD6F6] transition-all duration-300"
            >
              {active === link.name && (
                <motion.span
                  layoutId="pill"
                  className="absolute -inset-2 rounded-full bg-teal-400/10 backdrop-blur-sm border border-teal-400/40"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{link.icon}</span>
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}

          {/* More dropdown */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[#CCD6F6] cursor-pointer bg-transparent border-none outline-none"
            >
              <span>⚙️</span>
              <span>More</span>
              <motion.span
                animate={{ rotate: moreOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-[10px] ml-1"
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-[110%] left-1/2 -translate-x-1/2 bg-[#020C1B]/95 backdrop-blur-md border border-sky-400/20 rounded-xl p-2 min-w-37.5 z-50"
                >
                  {moreLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        setActive(link.name);
                        setMoreOpen(false);
                      }}
                      className="block px-4 py-2.5 rounded-lg text-sm text-[#CCD6F6]/60 hover:text-sky-400 hover:bg-sky-400/5 transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right — settings + hamburger */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 30 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex w-10 h-10 rounded-full border border-teal-400/30 bg-teal-400/5 backdrop-blur-md items-center justify-center text-lg"
          >
            ⚙️
          </motion.button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#CCD6F6] text-2xl z-50"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-72 bg-[#020C1B]/98 backdrop-blur-md border-l border-teal-400/10 z-40 flex flex-col pt-24 px-6 gap-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActive(link.name);
                  setMobileOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-300 ${
                  active === link.name
                    ? "bg-teal-400/10 border border-teal-400/30 text-teal-400"
                    : "text-[#CCD6F6]/70 hover:text-[#CCD6F6] hover:bg-[#CCD6F6]/5"
                }`}
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}
            <div className="border-t border-[#CCD6F6]/10 mt-2 pt-2">
              {moreLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActive(link.name);
                    setMobileOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-[#CCD6F6]/70 hover:text-sky-400 hover:bg-sky-400/5 transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated floating dot below navbar (Commented out block updated just in case) */}
      {/* <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="fixed left-1/2 -translate-x-1/2 w-2 h-2 bg-teal-400 rounded-full z-40"
        style={{ 
          top: "80px",
          boxShadow: "0 0 10px #64FFDA, 0 0 20px rgba(100,255,218,0.4)" 
        }}
      /> */}
    </>
  );
}