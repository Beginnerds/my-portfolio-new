import "./App.css";
import Hero from "./components/hero/hero";
import Nav from "./components/nav/nav";
import Skills from "./components/skills/skills";

function App() {
  return (
    <>
      <div className="relative font-sans ">
        <Nav />
        <main className="main-container overflow-hidden">
          <div className="stars"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="w-full mx-auto max-w-5xl px-8 z-20">
            <Hero />
            <Skills />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
