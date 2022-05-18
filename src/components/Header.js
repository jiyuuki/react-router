import './Header.css'
import { Link as RouterLink } from 'react-router-dom'
const Header = ({ logo }) => {
  return (
    <>
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Mon Portfolio</h1>
        <nav>
          <RouterLink to="/" className='App-link'>
            A propos de moi
          </RouterLink>
          <RouterLink to="/projects" className='App-link'>
            Mes projets
          </RouterLink>
        </nav>
      </header>
    </>
  )
}

export default Header
