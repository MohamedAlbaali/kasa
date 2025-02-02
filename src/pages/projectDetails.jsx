import { useParams } from "react-router-dom"
import {useState} from 'react'
import '../styles/project.css'
import table from '../../public/data.json'
import ErrorPage from './error'
import GetTags from '../components/getTags'
import Getequipments from'../components/getequipments'

function ProjectDetails(){
    const data  = table;
    const param = useParams();
    const id = param.id;
    const projectData = data.filter(item => item.id == id);
    const project = projectData[0];
    const [index, setIndex] = useState(0);
    const [isdrop, setIsdrop] = useState([false, false]);

    function arowRight(){
        if ( index >= project.pictures.length -1){
            setIndex(0)
        }else{
            setIndex(index+1)
        }
    }
    function arowLeft(){
        if ( index <= 0){
            setIndex(project.pictures.length -1)
        }else{
            setIndex(index-1)
        }
    }
    function raiting(id){
        const rat = +project.rating
        return{
            color: id <= rat ? '#FF6060':'#E3E3E3'
        }    
    }
    function drop(i){
        setIsdrop(item => item.map((valu, index)=> index === i? !valu :valu))
    }
    // Vérifiez l'existence de l'ID de la propriété avant de l'afficher
    function exist(){
        const ex = data.some(proj => proj.id === id)
        if(!ex){
            return(
                <ErrorPage/>
            )
        }else{
            return(
                <main>
                    <section className="carosel">
                        <img src={project.pictures[index]} alt={project.title}/>
                        <button onClick={arowRight} className={project.pictures.length > 1 ? 'arrow-right': 'non'}><i className="fa-solid fa-chevron-right"></i></button>
                        <button onClick={arowLeft} className={project.pictures.length > 1 ? 'arrow-left': 'non'}><i className="fa-solid fa-chevron-left"></i></button>
                        <p className={project.pictures.length > 1 ? 'counter': 'non'}>{index + 1}/{project.pictures.length}</p>
                    </section>
                    <section className="content">
                        <div className="info-content">
                            <div className="content-one">
                                <div className="content-title">
                                    <h1>{project.title}</h1>
                                    <p>{project.location}</p>
                                </div>
                                <div className="tags">
                                    <GetTags/>
                                </div>
                            </div>
                            <div className="content-tow">
                                <div className="host">
                                    <p>{project.host.name}</p>
                                    <img className="host-img" src={project.host.picture} alt={project.host.name} />
                                </div>
                                <div className="raiting">
                                    <i style={raiting(1)} className="fa-solid fa-star"></i>
                                    <i style={raiting(2)} className="fa-solid fa-star"></i>
                                    <i style={raiting(3)} className="fa-solid fa-star"></i>
                                    <i style={raiting(4)} className="fa-solid fa-star"></i>
                                    <i style={raiting(5)} className="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="content-three">
                            <div className="drops-div">
                                <div className="description-drop">
                                    <div className="description">
                                        <p>Description</p>
                                        <button onClick={()=>drop(0)} className="drop"><i className={isdrop[0] === false?"fa-solid fa-chevron-up":"fa-solid fa-chevron-up down"}></i></button>
                                    </div>
                                    <div className={isdrop[0] !== false ? 'ani show': 'ani no-show'}>
                                        <p className="text-description">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="drops-div">
                                <div className="equipements-drop">
                                    <div className="equipements">
                                        <p>Équipements</p>
                                        <button onClick={()=>drop(1)} className="drop"><i className={isdrop[1] === false?"fa-solid fa-chevron-up":"fa-solid fa-chevron-up down"}></i></button>
                                    </div>
                                </div>
                                <div className={isdrop[1] !== false ? 'ani show': 'ani no-show'}>
                                        <Getequipments/>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            )
        }
    }
    
    return(
        exist()
    )
}
export default ProjectDetails