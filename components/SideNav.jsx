export default function SideNav() {

   return (
      <section className={"nav "}>
            <h1 className="text-gradient">MDNOTES</h1>
            <h6>Easy Breezy Notes</h6>
            <div className="full-line"></div>
            <button >
                <h6>New note</h6>
                <i className="fa-solid fa-plus"></i>
            </button>
            <div className="notes-list">
                
                           
                        
                  
            </div>
            <div className="full-line"></div>
            <button>
                <h6>Logout</h6>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>

      </section>
   )
}