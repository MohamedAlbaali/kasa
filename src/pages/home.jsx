import imag from'../assets/home.png';
import '../styles/home.css';
import GetHebrgemnts from '../components/getHebrgemnts'

function Home(){
    return(
        <main>
            <section className='presant'>
                <img src={imag} alt="home" />
                <p>Chez vous, partout et ailleurs</p>
            </section>
            <section className='hebergemants'>
                <GetHebrgemnts/>
            </section>
        </main>
    )
}
export default Home