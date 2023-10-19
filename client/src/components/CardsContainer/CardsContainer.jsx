import style from "./CardsContainer.module.css"
import Card from '../Card/Card'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getCountries } from "../../redux/action"

const CardsContainer=()=>{

    const stateGlobal= useSelector(state=>state)
    const renderState= useSelector(state=>state.render)
    const dispatch= useDispatch()
    let countries= stateGlobal[renderState]

    useEffect(()=>{
        if(renderState==='allCountries'){

            dispatch(getCountries())
        }
    },[renderState])

    return(
        <div className={style.container}>
            {
            countries.map((country)=>{
                    return <Card 
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
    )
}

export default CardsContainer;