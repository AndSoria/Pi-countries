/* eslint-disable react/prop-types */
import style from "./Card.module.css"
import {Link} from 'react-router-dom'

const Card=(props)=>{

    const {id, name,imageFlag, continent}= props

    
    return (
        <div className={style.card}>
            <img className={style.image} src={imageFlag}/>
            <p>Name: {name}</p>
            <p>Continent: {continent}</p>
            <Link to={`/detail/${id}`}>
                        <button className={style.linkButton}> + Info </button>
            </Link>
            
        </div>
    )
}

export default Card