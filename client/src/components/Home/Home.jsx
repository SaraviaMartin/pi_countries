import "./home.styles.css";
import Cards from "../Cards/Cards"
import Navbar from "../Navbar/Navbar";
import { useEffect,  } from "react";
import {useDispatch, useSelector} from "react-redux"

import getAllCountries from "../../redux/Actions/actions"



function Home(){
    const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

//   const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

//   let handleReload = (e) => {
//     e.preventDefault();
//     dispatch(getAllCountries());
//   };

    return(
        <div className="home-container">
            <h1>Esta es la Home de CoutryApp</h1>
            <Navbar/>
            <Cards/>
            
            
            
        </div>
    )
};

export default Home;
