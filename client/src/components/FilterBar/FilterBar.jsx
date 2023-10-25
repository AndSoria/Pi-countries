/* eslint-disable react/prop-types */

import style from './FilterBar.module.css'
import Continent from './Continent/Continent'
import Order from './Order/Order'
import Population from './Population/Population'
import Activity from './Activity/Activity'

const FilterBar=({setFilterApplied})=>{

    return (
        <div className={style.filterContainer}>
            <Order setFilterApplied={setFilterApplied}/>
            <Continent setFilterApplied={setFilterApplied}/>
            <Population setFilterApplied={setFilterApplied}/>
            <Activity setFilterApplied={setFilterApplied}/>
        </div>
    )
}

export default FilterBar