import Contact from "./website/contact";
import Header from "./website/header";
import Projects from "./website/projects";
import Skills from "./website/skills";
import css from "./page.module.scss";
import Experience from "./website/experience";
import LanguageSwitch from "./website/languageSwitch";

export default function Home() {
  return (
    <main className={css.main}>
      <LanguageSwitch />
      <Header />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
