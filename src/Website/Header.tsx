import { Image } from 'react-bootstrap'
import css from './Header.module.scss'

const Header = (): JSX.Element => {
  return (
    <div className={css.header}>
      <div className={css.header_content}>
        <div className={css.header_text}>
          <h1>Software Developer & Graphic Designer</h1>
          <h2>Jere Länsipii</h2>
          <p>
            Hello, I am a Bachelor of Business Administration specializing in
            information technology and I live in Helsinki. I have expertise in
            both frontend and some backend development through my education and
            work experience. I have over 1.5 years of work experience in
            software development.
          </p>
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
