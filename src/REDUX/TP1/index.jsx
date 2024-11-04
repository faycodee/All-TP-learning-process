import { useSelector } from "react-redux";

function reduxApp() {
    const compteur =useSelector(state.cpt)
    return ( 
        <div>
            <p>Compteur : {}</p>
        </div>
     );
}

export default reduxApp;