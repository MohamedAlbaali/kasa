import { useParams } from "react-router-dom"
import {useState, useContext} from 'react'
import {DataContext} from '../contexts/featchapi'
import '../styles/project.css'

function ProjectDetails(){
    const { data } = useContext(DataContext);
    const param = useParams();
    const id = param.id;
    const projectData = data.filter(item => item.id == id)
    const project = projectData[0];
    let [index, setIndex] = useState(0);
    const tags = project.tags;
    const equipments = project.equipments;

    const [isopenDesc, setIsopenDesc] = useState(false)
    const [isopenEqu, setIsopenEqu] = useState(false)

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
    function GetTags(){
        return (
            tags.map((item, index)=>(
                <p className="tag" key={index}>{item}</p>
            ))
        )
    }
    function raiting(id){
        const rat = +project.rating
        return{
            color: id <= rat ? '#FF6060':'#E3E3E3'
        }
           

    }
    function dropdwnDesc(){
        isopenDesc == false? setIsopenDesc(true):setIsopenDesc(false)
    }
    function dropdwnEqu(){
        isopenEqu == false? setIsopenEqu(true):setIsopenEqu(false)
    }
    function Getequipments(){
        return(
            equipments.map((item, index) =>(
                <p className="text-equipments" key={index}>{item}</p>
            ))
        )
    }

    return(
        <>
            <div className="carosel">
                <img src={project.pictures[index]} alt={project.title}/>
                <button onClick={arowRight} className={project.pictures.length > 1 ? 'arrow-right': 'non'}><i className="fa-solid fa-chevron-right"></i></button>
                <button onClick={arowLeft} className={project.pictures.length > 1 ? 'arrow-left': 'non'}><i className="fa-solid fa-chevron-left"></i></button>
                <p className={project.pictures.length > 1 ? 'counter': 'non'}>{index + 1}/{project.pictures.length}</p>
            </div>
            <div className="content">
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
                                <button onClick={dropdwnDesc} className="drop"><i className={isopenDesc === false?"fa-solid fa-chevron-up":"fa-solid fa-chevron-up down"}></i></button>
                            </div>
                            <div className={isopenDesc !== false ? 'ani show': 'ani no-show'}>
                                <p className="text-description">{project.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="drops-div">
                        <div className="equipements-drop">
                            <div className="equipements">
                                <p>Équipements</p>
                                <button onClick={dropdwnEqu} className="drop"><i className={isopenEqu === false?"fa-solid fa-chevron-up":"fa-solid fa-chevron-up down"}></i></button>
                            </div>
                        </div>
                        <div className={isopenEqu !== false ? 'ani show': 'ani no-show'}>
                                <Getequipments/>
                        </div>
                    </div>
                </div>
                {/* <div className="text-info">
                    <div className={isopenDesc !== false ? 'show': 'n'}>
                        <p className="text-description">{project.description}</p>
                    </div>
                    <div className={isopenEqu !== false ? 'show': 'n'}>
                        <Getequipments/>
                    </div>
                </div> */}
            </div>
        </>
    )
}
export default ProjectDetails