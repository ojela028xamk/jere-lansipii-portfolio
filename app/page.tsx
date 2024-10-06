import Contact from "./website/contact";
import Header from "./website/header";
import Projects from "./website/projects";
import Skills from "./website/skills";
import css from "./page.module.scss";

export default function Home() {
  return (
    <main className={css.main}>
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
