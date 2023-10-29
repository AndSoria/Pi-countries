/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import style from './CardAllActivities.module.css'
import {Link} from 'react-router-dom'




const CardAllActivities=(props)=>{

    const {id,name,difficulty,duration,season,countries, flagCountries}=props

    console.log(countries)

    const valueDifficulty=(difficulty)=>{
        switch(difficulty){
            case 1:
                return "Very easy"
            case 2:
                return "Easy"
            case 3:
                return "Medium"
            case 4:
                return "Hard"
            case 5:
                return "Very hard"
            default:
                return "No difficulty"
        }
    
    }

    return(
        <div key={id} className={style.containerMain}>
           <div className={style.name}>
                <h5>{name}</h5>
           </div>
           <div className={style.allData}>
                <div className={style.data}>
                    <div className={style.labelData}>
                        <label>Duration</label>
                        <h5>{duration} hs</h5>
                    </div>

                    <div className={style.labelData}>
                        <label>Difficulty</label>
                        <h5>{valueDifficulty(difficulty)}</h5>
                    </div>

                    <div className={style.labelData}>
                        <label>Season</label>
                        <h5>{season}</h5>
                    </div>
                </div>
                <div className={style.countries}>
                    <h5>Countries</h5>
                    {countries.map((country) =>{
                            const countryFlag= flagCountries.find(flag=>flag.id===country.id)
                            if(countryFlag){
                                return (
                                        <Link to={`/detail/${country.id}`} key={country.id}>
                                            <img className={style.flag} src={countryFlag.imageFlag}/>
                                        </Link>
                                )
                            }
                    }
                )}
                </div>
           </div>

        </div>
    )
}

export default CardAllActivities;