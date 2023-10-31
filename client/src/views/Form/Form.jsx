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
        countriesId:''

    })

    const [valueDifficulty, setValueDifficulty]= useState('Very easy')

    useEffect(()=>{
   
      
        dispatch(getCountries())
       
            
      

},[dispatch])

    
    const difficultyChange=(value)=>{
    
            switch (value) {
                
                case 1:
                    return 'Very easy'
                case 2:
                    return 'Easy'
                case 3:
                    return 'Medium'
                case 4:
                    return 'Hard'
                case 5:
                    return 'Very hard'
                default:
                    break;
            }
    
}
  const [errors, setErrors] = useState({
    name:'Required',
    difficulty:'',
    duration:'Required',
    season:'Required',
    countriesId:'Choose at least one country',
    enable:false,
  });

  const validate=async(state, property)=>{

    const nameRegex = /^[A-Za-z\s]+$/ //validate for name
    const regexDuration=/^\d+(\.\d{1,2})?$/

    const arraySeason=['summer','winter', 'spring','autumn']

    switch(property) {
        case 'name':
            if(state.name.trim()==='' ){
                await setErrors({...errors, name:'Required',enable:false})
                console.log(errors);
            }
            else{
                if(!nameRegex.test(state.name)){
                    await setErrors({...errors, name:'Only letters',enable:false})
                }else{
                    await setErrors({...errors, name:'',enable:true})
                    console.log(errors);
                }
            }
            break;
        case 'duration':
            if(state.duration===''){
                await setErrors({...errors, duration:'Required',enable:false})
                console.log(errors);
            }else{
                if(!regexDuration.test(state.duration)){
                    await setErrors({...errors, duration:'Wrong value',enable:false})
                    console.log(errors);
                }
                else{
                    await setErrors({...errors, duration:'',enable:true})
                    console.log(errors);
                }
            }
            break;    
        case 'season':
            if(!arraySeason.includes(state.season) || state.season ===''){
                await setErrors({...errors, season:'Choose an option',enable:false})
                console.log(errors);
            }
            else{
                await setErrors({...errors, season:'',enable:true})
                console.log(errors);
            }
            break;
        case 'countriesId':
            console.log(state.countriesId.length);
            if(state.countriesId.length===0){
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
 
const handleInputChange = async(e) => {
    const value  = e.target.value;
    const property  = e.target.name;
    console.log(property, value);

    if(property === 'difficulty'){

        setValueDifficulty(difficultyChange(Number(value)))
        setActivityData({ ...activityData, [property]: Number(value) });
        validate({...activityData,[property]:Number(value)},property)
    }
    else{
        if(property=== 'duration'){
            setActivityData({ ...activityData, [property]: Number(value) });
         validate({...activityData,[property]:Number(value)}, property)
         }
        
        else{

            setActivityData({ ...activityData, [property]: value });
            validate({...activityData,[property]:value},property)
        }
    }
}
    


const handleAddCountry=async(e)=>{
    const {name, value}= e.target
    console.log(name, value)
    if(!activityData.countriesId.includes(value)){

        await validate({...activityData, countriesId:[...activityData.countriesId,value]},'countriesId')
        await setActivityData({...activityData, countriesId: [...activityData.countriesId, value]})
    }

}

const handleRemoveCountry=async(e)=>{
    const value= e.target.value

    await  validate({ 
         ...activityData,
         countriesId: activityData.countriesId.filter(country=>country !=value)},'countriesId')
   await setActivityData({
        ...activityData,
        countriesId: activityData.countriesId.filter(country=>country !=value)
    })
    
}

const handleSubmit=(e)=>{
    e.preventDefault()
    
   dispatch(createActivity(activityData))

   setActivityData({ name:'',
        difficulty:1,
        duration:'',
        season:'',
        countriesId:''})
}


console.log(activityData)
       return (
        
    <div className={style.container}>
      <h2>Create activity</h2>
      <form onSubmit={handleSubmit}>   
        <div className={style.containerForm}>
            <div className={style.containerName}>

                <label htmlFor="name" className={style.labelName}>Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={activityData.name}
                    className={style.inputName}
                    onChange={handleInputChange}
                    
                />
                {errors.name && <span>{errors.name}</span>}
            </div>

            <div className={style.containerDifficulty}>

                <label htmlFor="difficulty" className={style.labelDifficulty}>Difficulty</label>

                <input type='range' min='1' max='5' name='difficulty' value={activityData.difficulty} className={style.inputName} onChange={handleInputChange}></input>

                <label htmlFor="difficulty" className={style.labelValueDifficulty}>{valueDifficulty}</label>
                
            </div>


            <div className={style.containerDuration}>

                    <label htmlFor="duration" className={style.labelDuration}>Duration</label>
                    <input
                        type="text"
                        id="duration"
                        name="duration"
                        value={activityData.duration}
                        className={style.inputDuration}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor='duration' className={style.labelHs}>hs</label>

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

                    <label htmlFor="countriesId" className={style.labelName}>Country</label>
                    <select value='' onChange={handleAddCountry} name='countriesId' className={style.listSelect}>
                        <option value=''> Select a country </option>
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
            <button type="submit" disabled={!errors.enable} className={style.createButton}>
                 Submit
            </button>
      </form>
    </div>
    )
}


export default Form;