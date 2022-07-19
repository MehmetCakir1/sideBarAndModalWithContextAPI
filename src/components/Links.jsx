import { useContext } from "react"
import {DataContext} from "../ContextAPI"
import {Link} from "react-router-dom"


const Links = () => {
    const {links}=useContext(DataContext)
    // console.log(links);
  return (
    <ul className="linksUl">
        {links.map((item)=>{
            const {id,url,text,icon}=item;
            return(
                    <li key={id}><Link to={url}><span>{icon}</span>  {text[0].toUpperCase()+text.slice(1)}</Link></li>
            )
        })}
    </ul>
  )
}

export default Links