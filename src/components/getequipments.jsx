import table from '../../public/data.json'
import { useParams } from "react-router-dom"

function Getequipments(){
    const data  = table;
    const param = useParams();
    const id = param.id;
    const projectData = data.filter(item => item.id == id);
    const project = projectData[0];
    const equipments = project.equipments;
    return(
        equipments.map((item, index) =>(
            <p className="text-equipments" key={index}>{item}</p>
        ))
    )
}
export default Getequipments