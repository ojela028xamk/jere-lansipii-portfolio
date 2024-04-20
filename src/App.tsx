import css from './App.module.scss'
import Contact from './Website/Contact'
import Header from './Website/Header'
import Projects from './Website/Projects'
import Skills from './Website/Skills'

const App = (): JSX.Element => {
  return (
    <div className={css.App}>
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
