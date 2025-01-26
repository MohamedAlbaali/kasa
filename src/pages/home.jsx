import imag from'../assets/home.png';
import '../styles/home.css';
import GetHebrgemnts from '../components/getHebrgemnts'

function Home(){
    
    return(
        <section>
            <div className='presant'>
                <img src={imag} alt="home" />
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <div className='hebergemants'>
                <GetHebrgemnts/>
                {/* <a href="#">
                    <article>
                        <img src={imag} alt="" />
                        <p>Titre de la location</p>
                    </article>
                </a>
                <a href="#">
                    <article>
                        <img src={imag} alt="" />
                        <p>Titre de la location</p>
                    </article>
                </a>
                <a href="#">
                    <article>
                        <img src={imag} alt="" />
                        <p>Titre de la location</p>
                    </article>
                </a>
                <a href="#">
                    <article>
                        <img src={imag} alt="" />
                        <p>Titre de la location</p>
                    </article>
                </a>
                <a href="#">
                    <article>
                        <img src={imag} alt="" />
                        <p>Titre de la location</p>
                    </article>
                </a>
                <a href="#">
                    <article>
                        <img src={imag} alt="" />
                        <p>Titre de la location</p>
                    </article>
                </a> */}
                
            </div>
        </section>
    )
}
export default Home