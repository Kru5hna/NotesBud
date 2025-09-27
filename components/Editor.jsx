import TopNav from "./TopNav";

export default function Editor(props) {
   
   return (
      <section className="notes-container">
            <TopNav {...props} />
            <textarea placeholder="Start Your day with a sip of coffee and write your goals for today 😉" />
        </section>

   )
}

