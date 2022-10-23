
import {Link} from "react-router-dom";
import"./Header.css"

export default function Header() {
    return(
        <>
        <nav id="NAV">
            <ul id="headmenu">
            <li>
            <Link to ="Home" >
                <span> Home</span>
            </Link>
              </li>
                <li>
            <Link to ="Articles" >
                <span> Article</span>
            </Link>
              </li>
              <li>
            <Link to ="Ajouter" >
                <span> Ajouter Article</span>
            </Link>
            </li>
            
             <li>

             <Link to ="Apropos" >
                <span> Apropos</span>
            </Link>
            </li>
            </ul>


        </nav>
        </>
    )
    
};
