/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import style from "./Order.module.css"
import { sortName } from '../../../redux/action';

const Order=({setFilterApplied})=>{ //este comonente orden en orden alfabetico y viceversa

    const dispatch= useDispatch();

    const handleOrder=(e)=>{
        const newOrder=e.target.value
    
             dispatch(sortName(newOrder)) //a
             setFilterApplied(true)
        }

    return (
        <div className={style.orderContainer}>
           <select value='' className={style.orders} onChange={handleOrder}>
                <option value=''>Order</option>
                
                <option className={style.option} value="A">A-Z</option>
                <option className={style.option} value="D">Z-A</option>
            </select>
        </div>  
    )
}

export default Order