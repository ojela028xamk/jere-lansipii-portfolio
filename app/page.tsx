import Contact from "./website/contact";
import Header from "./website/header";
import Projects from "./website/projects";
import Skills from "./website/skills";
import Experience from "./website/experience";

export default function Home() {
  return (
    <main>
      <Header />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
