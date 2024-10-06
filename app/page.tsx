import styles from "./page.module.css";
import Contact from "./website/contact";
import Header from "./website/header";
import Projects from "./website/projects";
import Skills from "./website/skills";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
