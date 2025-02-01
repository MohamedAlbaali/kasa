import imag from '../assets/about.png'
import '../styles/about.css'
import { useState } from 'react';
const aboutList = [
    {
    title: 'Fiabilité',
    content:
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
    title: 'Respect',
    content:
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
    title: 'Service',
    content:
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
    title: 'Sécurité',
    content:
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
];

function About(){
    const [openMenus, setOpenMenus] = useState([
        {id: 0, name: false},
        {id: 1, name: false},
        {id: 2, name: false},
        {id: 3, name: false},
    ]); 
    const toggleMenu = (id) => {
        const newo = openMenus.map((item) =>
            item.id === id ? { ...item, name: !item.name } : { ...item, name: false }
        );
        console.log(newo)
        setOpenMenus(newo) 
    };
    function ListAbout(){
        return (
            aboutList.map((item, index)=>(
                <section key={index}>
                    <div className='drowp-about'>
                        <p>{item.title}</p>
                        <button onClick={()=> toggleMenu(index)} className='drop'><i className={openMenus[index].name === false?"fa-solid fa-chevron-up": "fa-solid fa-chevron-up down"}></i></button>
                    </div>
                    <div className={openMenus[index].name === true?'info-div show':'info-div'}>
                        <p className='text-about'>{item.content}</p>
                    </div>
                </section>
            ))
        )
    }
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