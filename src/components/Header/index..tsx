import { HeaderContainer } from './styles'
import Logomenu from '../../assets/logo-menu.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <img src={Logomenu} alt="" />
        <nav>
          <NavLink to="/" title="Timer">
            <Timer size={24} />
          </NavLink>
          <NavLink to="/history" title="Historia">
            <Scroll size={24} />
          </NavLink>
        </nav>
      </HeaderContainer>
    </>
  )
}
