import { useDispatch } from 'react-redux'
const Order=()=>{

    const dispatch= useDispatch();
    
    const handleOrder=(e)=>{
        const newOrder=e.target.value
    
             dispatch(sortName(newOrder))

        }

    return (
        <div className={style.orderContainer}>
           <select className={style.orders} onChange={handleOrder}>
                <option disabled selected value="">Order</option>
                {/* <option className={style.option} value="HIGH_TO_LOW">Score High to Low</option>
                <option className={style.option} value="LOW_TO_HIGH">Score Low to High</option> */}
                <option className={style.option} value="A">A-Z</option>
                <option className={style.option} value="D">Z-A</option>
            </select>
        </div>  
    )
}

export default Order