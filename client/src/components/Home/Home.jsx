import "./home.styles.css";
import Cards from "../Cards/Cards"
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { useState } from "react";
import { getAllCountries }from "../../redux/Actions/actions"
import Pagination from "../Pagination/Pagination"
import Detail from "../Detail/Detail"
// import SortByName from "../sorts/SortByName";
// import SortByPopulation from "../sorts/SortByPopulation";



function Home(){

  const [order, setOrder] = useState("");
  const [show, setShow] = useState(false);


const dispatch = useDispatch();
const allCountries = useSelector((state) => state.allCountries);
useEffect(() => {
  dispatch(getAllCountries());
}, [dispatch]);


// console.log(allCountries)
//   let handleReload = (e) => {
//     e.preventDefault();
//     dispatch(getAllCountries());
//   };
const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 12;
  let indFirstCountry = 0;
  let indLastCountry = 0;

  if (currentPage === 1) {
    indFirstCountry = 0;
    indLastCountry = 0;
  } else {
    indFirstCountry = currentPage - 2;
    indLastCountry = currentPage - 1;
  }
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  const currentCountries =
    !allCountries.length > 0
      ? []
      : allCountries.slice(
          indexOfFirstCountry + indFirstCountry,
          indexOfLastCountry + indLastCountry
        );
  console.log("array current countries", currentCountries);

  const paged = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [loading, setLoading] = useState(false);
  console.log("show ", show);
  useEffect(() => {
    setShow((show) => !show);
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

    return(
      
        <div className="home-container">
          <Navbar/>
         <Cards allCountries={allCountries}/>
         <Pagination
         countriesPerPage={countriesPerPage}
         allCountries={allCountries}
         paged={paged}
         key={"page" + currentPage}
         currentPage={currentPage}
       />
        </div>
    )
};

export default Home;
