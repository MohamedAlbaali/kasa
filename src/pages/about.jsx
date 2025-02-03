import imag from '../assets/about.png'
import '../styles/about.css'
import ListAbout from '../components/listabout'
function About(){
    return(
        <main className='about'>
            <img src={imag} alt="about" />
            <div className='drowps'>
                <ListAbout/>
            </div>
        </main>
    )
}
export default About