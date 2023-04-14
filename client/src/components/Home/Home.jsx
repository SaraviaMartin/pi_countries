import "./home.styles.css";
import Cards from "../Cards/Cards"
import Navbar from "../Navbar/Navbar";

function Home(){
    return(
        <div className="home-container">
            <h1>Esta es la Home de CoutryApp</h1>
            <Navbar/>
            <Cards>

            </Cards>
            
        </div>
    )
};

export default Home;
