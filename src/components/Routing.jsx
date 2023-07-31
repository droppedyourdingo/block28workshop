import {Routes, Route} from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";
import Credit from "./Credit";


export default function Routing() {

    return(
    
    <div id="main-section">
        <Routes>
            <Route path= "/blue" element={<Blue/>}/>
            <Route path="/red" element={<Red/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/credit" element={<Credit/>}/>
        </Routes>
    </div>
    
    )
}