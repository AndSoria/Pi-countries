import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import style from  './Form.module.css'
import { getCountries, createActivity  } from "../../redux/action"



const Form=()=>{

    const countries = useSelector(state => state.allCountries.slice().sort((a, b) => a.name.localeCompare(b.name)));
    const dispatch= useDispatch()

    const [activityData, setActivityData]= useState({

        name:'',
        difficult:1,
        duration:'',
        season:'',
        countriesId:[]

    })

    
//   const [errors, setErrors] = useState({
//     name:'',
//     difficulty:'',
//     duration:'',
//     season:'',
//     countriesId:'',
//     enable:true,
//   });

  useEffect(()=>{
   
        dispatch(getCountries())
    
},[dispatch])

const handleInputChange = (e) => {
    const {name, value}= e.target

    setActivityData({...activityData,[name]:value})
}

const handleAddCountry=(e)=>{
    const {name, value}= e.target
    console.log(name, value)
    if(!activityData.countriesId.includes(value)){

        setActivityData({...activityData, countriesId: [...activityData.countriesId, value]})
    }

}

const handleRemoveCountry=(e)=>{
    const value= e.target.value
    
    setActivityData({
        ...activityData,
        countriesId: activityData.countriesId.filter(country=>country !=value)
    })
}

const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(createActivity(activityData))
}


console.log(activityData)
       return (
        
    <div className={style.container}>
      <h2>Create Activity</h2>
      <form onSubmit={handleSubmit}>   
        <div className={style.containerForm}>
            <label htmlFor="activityName" className={style.labelName}>Activity name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={activityData.name}
                className={style.inputName}
                onChange={handleInputChange}
                required
            />
            <label htmlFor="difficult" className={style.labelName}>Difficult</label>
            <input type='range' min='1' max='5' name='difficult' value={activityData.difficult} onChange={handleInputChange}></input>
            <label htmlFor="activityDuration" className={style.labelName}>Duration</label>
            <input
                type="text"
                id="duration"
                name="duration"
                value={activityData.duration}
                className={style.inputName}
                onChange={handleInputChange}
                required
            />
            <div className={style.seasonContainer}>
                <label htmlFor="activitySeason" className={style.labelName}>Season</label>
                <ul id='season' className={style.listSeason} onChange={handleInputChange}  >
                    <li>
                        <input type='radio' name='season' value='winter'/>
                        Winter
                    </li>
                    <li>
                        <input type='radio' name='season' value='spring'/>
                        Spring
                    </li>
                    <li>
                        <input type='radio' name='season' value='summer'/>
                        Summer
                    </li>
                    <li>
                        <input type='radio' name='season' value='summer'/>
                        Autumn
                    </li>
                    
                </ul>
                

            </div>
            <label htmlFor="activityCountries" className={style.labelName}>Country</label>
            <select onChange={handleAddCountry} name='countriesId'>
                <option disabled selected value> Select a country </option>
                {
                    countries.map((country)=>{return <option key={country.id} value={country.id}>{country.name}</option>})
                }
            </select>
            <div className={style.countrySelect}>
                {
                    activityData.countriesId.length>0 && activityData.countriesId.map((country,index)=>{return <button className={style.btnRemove} value={country} key={index} onClick={handleRemoveCountry}>{(countries.find(countries=>countries.id===country)).name}    x</button>})
                }
            </div>
        </div>
            <button type="submit"  className={style.createButton}>
                 Submit
            </button>
      </form>
    </div>
    )
}


export default Form;