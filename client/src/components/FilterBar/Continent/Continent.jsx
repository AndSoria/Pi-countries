/* eslint-disable react/prop-types */
import { addFilter, filterByContinent } from '../../../redux/action'
import style from './Continent.module.css'
import { useDispatch } from 'react-redux'
const Continent=({setFilterApplied})=>{

    const dispatch= useDispatch()

    const handleContinent=async(e)=>{
        const continent= e.target.value
       await dispatch(filterByContinent(continent))
        await dispatch(addFilter(continent))
        console.log(continent);
        setFilterApplied(true)
    }


    return(
        <div className={style.filterContinent}>
            <select value='' className={style.continents} onChange={handleContinent}>
                <option value="">Continent</option>
                <option value="All">All continents</option>
                <option value="Africa">Africa</option>
                <option value="Antarctica">Antarctica</option>
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