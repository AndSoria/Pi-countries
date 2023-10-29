/* eslint-disable react/prop-types */
import CardActivity from '../CardActivity/CardActivity'
import style from './CardDetail.module.css'


const CardDetail=(props)=>{

    const {id, name,imageFlag, continent, capital,subregion,area,population, activities}= props

    console.log(activities);
    return(

        <div className={style.cardDetail}>

            <div className={style.data}>
                <div className={style.containerImg}>
                     <img src={imageFlag}/>
                </div>

                <div className={style.containerData}>
                    <div className={style.labelData}>
                        <label htmlFor="id">Id</label>
                        <h5>{id}</h5>
                    </div>
                    <div className={style.labelData}>
                        <label htmlFor="name">Name</label>
                        <h5>{name}</h5>
                    </div>
                    <div className={style.labelData}>
                        <label htmlFor="continent">Continent</label>
                        <h5>{continent}</h5>
                    </div>
                    <div className={style.labelData}>
                        <label htmlFor="capital">Capital</label>
                        <h5>{capital}</h5>
                    </div>
                    <div className={style.labelData}>
                        <label htmlFor="subregion">Subregion</label>
                        <h5>{subregion}</h5>
                    </div>
                    <div className={style.labelData}>
                        <label htmlFor="area">Area</label>
                        <h5>{area}</h5>
                    </div>
                    <div className={style.labelData}>
                        <label htmlFor="population">Population</label>
                        <h5>{population}</h5>
                    </div>
                
                </div>
            </div>
            <div className={style.containerActivity}>
                <div className={style.title}>
                    <h5>Activities</h5>
                </div>
                <div className={style.activity}>
                    {activities?.map((act) => {return <CardActivity key={act.id} id={act.id} name={act.name} difficulty={act.difficulty} duration={act.duration} season={act.season}/>})}
                </div>

            </div>
        </div>

        

    )
}

export default CardDetail