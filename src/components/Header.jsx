import {Link} from "react-router-dom";

export default function Header() {
    return(
        <>
        <nav id="NAV">
            <Link to ="Articles" >
                <span> Article</span>
            </Link>
            <Link to ="Ajouter" >
                <span> Ajouter Article</span>
            </Link>
             <Link to ="Apropos" >
                <span> Apropos</span>
            </Link>
            


        </nav>
        </>
    )
    
};
