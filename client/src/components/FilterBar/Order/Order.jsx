import { useDispatch } from 'react-redux'
import style from "./Order.module.css"
import { sortName } from '../../../redux/action';

const Order=()=>{ //este comonente orden en orden alfabetico y viceversa

    const dispatch= useDispatch();

    const handleOrder=(e)=>{
        const newOrder=e.target.value
    
             dispatch(sortName(newOrder)) //a

        }

    return (
        <div className={style.orderContainer}>
           <select className={style.orders} onChange={handleOrder}>
                <option disabled selected value="">Order</option>
                
                <option className={style.option} value="A">A-Z</option>
                <option className={style.option} value="D">Z-A</option>
            </select>
        </div>  
    )
}

export default Order