import aboutList from './about'
import { useState } from 'react';

function ListAbout(){
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
        setOpenMenus(newo) 
    };
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
export default ListAbout