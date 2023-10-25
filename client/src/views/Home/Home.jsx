/* eslint-disable react/prop-types */
import ArrayOfFilters from "../../components/ArrayFilters/ArrayOfFilters"
import CardsContainer from "../../components/CardsContainer/CardsContainer"
import style from './Home.module.css'


const Home=({filterApplied, setFilterApplied})=>{
    
    

    return(
        <div className={style.homeContainer}>
            <CardsContainer filterApplied={filterApplied} setFilterApplied={setFilterApplied}/>
            <ArrayOfFilters/>
        </div>
    )
}

export default Home