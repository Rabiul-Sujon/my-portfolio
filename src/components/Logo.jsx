import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="#home" className="flex items-center gap-3 no-underline group">
      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-teal-400/30 group-hover:border-teal-400 transition-all duration-300 shadow-[0_0_12px_rgba(100,255,218,0.2)]">
        <Image
          src="/portfolio-logo.png"
          alt="Rabiul Sujon Logo"
          fill
          sizes="40px"
          className="object-cover"
        />
      </div>
      <span className="text-lg font-bold text-[#CCD6F6] group-hover:text-teal-400 transition-colors duration-300">
        Rabiul<span className="text-teal-400">.</span>
      </span>
    </Link>
  );
}