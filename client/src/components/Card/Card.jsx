/* eslint-disable react/prop-types */
import style from "./Card.module.css"
import {Link} from 'react-router-dom'



const Card=(props)=>{

    const {id, name,imageFlag, continent, hasActivity}= props

    return (
        <div className={style.card}>
            <img className={style.image} src={imageFlag}/>
         <div className={style.data}>
            <div className={style.name}>
                {/* <h4>Name:</h4> 
                <p>{name}</p>  */}
                <h4>{name}</h4>
            </div>
            <div className={style.continent}>

                {/* <h4>Continent:</h4> <p>{continent}</p> */}
                <h4>{continent}</h4> 
            </div>
         </div>
            
        <div className={style.statusButton}>
            <input name="radio" type="radio" className={hasActivity ? style.inputGreen : style.inputRed} checked=""/>
            
            <Link to={`/detail/${id}`}>
                        <button className={style.linkButton}> + Info </button>
            </Link>
        </div>
        </div>
    )
}

export default Card