import { useDispatch, useSelector } from "react-redux"
import style from './ArrayOfFilters.module.css'
import { removeFilter } from "../../redux/action"

const ArrayOfFilters=()=>{

    const dispatch = useDispatch()
    const handleRemoveFilter=(e)=>{
        const value= e.target.value
        dispatch(removeFilter(value))
    }

    const filters=useSelector(state=>state.arrayFilters)
    console.log(filters);
    return(
        <div className={style.containerFilter}>
            
            <h3>Filters applied</h3>
            {filters.map((filter) => (<div key={filter}> <p>{filter}</p> <button value={filter} onClick={handleRemoveFilter}>x</button>
  </div>
))}
        </div>
    )
}   

export default ArrayOfFilters