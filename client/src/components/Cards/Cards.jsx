import Card from "../Card/Card"
import "./cards.styles.css"


function Cards({allCountries}){
//    const countriesList = allCountries 
    return(
        <div className="cards-list">

            {!Array.isArray(allCountries)
            ? allCountries
            : allCountries.map((country) => {
                return(
                    <Card
                        id = {country.id}
                        name= {country.name}
                        key={"Card" + country.id}
                    />
                )
            })
            }
        </div>
        // <div className="cards-list">
            
        //     {countriesList?.map(country =>
        //         <Card/>)}
        // </div>
    )
}

export default Cards;