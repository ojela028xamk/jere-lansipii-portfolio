import { Image } from 'react-bootstrap'
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
        <div className={css.header_image}>
          <Image
            src="/images/jere.jpg"
            alt="Jere Länsipii"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
