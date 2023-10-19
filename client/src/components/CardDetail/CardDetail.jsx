import style from './CardDetail.module.css'


const CardDetail=(props)=>{

    const {id, name,imageFlag, continent, capital,subregion,area,population}= props
    return(

        <div className={style.cardDetail}>
             <img src={imageFlag}/>
            <a>id: {id}</a>
            <a>name: {name}</a>
            <a>continent: {continent}</a>
            <a>capital: {capital}</a>
           <a>subregion: {subregion}</a>
            <a>area: {area}</a>
            <a>population: {population}</a>
        </div>

    )
}

export default CardDetail