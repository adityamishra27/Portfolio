import About from "./components/About";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#474646] bg-[radial-gradient(#FDFDFD33_1px,#73737533_1px)] bg-[size:20px_20px]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>



  );
}

export default App;