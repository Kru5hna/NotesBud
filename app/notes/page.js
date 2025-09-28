'use client'
import Editor from "@/components/Editor";
import SideNav from "@/components/SideNav";
import Viewer from "@/components/Viewer";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function NotesPage() {
   const [isViewer, setIsViewer] = useState(true)
    // const [text, setText] = useState('')
    const [showNav, setShowNav] = useState(false)
    const [note, setNote] = useState({
        content: ''
    })

   const [isLoading, setIsLoading] = useState(false)
    const [noteIds, setNoteIds] = useState([])
    const [savingNote, setSavingNote] = useState(false);

    const {currentUser, isLoadingUser} = useAuth();
    
    if(isLoadingUser) {
        return(
            <h6 className="text-gradient">Loading...</h6>
        )
    } else {
        window.location.href= '/'
    }

    function handleToggleViewer() {
        // isViewer = !isViewer
        setIsViewer(!isViewer)
    }

    function handleToggleMenu() {
        setShowNav(!showNav)
    }

    function handleCreateNote() {
        // create a new note
        setNote({
            content: ''
        })
        setIsViewer(false)
        window.history.replaceState(null, '', '/notes')
    }

    function handleEditNote(e) {
        // edit an existing note
        setNote({ ...note, content: e.target.value })
    }
  return (
    <main className="notes">
     <SideNav setIsViewer={setIsViewer}  noteIds={noteIds} setNoteIds={setNoteIds} showNav={showNav} setShowNav={setShowNav} />
            {!isViewer && (
                <Editor savingNote={savingNote} handleToggleMenu={handleToggleMenu} setText={handleEditNote} text={note.content} hello="world" isViewer={isViewer} handleToggleViewer={handleToggleViewer} />
            )}
            {isViewer && (
                <Viewer savingNote={savingNote}  handleToggleMenu={handleToggleMenu} text={note.content} isViewer={isViewer} handleToggleViewer={handleToggleViewer} />
            )}
    </main>
  );
}
