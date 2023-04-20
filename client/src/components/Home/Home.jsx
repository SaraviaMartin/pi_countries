import "./home.styles.css";
import Cards from "../Cards/Cards"
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getAllCountries }from "../../redux/Actions/actions"



function Home(){

//   const [order, setOrder] = useState("");

const dispatch = useDispatch();
const allCountries = useSelector((state) => state.allCountries);
useEffect(() => {
  dispatch(getAllCountries());
}, [dispatch]);

//   let handleReload = (e) => {
//     e.preventDefault();
//     dispatch(getAllCountries());
//   };

    return(
        <div className="home-container">
         <Cards allCountries={allCountries}/>
        </div>
    )
};

export default Home;
