import "./global.css";
import './fanta.css'

// import Head from "./head";
// import AuthProvider from "@/context/AuthContext";


export const metadata = {
  title: "NotesBud | Easy Breezy Notetaking",
  description: "A creative space to capture, organize, and bring your notes to life.",
  icons: {
    icon: "/logo.jpg", // path from public folder
  },
};

export default function RootLayout({ children }) {


  return (
    <html lang="en" >
      {/* <Head /> */}
      {/* <AuthProvider> */}
        <body >
          <div id="app">{children}</div>
          <div id="portal"></div>

        </body>
      {/* </AuthProvider> */}
    </html>
  );
}

// K:\COHORT\Projects\notesbud\public\fonts\e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2