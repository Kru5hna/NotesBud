import "./global.css";
import './fanta.css'
import localFont from 'next/font/local';

// import Head from "./head";
// import AuthProvider from "@/context/AuthContext";


export const metadata = {
  title: "NotesBud | Easy Breezy Notetaking",
  description: "A creative space to capture, organize, and bring your notes to life.",
  icons: {
    icon: "/logo.jpg", // path from public folder
  },
};

const primaryFont = localFont({
  // Use the ABSOLUTE path from the project root (most reliable fix)
  src: '../public/fonts/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2', 
  variable: '--font-primary-custom', // <--- IMPORTANT: This is the name you use in CSS
  display: 'swap',
});


export default function RootLayout({ children }) {


  return (
    <html lang="en" className={primaryFont.variable} >
      {/* <Head /> */}
      {/* <AuthProvider> */}
      {/* <head>
        
<link href="https://fonts.googleapis.com/css2?family=Grenze:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet"></link>
      </head> */}
        <body >
          <div id="app">{children}</div>
          <div id="portal"></div>

        </body>
      {/* </AuthProvider> */}
    </html>
  );
}

// K:\COHORT\Projects\notesbud\public\fonts\e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2