import "./navbar.styles.css";

function Navbar(){
    return(
        <div className="search-box">
            <h3>Este es el componente Navbar de CoutryApp</h3>
            <form>
                <input placeholder="Busqueda"/>
                <button>Buscar</button>
            </form>
        </div>
    )
};

export default Navbar;