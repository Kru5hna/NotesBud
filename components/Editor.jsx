import TopNav from "./TopNav";

export default function Editor(props) {
   const {text, setText} = props;
   
   return (
      <section className="notes-container">
            <TopNav {...props} /> 
            <textarea value={text} onChange={setText} placeholder="Start Your day with a sip of coffee and write your goals for today 😉" />
        </section>

   )
}

