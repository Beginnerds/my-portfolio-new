import "./App.css";
import Hero from "./components/hero/hero";
import Nav from "./components/nav/nav";

function App() {
  return (
    <>
      <div className="relative h-[200vh] bg-background font-sans">
        <Nav/>
        <div className="w-full mx-auto max-w-4xl px-8">
            <Hero/>
        </div>
      </div>
    </>
  );
}

export default App;
