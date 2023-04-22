import "./home.styles.css";
import Cards from "../Cards/Cards"
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getAllCountries }from "../../redux/Actions/actions"
// import SortByName from "../sorts/SortByName";
// import SortByPopulation from "../sorts/SortByPopulation";



function Home(){

//   const [order, setOrder] = useState("");

const dispatch = useDispatch();
const allCountries = useSelector((state) => state.allCountries);
useEffect(() => {
  dispatch(getAllCountries());
}, [dispatch]);


console.log(allCountries)
//   let handleReload = (e) => {
//     e.preventDefault();
//     dispatch(getAllCountries());
//   };

    return(
      
        <div className="home-container">
          <Navbar/>
         <Cards allCountries={allCountries}/>
        </div>
    )
};

export default Home;
