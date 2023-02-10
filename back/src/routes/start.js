// aca levanto el servidor
const app = require('./server'); // hago esto para modularizar y no tener todo en el mismo archivo
const { sequelize } = require('../DB_connection');
const { saveApiData } = require('../controllers/saveApiData');


sequelize.sync({ force: true }).then( () => {

         saveApiData();
         console.log('DB conectada');


        app.listen(3001, () => {
          console.log('Server on port 3001')
        })

})
