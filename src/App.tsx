import css from './App.module.scss'
import Contact from './Site/Contact'
import Header from './Site/Header'
import Projects from './Site/Projects'
import Skills from './Site/Skills'

const App = (): JSX.Element => {
  return (
    <div className={css.App}>
      <h1>Jeren sivusto :)</h1>
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
