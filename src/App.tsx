import css from './App.module.scss'
import Header from './Header/Header'

const App = (): JSX.Element => {
  return (
    <div className={css.app}>
      <Header />
    </div>
  )
}

export default App
