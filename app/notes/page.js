'use client'
import Editor from "@/components/Editor";
import SideNav from "@/components/SideNav";
import Viewer from "@/components/Viewer";
import { useState } from "react";

export default function NotesPage() {
   const [isViewer, setIsViewer] = useState(true);

   const [showNav, setShowNav] = useState(true);

   function handleShowNav() {
    // console.log('here');
    
   setShowNav(!showNav); 
  }

   function handleToggleViewer() {
    setIsViewer(!isViewer);
   }
  return (
    <main className="notes">
      <SideNav handleShowNav={handleShowNav} showNav={showNav} setShowNav={setShowNav} />
     {!isViewer && ( <Editor isViewer={isViewer} handleToggleViewer={handleToggleViewer} handleShowNav={handleShowNav} />) }
      {isViewer && ( <Viewer isViewer={isViewer} handleToggleViewer={handleToggleViewer} handleShowNav={handleShowNav}  />)}
    </main>
  );
}
