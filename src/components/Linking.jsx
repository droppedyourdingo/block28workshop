import { Link } from "react-router-dom";


export default function Linking() {

    return(
    
        <div id="navbar">
            <Link to="/blue">Blue</Link>
            <Link to="/red">Red</Link>
            <Link to="/">Home</Link>
            <Link to="/credit">Credit</Link>
        </div>

    )
}