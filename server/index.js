
const server = require("./src/server");
const { conn } = require('./src/db.js');
const loadDb = require("./src/Controllers/loadDatabase/loadDb");
const {Country, Activity} = require ('./src/db');
const loadActivities = require("./src/Controllers/loadDatabase/loadActivities");
const filterContinent = require("./src/Controllers/filterContinent");
const onlyCountriesName = require("./src/Controllers/onlyCountriesName");
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, async() => {
  const count = await Country.count()
  const count2= await Activity.count()
  if(count <= 0 && count2 <=0){
    
    await loadDb()
    await loadActivities()
    
  }
  await filterContinent()
  await onlyCountriesName()
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
