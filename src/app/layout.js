import "./globals.css";

export const metadata = {
  title: "Rabiul Sujon | Web Developer",
  description: "Personal portfolio of Rabiul Sujon",
   icons: {
    icon: "/favicon.png.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}