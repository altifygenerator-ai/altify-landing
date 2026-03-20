import "./globals.css";

export const metadata = {
  title: "Altify",
  description: "Get More Customers From Google"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
