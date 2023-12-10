import css from './Header.module.scss'
import HeaderNavbar from './HeaderNavbar'

const Header = (): JSX.Element => {
  return (
    <div className={css.header}>
      <HeaderNavbar />
    </div>
  )
}

export default Header
