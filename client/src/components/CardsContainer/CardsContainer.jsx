/* eslint-disable react/prop-types */
import style from "./CardsContainer.module.css"
import Card from '../Card/Card'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getCountries, allActivities  } from "../../redux/action"
import Pagination from "../Pagination/Pagination"
import CardAllActivities from "../CardAllActivities/CardAllActivities"






const CardsContainer=({ filterApplied})=>{

    const stateGlobal= useSelector(state=>state)
    const renderState= useSelector(state=>state.render)
    const activity= useSelector(state=>state.activities)
    console.log(activity);
    

    const actIdcountry=activity.flatMap((activitiy)=>activitiy.Countries.map((country)=>country.id))
    const countryWithActivity= [...new Set(actIdcountry)]
    console.log(countryWithActivity);
    const dispatch= useDispatch()

    const flagIdCountries=stateGlobal.allCountries.map((country)=>({id:country.id, imageFlag:country.imageFlag}))

    let renderElements= stateGlobal[renderState]


    //paginacion
    const [page, setPage]=useState(1); //numero de pagina
    const perPage=10; //cantidad de paises por pagina
    const maxPages= Math.ceil(renderElements?.length / perPage); //cantidad de paginas que vamos a tener
    const from= (page-1) * perPage; //variable para indicar desde que elemento se va a realizar el slice del array
    const until=from + perPage; //variable para indicar hasta que elemento se va a realizar el slice del array



    useEffect(()=>{
        if(renderState==='allCountries'){
            dispatch(allActivities());
            dispatch(getCountries())
            setPage(1)
        }
        if (filterApplied) {
            setPage(1); // Reinicia la página a 1 cuando se aplica un filtro
          }
    },[renderState,dispatch,filterApplied,setPage])

    console.log(renderElements)

    return(
        <div className={style.container}>
            
                <Pagination page={page} setPage={setPage} maxPages={maxPages}/>
           <div className={style.card}>
            {
                
                renderState==='activities' ? renderElements.slice(from,until).map((activity)=>{

                    return <CardAllActivities 
                        key={activity.id}
                        id={activity.id}
                        name={activity.name}
                        difficulty={activity.difficulty}
                        duration={activity.duration}
                        season={activity.season}
                        countries={activity.Countries}
                        flagCountries={flagIdCountries}
                        />
                })

                :
        
                renderElements.slice(from,until).map((country)=>{

                    return <Card 
                        key={country.id}
                        id={country.id}
                        name={country.name}
                        imageFlag={country.imageFlag}
                        continent={country.continent}
                        capital={country.capital}
                        subregion={country.subregion}
                        area={country.area}
                        population={country.population}
                        hasActivity={countryWithActivity.includes(country.id)}
                        ></Card>
                })}
                </div>
        </div>
    )
}

export default CardsContainer;