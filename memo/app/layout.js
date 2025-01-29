import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <body>
        {children}
      </body>
    </html>
  );
}
