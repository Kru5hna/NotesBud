import TopNav from "./TopNav";

export default function Viewer(props) {

   return (
      <section className="notes-container">
        <TopNav {...props} />
      </section>

   )
}