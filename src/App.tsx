import "./App.css";
import About from "./components/about/about";
import Hero from "./components/hero/hero";
import Nav from "./components/nav/nav";
import Skills from "./components/skills/skills";

function App() {
  return (
    <>
      <div className="relative font-sans ">
        <Nav />
        <main className="main-container overflow-hidden pb-20">
          <div className="stars"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="w-full mx-auto max-w-5xl px-8 z-20">
            <Hero />
            <Skills />
            <About/>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
