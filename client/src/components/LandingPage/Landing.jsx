import "./landing.styles.css";
import {Link} from "react-router-dom";

function Landing(){
    return(
        <div className="landing-page">
            <h1>Bienvenido a mi LandingPage de CoutryApp</h1>
            <Link to="/home">
                <button>Entrar</button>
            </Link>
        </div>
    )
};

export default Landing;