import Logo from '../assets/logo.png'
import '../styles/header.css'
import { Link } from 'react-router-dom';
function MainHeader(){
    return(
        <div className='headerContainer'>
            <Link to={'/'}>
                <img className='logo' src={Logo} alt="Kasa logo" />
            </Link>
            <nav>
                <Link to={'/'}>Accueil</Link>
                <Link to={'about'}>A Propos</Link>
            </nav>
        </div>
    )
}
export default MainHeader;