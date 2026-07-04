import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/portfolio-logo.png"
      alt="Rabiul Sujon Logo"
      width={150}
      height={40}
      priority
        style={{ marginTop: "8px" }}
    />
  );
}