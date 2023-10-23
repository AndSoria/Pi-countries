
import style from './FilterBar.module.css'
import Continent from './Continent/Continent'
import Order from './Order/Order'
import Population from './Population/Population'
import Activity from './Activity/Activity'

const FilterBar=()=>{

    return (
        <div className={style.filterContainer}>
            <Order/>
            <Continent/>
            <Population/>
            <Activity/>
        </div>
    )
}

export default FilterBar