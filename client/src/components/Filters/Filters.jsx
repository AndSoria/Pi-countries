import { useDispatch, useSelector } from "react-redux";
import style from './Filters.module.css';
import { resetFilters } from "../../redux/action";


const Filters = () => {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters);

    console.log(filters);

    const handleReset = () => {
        dispatch(resetFilters());
    }


    return (
        <div className={style.containerFilter}>
            <h3>Filters</h3>
            {Object.keys(filters).map(filterKey => {
                
                const filterValue = filters[filterKey];
                
                if (Array.isArray(filterValue)) {
                    return (
                        <div key={filterKey} className={style.filters}>
                            {filterValue.map((item, index) => (
                                    <h5 key={index}>{item}</h5>
                                ))}
                        </div>
                    );
                } else if (filterValue !== '') {
                    return (
                        <div key={filterKey} className={style.filters}>
                            <h5 >{filterValue}</h5>
                        </div>
                        
                    );
                } 
            })}
            <button onClick={handleReset} className={style.btn}>Reset</button>
        </div>
    );
}

export default Filters;