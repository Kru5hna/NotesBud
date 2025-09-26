import "./globals.css";
import "./fanta.css"


export const metadata = {
  title: "NotesBud | Easy Breazy Notetaking ",
  description: "A creative space to capture, organize, and bring your notes to life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

       <div id="app">{children}</div>
       <div id="portal"></div>
      </body>
    </html>
  );
}
