import { Link } from 'react-router-dom';
import { useContext} from 'react'
import {DataContext} from '../contexts/featchapi'


function GetHebrgemnts(){
    const { data } = useContext(DataContext);
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