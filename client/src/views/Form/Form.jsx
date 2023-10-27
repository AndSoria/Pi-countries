import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import style from  './Form.module.css'
import { getCountries, createActivity  } from "../../redux/action"



const Form=()=>{

    const countries = useSelector(state => state.allCountries.slice().sort((a, b) => a.name.localeCompare(b.name)));
    const dispatch= useDispatch()

    const [activityData, setActivityData]= useState({

        name:'',
        difficulty:1,
        duration:'',
        season:'',
        countriesId:[]

    })

    const [valueDifficulty, setValueDifficulty]= useState('Very easy')

    useEffect(()=>{
   
        dispatch(getCountries())
    
},[dispatch])

    const difficultyChange=(e)=>{
        const { name, value } = e.target;
        console.log(name, value);
        if(name === 'difficulty'){
            
            switch (e.target.value) {
                
                case '1':
                    return 'Very easy'
                case '2':
                    return 'Easy'
                case '3':
                    return 'Medium'
                case '4':
                    return 'Hard'
                case '5':
                    return 'Very hard'
                default:
                    break;
            }
    }
}
  const [errors, setErrors] = useState({
    name:'',
    difficulty:'',
    duration:'',
    season:'',
    countriesId:'',
    enable:true,
  });

  const validate=async(state, property)=>{

    const nameRegex = /^[A-Za-z\s]+$/ //validate for name
    const regexDuration=/^\d+(\.\d{1,2})?$/

    const arraySeason=['summer','winter', 'spring','autumn']

    switch(property) {
        case 'name':
            if(state.name.trim()===''){
                await setErrors({...errors, name:'Requerido',enable:false})
            }
            else{
                if(!nameRegex.test(state.name)){
                    await setErrors({...errors, name:'Only letters',enable:false})
                }else{
                    await setErrors({...errors, name:'',enable:true})
                }
            }
            break;
        case 'duration':
            if(state.duration.trim()===''){
                await setErrors({...errors, duration:'Required',enable:false})
            }else{
                if(!regexDuration.test(state.duration)){
                    await setErrors({...errors, duration:'Wrong value',enable:false})
                }
                else{
                    await setErrors({...errors, duration:'',enable:true})
                }
            }
            break;    
        case 'season':
            if(!arraySeason.includes(state.season) || state.season ===''){
                await setErrors({...errors, season:'Choose an option',enable:false})
            }
            else{
                await setErrors({...errors, season:'',enable:true})
            }
            break;
        case 'countriesId':
            if(state.countriesId.length<=0){
                await setErrors({...errors, countriesId:'Choose at least one country',enable:false})
            }
            else{
                await setErrors({...errors, countriesId:'',enable:true})
            }
            break;
        default:

            break;
    }
  }
 
const handleInputChange = (e) => {
    const value  = e.target.value;
    const property  = e.target.name;
    console.log(property, value);
    
        setActivityData({ ...activityData, [property]: value });
        validate({...activityData,[property]:value},property)
        setValueDifficulty(difficultyChange(e))

}

const handleAddCountry=(e)=>{
    const {name, value}= e.target
    console.log(name, value)
    if(!activityData.countriesId.includes(value)){

        validate({...activityData, countriesId:[...activityData.countriesId,value]})
        setActivityData({...activityData, countriesId: [...activityData.countriesId, value]})
    }

}

const handleRemoveCountry=(e)=>{
    const value= e.target.value

    validate({ 
        ...activityData,
        countriesId: activityData.countriesId.filter(country=>country !=value)})
    
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
      <h2>Create activity</h2>
      <form onSubmit={handleSubmit}>   
        <div className={style.containerForm}>
            <div className={style.containerName}>

                <label htmlFor="activityName" className={style.labelName}>Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={activityData.name}
                    className={style.inputName}
                    onChange={handleInputChange}
                    required
                />
                {errors.name && <span>{errors.name}</span>}
            </div>

            <div className={style.containerDifficulty}>

                <label htmlFor="difficulty" className={style.labelDifficulty}>Difficulty</label>

                <input type='range' min='1' max='5' name='difficulty' value={activityData.difficulty} className={style.inputName} onChange={handleInputChange}></input>

                <label htmlFor="valueDifficulty" className={style.labelValueDifficulty}>{valueDifficulty}</label>
                
            </div>


            <div className={style.containerDuration}>

                    <label htmlFor="activityDuration" className={style.labelDuration}>Duration</label>
                    <input
                        type="text"
                        id="duration"
                        name="duration"
                        value={activityData.duration}
                        className={style.inputDuration}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor='hs' className={style.labelHs}>hs</label>
                    {errors.duration  && <span>{errors.duration}</span>}
            </div>

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
                {errors.season && <span>{errors.season}</span>}
            </div>

            <div className={style.containerCountry}>
                <div className={style.containerList}>

                    <label htmlFor="activityCountries" className={style.labelName}>Country</label>
                    <select onChange={handleAddCountry} name='countriesId' className={style.listSelect}>
                        <option disabled selected value> Select a country </option>
                        {
                            countries.map((country)=>{return <option key={country.id} value={country.id}>{country.name}</option>})
                        }
                    </select>
                    {errors.countriesId && <span>{errors.countriesId}</span>}
                </div>
                
                    <div className={style.countrySelect}>
                        {
                            activityData.countriesId.length>0 && activityData.countriesId.map((country,index)=>{return <button className={style.btnRemove} value={country} key={index} onClick={handleRemoveCountry}>{(countries.find(countries=>countries.id===country)).name}    x</button>})
                        }
                    </div>

            </div>

        </div>
            <button type="submit" disabled={errors.enable===true} className={style.createButton}>
                 Submit
            </button>
      </form>
    </div>
    )
}


export default Form;