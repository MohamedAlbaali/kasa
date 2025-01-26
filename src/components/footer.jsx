import Logo from '../assets/logofot.png'
import '../styles/foot.css'
import { Link } from 'react-router-dom'
function Foot(){
    return(
        <footer>
            <Link to={'/'}>
                <img src={Logo} alt="Kasa logo" />
            </Link>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
export default Foot