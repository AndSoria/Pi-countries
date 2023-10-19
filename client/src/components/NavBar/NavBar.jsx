import { Link, useLocation } from "react-router-dom"
import style from './NavBar.module.css'
import SearchBar from "../SearchBar/SearchBar"


const NavBar=()=>{

    const {pathname}= useLocation()
    return(
        <div className={style.mainContainer}>
            <h2>Henry travel</h2>
            <Link to='/home'>
                <button >Home</button>
            </Link>
            <Link to='/form'>
                <button >Create activity</button>
            </Link>

            {(!pathname.includes('detail')&&<SearchBar/>)}
        </div>
    )
}

export default NavBar