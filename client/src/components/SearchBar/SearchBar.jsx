import { useState } from "react"
import { countryName, resetFilters } from "../../redux/action"
import { useDispatch, useSelector } from "react-redux"
import style from './SearchBar.module.css'




const SearchBar=()=>{

    const [searchName, setSearchName]= useState('') // aca se guarda el valor del input

    const valueSearch= useSelector(state=>state.searchedValue)

    const dispatch= useDispatch()

    const handleChange=(e)=>{
            setSearchName(e.target.value)//toma el valor del input y lo agrega al estado local
    }

    const handleSearch=()=>{
        const nameRegex = /^[A-Za-z\s]+$/;
            if(searchName.trim()===''){
                setSearchName('')
                throw alert('Please enter a value')
            }
            if(!nameRegex.test(searchName)){
                setSearchName('')
                throw alert('Please enter only letters') 
            }
    
            dispatch(countryName(searchName)); //llama a la action que realiza la busqueda
            setSearchName('')// una vez que se aprieta el boton, limpia el input
        
    }

    const handleReset=()=>{
            dispatch(resetFilters())
    }



    return(
        <div className={style.searchBar}>
            <input type="text" name="text" className={style.input} required='' placeholder="Type name" value={searchName} onChange={handleChange} />
            <button type="button" className={style.btn} disabled={searchName===''} onClick={handleSearch}>Search</button>
            {valueSearch && <button  className={style.btn} disabled={valueSearch===''} onClick={handleReset}>{valueSearch} x</button>}
        </div>
    )
}

export default SearchBar