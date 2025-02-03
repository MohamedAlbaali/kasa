import table from '../../public/data.json'
import { useParams } from "react-router-dom"


function GetTags(){
    const data  = table;
    const param = useParams();
    const id = param.id;
    const projectData = data.filter(item => item.id == id);
    const project = projectData[0];
    const tags = project.tags;
    return (
        tags.map((item, index)=>(
            <p className="tag" key={index}>{item}</p>
        ))
    )
}
export default GetTags