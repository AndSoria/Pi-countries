
import axios from 'axios'
export const GET_COUNTRIES= 'GET_COUNTRIES'
export const COUNTRY_ID= 'COUNTRY_ID'
export const COUNTRY_NAME='COUNTRY_NAME'
export const RESET_FILTERS ='RESET_FILTERS '

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
            
        }
    }
}

export const resetFilters=()=>{
    return async function(dispatch){
        dispatch({type: RESET_FILTERS })
    }
}