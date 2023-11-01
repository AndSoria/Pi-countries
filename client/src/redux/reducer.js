



  

import { GET_COUNTRIES,COUNTRY_ID, COUNTRY_NAME, RESET_FILTERS,SORT_BY_NAME, FILTER_BY_CONTINENT, GET_ACTIVITY,FILTER_BY_ACTIVITY, SORT_BY_POPULATION, ADD_FILTER} from "./action"
  

const initialState={
    
    allCountries:[],
    countryById:'',
    countriesByName:[],
    render:'allCountries',
    searchedValue:'',
	getFiltered: [],
    activities:[],
    filters:{ order:'',population:'', continent:'',activity:[] }
}




const rootReducer=(state= initialState, action)=>{
    
    switch(action.type){
        case GET_COUNTRIES:
            return{...state, render:'allCountries', allCountries:action.payload, getFiltered: action.payload}
            case COUNTRY_ID:
                return{...state, countryById:action.payload}
                case COUNTRY_NAME:
                return{...state,render: 'countriesByName', countriesByName:action.payload, searchedValue: action.value, getFiltered:action.payload}
       
        case RESET_FILTERS :
            return{
                ...state,
                countryById:'',
                countriesByName:[],
                render:'allCountries',
                searchedValue:'',
				filters:{order:'',population:'', continent:'',activity:[]},
            }
		case SORT_BY_NAME:
			if(action.payload==="A"){

				const orderAlfabetico=[...state.getFiltered.sort((a,b)=>a.name.localeCompare(b.name))]
				return{
					...state, render: "getFiltered", getFiltered: orderAlfabetico
				}
			}
			else{
                if(action.payload==="D"){
                    
                    const orderNoAlfabetico=[...state.getFiltered.sort((a,b)=>b.name.localeCompare(a.name))]
                    return{
                        ...state, render: "getFiltered", getFiltered: orderNoAlfabetico
                    }
                }
			}
            break;
            case FILTER_BY_CONTINENT:
                
                if(action.payload==="All"){
                    
                    return{
                        ...state,render: 'allCountries', getFiltered: state.allCountries
                    }
                }else
                {
                    
                    const byContinent=state.getFiltered.filter((country)=>country.continent===action.payload)
                    
                    return{
                        
                       ...state, render:'getFiltered', getFiltered: byContinent
                    }}
                    
        case SORT_BY_POPULATION:
            if((action.payload==='HIGH_TO_LOW')){
                const orderPopulation=[...state.getFiltered.sort((a,b)=>b.population - a.population)]
                
                return {
                    ...state, render:'getFiltered', getFiltered:orderPopulation
                }
            }
            else{
                if((action.payload==='LOW_TO_HIGH')){
                    
                    const orderPopulation=[...state.getFiltered.sort((a,b)=>a.population - b.population)]
                    return {
                        ...state, render:'getFiltered', getFiltered:orderPopulation
                    }
                    
                }
            }
            break;
            case GET_ACTIVITY:
                
                return{
                    ...state, render: 'allCountries', activities: action.payload
                }
                
            case FILTER_BY_ACTIVITY:
                    
                    {
                        const actIdcountry= state.activities.flatMap((activitiy)=>activitiy.Countries.map((country)=>country.id))
                        const countryWithActivity= [...new Set(actIdcountry)]
                        
                        console.log(countryWithActivity);
                        
                        if(action.payload==="allActivities"){

                            // const countriesByActivities= state.allCountries.filter((country)=>{return countryWithActivity.includes(country.id)})
                            
                            return{
                                ...state, render:'activities'
                            }
                            
            
                        }
                        else{
                           
                            
                            const activitiesByName= state.activities.filter((activitiy)=>activitiy.name===action.payload)

                            const idByActivity=activitiesByName.flatMap((activitiy)=>activitiy.Countries.map((country)=>country.id))
                            
                            const countriesByActivity = state.getFiltered.filter((country) => idByActivity.some((id) => id === country.id));
                           
                            return {
                                ...state, render:'getFiltered', getFiltered: countriesByActivity
                            }
                        }
                        
                    }
                    case ADD_FILTER:

                    {
                        console.log(action.property, action.payload);

                        if(action.property==='order'){

                            const value= action.payload ==='A' ? 'A-Z' : 'Z-A'
                            return{
                                ...state,
                                filters:{...state.filters, population:'', order: value}
                            }
                        }
                        else{
                            if(action.property==='population'){
                                return{
                                    ...state,
                                    filters:{...state.filters, order:'', population: action.payload}
                                }
                            }
                            else{
                                if(action.property==='continent' && action.payload != 'All'){

                                    return{
                                        ...state,
                                        filters:{...state.filters, continent:action.payload}
                                    }
                                }
                                else{
                                    if(action.property==='activities' && action.payload != 'allActivities'){

                                        const activities= state.filters.activity
                                        if(!activities.includes(action.payload)){

                                            console.log(action.property,action.payload);
                                            return{
                                                ...state,
                                                filters:{...state.filters, activity:[...state.filters.activity, action.payload]}
                                            }

                                        }
                                    }
                                }
                            }
                        
                        }
                    
                    }
                    break;
                            default: 
                            return {
                                ...state
                            };
                        }
                    }
                    
                    export default rootReducer