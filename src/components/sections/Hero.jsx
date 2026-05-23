"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { createSparkle } from "@/utils/sparkle";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const roles = ["Web Developer", "Frontend Developer", "Backend Developer", "Problem Solver"];

const dotPositions = [
  { top: "10%", left: "10%" },
  { top: "10%", left: "90%" },
  { top: "50%", left: "5%" },
  { top: "50%", left: "95%" },
  { top: "80%", left: "15%" },
  { top: "80%", left: "85%" },
  { top: "25%", left: "50%" },
  { top: "75%", left: "50%" },
];

function FloatingDot({ delay }) {
  const [posIndex, setPosIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cycle = () => {
      setVisible(false);
      setTimeout(() => {
        setPosIndex(Math.floor(Math.random() * dotPositions.length));
        setVisible(true);
        setTimeout(() => setVisible(false), 6000);
      }, 2000);
    };
    const timeout = setTimeout(() => {
      setPosIndex(Math.floor(Math.random() * dotPositions.length));
      setVisible(true);
      setTimeout(() => setVisible(false), 6000);
    }, delay * 1000);
    const interval = setInterval(cycle, 10000);
    return () => { clearTimeout(timeout); clearInterval(interval); };
  }, [delay]);

  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
      transition={{ duration: 3, ease: "easeInOut" }}
      className="fixed w-2 h-2 bg-yellow-400 rounded-full pointer-events-none z-10"
      style={{
        top: dotPositions[posIndex].top,
        left: dotPositions[posIndex].left,
        boxShadow: "0 0 10px #F0D93B, 0 0 20px rgba(240,217,59,0.4)",
      }}
    />
  );
}

function MovingLine() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const createLine = () => {
      const direction = ["left-right", "right-left", "top-bottom", "bottom-top"][
        Math.floor(Math.random() * 4)
      ];
      const id = Math.random();
      let style = {};
      let anim = {};

      if (direction === "left-right") {
        style = { top: `${Math.random() * 100}%`, left: "-150px", width: "120px", height: "0.3px" };
        anim = { x: ["0px", "110vw"] };
      } else if (direction === "right-left") {
        style = { top: `${Math.random() * 100}%`, right: "-150px", width: "120px", height: "0.3px" };
        anim = { x: ["0px", "-110vw"] };
      } else if (direction === "top-bottom") {
        style = { left: `${Math.random() * 100}%`, top: "-150px", width: "0.3px", height: "120px" };
        anim = { y: ["0px", "110vh"] };
      } else {
        style = { left: `${Math.random() * 100}%`, bottom: "-150px", width: "0.3px", height: "120px" };
        anim = { y: ["0px", "-110vh"] };
      }

      setLines((prev) => [...prev, { id, style, anim, direction }]);
      setTimeout(() => {
        setLines((prev) => prev.filter((l) => l.id !== id));
      }, 12000);
    };

    const interval = setInterval(createLine, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {lines.map((line) => (
        <motion.div
          key={line.id}
          initial={{ opacity: 0 }}
          animate={{ ...line.anim, opacity: [0, 1, 1, 0] }}
          transition={{ duration: 12, ease: "linear" }}
          className="fixed pointer-events-none z-10"
          style={{
            ...line.style,
            background: line.direction.includes("left") || line.direction.includes("right")
              ? "linear-gradient(to right, transparent, #F0D93B, transparent)"
              : "linear-gradient(to bottom, transparent, #F0D93B, transparent)",
          }}
        />
      ))}
    </>
  );
}

function TypewriterText({ roles }) {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 500);
    } else if (isDeleting) {
      timeout = setTimeout(() => setDisplayed((prev) => prev.slice(0, -1)), 100);
    } else {
      timeout = setTimeout(() => setDisplayed((prev) => current.slice(0, prev.length + 1)), 250);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex, roles]);

  return <span className="text-yellow-400 font-semibold">{displayed}</span>;
}

export default function Hero() {
  return (
   <section id="home" className="min-h-screen relative overflow-hidden bg-[#0D1117]" style={{ paddingTop: "40px" }}>

      {/* Blue background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-800/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating dots */}
      {[0, 1].map((i) => <FloatingDot key={i} delay={i * 4} />)}

      {/* Moving lines */}
      <MovingLine />

      {/* Main layout — full height centered */}
      <div className="flex items-center min-h-screen pt-20">

        {/* Social icons — fixed far left, vertically centered */}
<div className="flex flex-col gap-5 shrink-0" style={{ paddingLeft: "40px" }}>          {[
            { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/maven-rabiul/" },
            { icon: <FaGithub />, href: "https://github.com/Rabiul-Sujon/" },
            { icon: <FaXTwitter />, href: "https://x.com/MavenRabi98070" },
          ].map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="w-10 h-10 rounded-full border border-yellow-400/30 bg-yellow-400/5 backdrop-blur-sm flex items-center justify-center text-white text-base transition-all duration-300 hover:border-yellow-400/60 hover:text-yellow-400"
              style={{ boxShadow: "0 0 8px rgba(240,217,59,0.15)" }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        {/* Left content — with enough left margin to avoid social icons */}
        <div className="flex-1 flex flex-col gap-8 pr-10 pt-24" style={{ paddingLeft: "60px" }}>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/60 text-xl"
          >
            Hey, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl font-bold text-white flex items-center gap-4 leading-tight"
          >
            Rabiul Sujon
            <motion.span
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              className="inline-block"
            >
              👋
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-white/70 flex items-center gap-2"
          >
            <span>I am a </span>
            <TypewriterText roles={roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white/40 max-w-md leading-relaxed text-base"
          >
            🚀 Turning ideas into Stunning Websites 💻<br />
            Available for projects and collaborations ✨
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(240,217,59,0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => createSparkle(e)}
            className="inline-flex items-center gap-2 px-14 py-5 rounded-full border border-yellow-400/40 bg-yellow-400/5 backdrop-blur-md text-yellow-400 text-lg cursor-pointer transition-all duration-300 hover:bg-yellow-400/10 w-fit"
            style={{ textDecoration: "none", padding: "8px 30px", fontSize: "18px" }}
          >
            Say Hello ✈️
          </motion.a>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex items-center gap-2 text-white/30 text-sm"
          >
            <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1">
              <div className="w-1 h-2 bg-white/40 rounded-full" />
            </div>
            Scroll Down
          </motion.div>
        </div>

        {/* Right — Photo + orbit + stats */}
        <div className="flex-1 flex justify-center items-center relative" style={{ height: "600px", marginLeft: "-180px" }}>

          {/* Orbit rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute w-72 h-72 rounded-full border border-dashed border-yellow-400/60"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute w-80 h-80 rounded-full border border-dashed border-orange-400/10"
          />

          {/* Profile photo */}
          <div
          className="w-64 h-64 rounded-full z-10 relative overflow-hidden"
           style={{
           border: "2px solid rgba(240,217,59,0.2)",
           boxShadow: "0 0 40px rgba(59,130,246,0.15)",
          }}
            >
             <Image
             src="/profile.jpg"
             alt="Rabiul Sujon"
             fill
             className="object-cover"
            />
          </div>

          {/* Stat — Problems — top right close to image */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute"
            style={{ top: "calc(50% - 140px)", left: "calc(50% + 60px)" }}
          >
            <div className="rounded-xl border border-yellow-400/20 bg-[#0D1117]/80 backdrop-blur-sm text-white whitespace-nowrap" style={{ padding: "12px 24px", fontSize: "15px" }}>
              🎯 <strong className="text-yellow-400">50+</strong> Problem Solving
            </div>
          </motion.div>

          {/* Stat — Experience — left middle close to image */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute"
            style={{ top: "calc(50% + 20px)", left: "calc(50% - 320px)" }}
          >
            <div className="rounded-xl border border-yellow-400/20 bg-[#0D1117]/80 backdrop-blur-sm text-white whitespace-nowrap" style={{ padding: "12px 24px", fontSize: "15px" }}>
              💼 <strong className="text-orange-400">1</strong> Year Experience
            </div>
          </motion.div>

          {/* Stat — Projects — bottom right close to image */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute"
            style={{ top: "calc(50% + 110px)", left: "calc(50% + 80px)" }}
          >
            <div className="rounded-xl border border-yellow-400/20 bg-[#0D1117]/80 backdrop-blur-sm text-white whitespace-nowrap" style={{ padding: "12px 24px", fontSize: "15px" }}>
              ✅ <strong className="text-yellow-400">10+</strong> Finished Projects
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}