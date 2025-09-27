import Editor from "@/components/Editor";
import SideNav from "@/components/SideNav";
import Viewer from "@/components/Viewer";

export default function NotesPage() {
   const isViewer = false 
  return (
    <main className="notes">
      {/* <SideNav /> */}
     {!isViewer && ( <Editor isViewer={isViewer} />) }
      {isViewer && (<Viewer />)}
    </main>
  );
}
