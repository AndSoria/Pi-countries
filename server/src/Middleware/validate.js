
const validate=(req, res, next)=>{
    const {name, difficulty, duration, season, countriesId}=req.body

   
        const nameRegex = /^[A-Za-z\s]+$/ 
        const regexDuration=/^\d+(\.\d{1,2})?$/
        const arraySeason=['summer','winter', 'spring','autumn']
        const regexDifficulty=/^[1-5]$/
        
        if(name.trim()==='' || !name) return res.status(400).json({error:'Name is empty'})
        if(!nameRegex.test(name)) return res.status(400).json({error:'Name contain characters invalid'})
        
        if(!difficulty) return res.status(400).json({error:'Difficulty is empty'})
        if(!regexDifficulty.test(difficulty) || typeof difficulty !=='number') return res.status(400).json({error:'Incorrect difficulty value'})

        if(!duration) return res.status(400).json({error:'Duration is empty'})
        if(!regexDuration.test(duration) || typeof duration !=='number') return res.status(400).json({error:'Incorrect duration value'})


        if(season.trim()==='' || !season) return res.status(400).json({error:'Season is empty'})
        if(!arraySeason.includes(season) || !nameRegex.test(season)) return res.status(400).json({error:'Season invalid'})
        
        if(countriesId.length<=0 || !countriesId) return res.status(400).json({error:'Country is empty'})
        if(countriesId.length>0 && countriesId.some(country=> typeof country !== 'string' || country.trim()==='')) return res.status(400).json({error:'Some country element is empty or not a string'})

        next();
           
}

module.exports= validate