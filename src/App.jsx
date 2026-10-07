import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollManager from "./components/ScrollManager";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProjectsPage from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <About />
              <Skills />
              <Education />
              <Experience />
              <Projects />
              <Contact />
              <Footer />
            </main>
          }
        />

        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;