
const server = require("./src/server");
const { conn } = require('./src/db.js');
const loadDb = require("./src/Controllers/loadDatabase/loadDb");
const {Country} = require ('./src/db')
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, async() => {
  const count = await Country.count()
  if(count <= 0){
    
    await loadDb()

  }
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
