import style from './CardActivity.module.css'

const CardActivity=(prop)=>{
    console.log(prop);

    const {id, name,duration, difficulty,season} = prop

    const valueDifficulty=(difficulty)=>{
        switch(difficulty){
            case 1:
                return "Very easy"
            case 2:
                return "Easy"
            case 3:
                return "Medium"
            case 4:
                return "Hard"
            case 5:
                return "Very hard"
            default:
                return "No difficulty"
        }
    
    }
    return(

        <div key={id} className={style.cardActivity}>
            <div className={style.labelData}>
                        <label htmlFor="name">Name</label>
                        <h5>{name}</h5>
            </div>
            <div className={style.labelData}>
                        <label htmlFor="duration">Duration</label>
                        <h5>{duration} hs</h5>
                        
            </div>
            <div className={style.labelData}>
                        <label htmlFor="name">Difficulty</label>
                        <h5>{valueDifficulty(difficulty)}</h5>
            </div>
            <div className={style.labelData}>
                        <label htmlFor="name">Season</label>
                        <h5>{season}</h5>
            </div>
        </div>
    )
}

export default CardActivity