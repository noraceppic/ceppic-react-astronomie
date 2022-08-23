import "./Footer.css"
export default function () {
    
        const CurrentYear = () => {
            return new Date().getFullYear();
        }
        return(
        
            <footer>
            <p> ASTRONOMIE &copy; - {CurrentYear()}</p>
            </footer>
        )
    
    
};
