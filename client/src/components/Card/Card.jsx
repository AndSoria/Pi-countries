import style from "./Card.module.css"
import {Link} from 'react-router-dom'

const Card=(props)=>{

    const {id, name,imageFlag, continent}= props

    
    return (
        <div className={style.card}>
            <img src={imageFlag}/>
            <a>name: {name}</a>
            <a>continent: {continent}</a>

            <Link to={`/detail/${id}`}>
                        <button className={style.linkButton}> Info </button>
            </Link>
            
        </div>
    )
}

export default Card