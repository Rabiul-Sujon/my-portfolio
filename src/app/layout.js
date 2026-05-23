import "./globals.css";

export const metadata = {
  title: "Rabiul Sujon | Web Developer",
  description: "Personal portfolio of Rabiul Sujon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}