/* eslint-disable react/prop-types */
import style from './CardDetail.module.css'


const CardDetail=(props)=>{

    const {id, name,imageFlag, continent, capital,subregion,area,population, activities}= props
    return(

        <div className={style.cardDetail}>
             <img src={imageFlag}/>
            <a>Id: {id}</a>
            <a>Name: {name}</a>
            <a>Continent: {continent}</a>
            <a>Capital: {capital}</a>
           <a>Subregion: {subregion}</a>
            <a>Area: {area}</a>
            <a>Population: {population}</a>
            <a>Activities: {activities?.map((act) => <span key={act.id}> {act.name},</span>)}</a>
        </div>

    )
}

export default CardDetail