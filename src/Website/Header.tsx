import css from './Header.module.scss'
import { aboutMe } from './content'

const Header = (): JSX.Element => {
  return (
    <div className={css.header}>
      <div className={css.header_content}>
        <div className={css.header_text}>
          <h2>Software Developer & Graphic Designer</h2>
          <h1>Jere Länsipii</h1>
          <p>{aboutMe}</p>
        </div>
      </div>
    </div>
  )
}

export default Header
