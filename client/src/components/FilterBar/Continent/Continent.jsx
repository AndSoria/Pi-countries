import { filterByContinent } from '../../../redux/action'
import style from './Continent.module.css'
import { useDispatch } from 'react-redux'
const Continent=()=>{

    const dispatch= useDispatch()

    const handleContinent=(e)=>{
        const continent= e.target.value

        dispatch(filterByContinent(continent))
    }


    return(
        <div className={style.filterContinent}>
            <select className={style.continents} onChange={handleContinent}>
                <option disabled selected value="">Continent</option>
                <option value="All">All continents</option>
                <option value="Africa">Africa</option>
                <option value="Antarctic">Antarctica</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="Oceania">Oceania</option>
                <option value="South America">South America</option>
            </select>
        </div>

    )
}

export default Continent