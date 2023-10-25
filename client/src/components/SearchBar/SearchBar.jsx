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
        try {
            if(searchName.trim()===''){
                throw alert('Debe ingresar un valor')
            }
            dispatch(countryName(searchName)); //llama a la action que realiza la busqueda
            setSearchName('')// una vez que se aprieta el boton, limpia el input
        } catch (error) {
            throw alert(error.message)
        }
    }

    const handleReset=()=>{
        
            dispatch(resetFilters())
    }



    return(
        <div className={style.searchBar}>
            <input type="text" name="text" className={style.input} required='' placeholder="Type name" value={searchName} onChange={handleChange} />
            <button type="button" className={style.button} disabled={searchName===''} onClick={handleSearch}>Search</button>
            {valueSearch && <button  className={style.button} disabled={valueSearch===''} onClick={handleReset}>{valueSearch} x</button>}
        </div>
    )
}

export default SearchBar