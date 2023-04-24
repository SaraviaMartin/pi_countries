import { Link } from "react-router-dom";
import {getCountry }from "../../redux/Actions/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./navbar.styles.css";

function Navbar(){
    const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    }
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getCountry(name));
    setName("");
    }
    return(
        <div className="search-box">
            <h3>Este es el componente Navbar de CoutryApp</h3>
            <form onSubmit={(event) => handleClick(event)}>
                <input placeholder="Search Country"  onChange={(e) => handleInputChange(e)}/>
                <button onClick={(event) => {
            handleClick(event);
          }}>Buscar</button>
            </form>
        <div>
             <Link  to='/Activity'>Create Activity</Link>
             <br />
          <Link to='/Activities'>Activities List</Link>
        </div>
        </div>
    )
};

export default Navbar;