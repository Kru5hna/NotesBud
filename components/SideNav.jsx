import { useState } from "react";

export default function SideNav(props) {
        const { showNav, setShowNav, noteIds, setNoteIds, handleCreateNote, setIsViewer } = props


   return (
       <section className={"nav " + (showNav ? '' : ' hidden-nav ')}>
            <h1 className="text-gradient">NotesBud</h1>
            <h6>Easy Breezy Notes</h6>
            <div className="full-line"></div>
            <button onClick={handleCreateNote}>
                <h6>New note</h6>
                <i className="fa-solid fa-plus"></i>
            </button>
            <div className="notes-list">
                {noteIds.length == 0 ?
                    <p>You have 0 notes</p> :
                    noteIds.map((note, idx) => {
                        const [n, d] = note.split('__')
                        const date = (new Date(parseInt(d))).toString()

                        return (
                            <button onClick={() => {
                                router.push('/notes?id=' + note)
                                setIsViewer(true)
                            }} key={idx} className="card-button-secondary list-btn">
                                <p>{n}</p>
                                <small>{date.split(' ').slice(1, 4).join(' ')}</small>
                                <div onClick={(e) => {
                                    e.stopPropagation()
                                    deleteNote(note)
                                }} className="delete-btn">
                                    <i className="fa-solid fa-trash-can"></i>
                                </div>
                            </button>
                        )
                    })}
            </div>
            <div className="full-line"></div>
            <button >
                <h6>Logout</h6>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
        </section>
   )
}