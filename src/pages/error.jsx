import { Link } from "react-router-dom"
import '../styles/error.css'
import errorPhoto from "../assets/404.png"
function ErrorPage(){
    return(
        <main className="error-container">
            <img src={errorPhoto} alt="" />
            <p>Oups! La page que vous demandez nexiste pas.</p>
            <Link to={'/'}>
                Retourner sur la page d’accueil
            </Link>
        </main>
    )
}
export default ErrorPage