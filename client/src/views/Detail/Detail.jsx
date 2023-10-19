import { useParams } from 'react-router-dom';
import style from './Detail.module.css'
import CardDetail from '../../components/CardDetail/CardDetail';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countryId } from '../../redux/action';



const Detail=()=>{

    const {id}= useParams()
    const dispatch= useDispatch()

    const country= useSelector(state=>state.countryById)

    useEffect(()=>{
        
        dispatch(countryId(id))

    },[dispatch,id])
    
    return(
       
        
            <div className={style.containerDetail}>

                
                    <CardDetail 
                        id={country.id}
                        name={country.name}
                        imageFlag={country.imageFlag}
                        continent={country.continent}
                        capital={country.capital}
                        subregion={country.subregion}
                        area={country.area}
                        population={country.population}
                /> 
                
            </div>

        
    )
}

export default Detail