/* eslint-disable react/prop-types */
import Filters from "../../components/Filters/Filters"
import CardsContainer from "../../components/CardsContainer/CardsContainer"
import style from './Home.module.css'


const Home=({filterApplied, setFilterApplied})=>{
    
    

    return(
        <div className={style.homeContainer}>
            <CardsContainer filterApplied={filterApplied} setFilterApplied={setFilterApplied}/>
            <Filters/>
        </div>
    )
}

export default Home