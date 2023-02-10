// aca levanto el servidor
const app = require('./server'); // hago esto para modularizar y no tener todo en el mismo archivo
const { sequelize } = require('../DB_connection');
const { saveApiData } = require('../controllers/saveApiData');


sequelize.sync({ force: true }).then(async () => {
      console.log('DB conectada');
      // console.log(await saveApiData());
        await saveApiData();
        app.listen(3001, () => {
          console.log('Server on port 3001');
        })
}).catch((error) => {
  console.log(error)
})
