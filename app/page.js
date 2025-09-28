import Login from "@/components/Login";


export default function Home() {
  return (
    <main id="hero">
      <div className="hero-img">
      <img src="hero-img.jpeg" alt="hero-img" />
      </div>
      <div className="hero-login">
        <Login />
      </div>
    </main>
  );
}
