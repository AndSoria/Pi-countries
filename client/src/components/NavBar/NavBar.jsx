/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom"
import style from './NavBar.module.css'
import SearchBar from "../SearchBar/SearchBar"
import FilterBar from "../FilterBar/FilterBar"

const NavBar=({setFilterApplied})=>{

    const {pathname}= useLocation()
    return(
        <div className={style.mainContainer}>
            <div className={style.containerButtons}>
                <h2>Henry travel</h2>
                <Link to='/home'>
                    <button >Home</button>
                </Link>
                <Link to='/form'>
                    <button >Create activity</button>
                </Link>
                {(!pathname.includes('detail')&&!pathname.includes('form')&&<SearchBar setFilterApplied={setFilterApplied}/>)}
            </div>
            <div className={style.containerFilter}>
                {(!pathname.includes('detail')&&!pathname.includes('form')&&<FilterBar setFilterApplied= {setFilterApplied}/>)}
            </div>
                    
        
        </div>
    )
}

export default NavBar