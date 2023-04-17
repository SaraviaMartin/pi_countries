import "./landing.styles.css";
import {Link} from "react-router-dom";

function Landing(){
    return(
        <div className="landing-page">
            <h1 className="title ">Bienvenido a mi CoutryApp</h1>
            <Link to="/home">
                <button className="button">Entrar</button>
            </Link>
        </div>
    )
};

export default Landing;