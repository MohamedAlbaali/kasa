import { Link } from 'react-router-dom';
import table from '../../public/data.json'

function GetHebrgemnts(){
    const data  = table;
    return( 
        data.map((ad)=>(
            <Link key={ad.id} to={`/project/${ad.id}`}>
                <article>                     
                    <img src={ad.cover} alt={ad.title} />
                    <p>{ad.title}</p>
                </article>
            </Link>
        ))
    )
}
export default GetHebrgemnts