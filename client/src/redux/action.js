
import axios from 'axios'

export const GET_COUNTRIES= 'GET_COUNTRIES'
export const COUNTRY_ID= 'COUNTRY_ID'
export const COUNTRY_NAME='COUNTRY_NAME'
export const RESET_FILTERS ='RESET_FILTERS'
export const SORT_BY_NAME='SORT_BY_NAME'
export const FILTER_BY_CONTINENT= 'FILTER_BY_CONTINENT'
export const SORT_BY_POPULATION='SORT_BY_POPULATION'
export const GET_ACTIVITY='GET_ACTIVITY'
export const FILTER_BY_ACTIVITY='FILTER_BY_ACTIVITY'
export const ADD_FILTER_ARRAY= 'ADD_FILTER_ARRAY'
export const REMOVE_FILTER_ARRAY= 'REMOVE_FILTER_ARRAY'

export const getCountries=()=>{
    return async function (dispatch){
        try {
            
            const countries= (await axios.get(`http://localhost:3001/countries`)).data
    
            
            dispatch({type: GET_COUNTRIES, payload: countries})

        } catch (error) {
             alert (error.message)
        }
    }
}

export const countryId=(id)=>{
    return async function (dispatch){
        try {

            const country= await axios.get(`http://localhost:3001/countries/${id}`).then(result=>result.data)

    
            dispatch ({type: COUNTRY_ID, payload: country})
            
        } catch (error) {
            alert (error.message)
        }
    }
}

export const countryName=(name)=>{
    return async function (dispatch){
        try {

            const countries= await axios.get(`http://localhost:3001/countries?name=${name}`).then(result=>result.data)

            dispatch({type: COUNTRY_NAME, payload: countries, value: name})
            
        } catch (error) {
            alert (error.message)
        }
    }
}

export const resetFilters=()=>{
    return async function(dispatch){
        dispatch({type: RESET_FILTERS })
    }
}

export const sortName=(order)=>{

    return async function(dispatch){
        dispatch({type: SORT_BY_NAME, payload: order})
    }

}

export const filterByContinent=(continent)=>{
    return async function(dispatch){
        dispatch({type: FILTER_BY_CONTINENT, payload: continent})
    }
}

export const sortPopulation=(value)=>{
    return async function(dispatch){
        dispatch({type: SORT_BY_POPULATION, payload: value})
    }

}

export const allActivities=()=>{
    return async function(dispatch){
        const allActivities= await axios.get(`http://localhost:3001/activities`).then(result=>result.data)
        console.log(allActivities)
        dispatch({type: GET_ACTIVITY, payload: allActivities})
    }
}

export const filterActivity=(option)=>{
    return async function(dispatch){
        console.log(option)
        dispatch({type: FILTER_BY_ACTIVITY, payload: option})
    }
}

export const createActivity=(activity)=>{

    return async function (){
        try {
             await axios.post('http://localhost:3001/activities', activity)
        } catch (error) {
            alert (error.message)
        }
    }
    
}

export const addFilter=(value)=>{
    return async function(dispatch){
        
        dispatch({type: ADD_FILTER_ARRAY, payload: value})
    }
}

export const removeFilter=(value)=>{
    return async function(dispatch){
        
        dispatch({type: REMOVE_FILTER_ARRAY, payload: value})
    }
}