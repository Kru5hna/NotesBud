export default function SideNav() {

   const notes = ['hello','world'];
   const showNav = true

   return (
      <section className={"nav " + (showNav ? '' : ' hidden-nav ')}>
            <h1 className="text-gradient">NotesBud</h1>
            <h6>Easy Breezy Notes</h6>
            <div className="full-line"></div>
            <button>
                <h6>New note</h6>
                <i className="fa-solid fa-plus"></i>
            </button>
            <div className="notes-list">
                {notes.length == 0 ?
                    <p>You have 0 notes</p> :
                    notes.map((note, idx) => {
                      return (
                            <button key={idx} className="card-button-secondary list-btn">
                                <p>{note}</p>
                                <small>Date & Time</small>
                                <div className="delete-btn">
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