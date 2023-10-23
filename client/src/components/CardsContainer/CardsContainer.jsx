import style from "./CardsContainer.module.css"
import Card from '../Card/Card'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getCountries } from "../../redux/action"
import Pagination from "../Pagination/Pagination"


const CardsContainer=()=>{

    const stateGlobal= useSelector(state=>state)
    const renderState= useSelector(state=>state.render)
    const dispatch= useDispatch()
    let countries= stateGlobal[renderState]


    //paginacion
    const [page, setPage]=useState(1); //numero de pagina
    const perPage=9; //cantidad de recetas por pagina
    const maxPages= Math.ceil(countries?.length / perPage); //cantidad de paginas que vamos a tener
    const from= (page-1) * perPage; //variable para indicar desde que elemento se va a realizar el slice del array
    const until=from + perPage; //variable para indicar hasta que elemento se va a realizar el slice del array



    useEffect(()=>{
        if(renderState==='allCountries'){

            dispatch(getCountries())
        }
    },[renderState,dispatch])

    return(
        <div className={style.container}>
            
                <Pagination page={page} setPage={setPage} maxPages={maxPages}/>
           <div className={style.card}>
            {
            countries.slice(from,until).map((country)=>{

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
                        ></Card>
                })}
                </div>
        </div>
    )
}

export default CardsContainer;