/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import style from './Population.module.css'
import {sortPopulation} from '../../../redux/action'

const Population=({setFilterApplied})=>{

    const dispatch= useDispatch()

    const handlePopulation=(e)=>{
        const value= e.target.value

        dispatch(sortPopulation(value))
        setFilterApplied(true)

    }
    return (

        <div className={style.populationContainer} onChange={handlePopulation}>
            <select className={style.population}>
                <option disabled selected value="">Population</option>
                <option className={style.option} value="HIGH_TO_LOW">High to Low</option>
                <option className={style.option} value="LOW_TO_HIGH">Low to High</option>
            </select>

        </div>

    )
}

export default Population