// aca levanto el servidor
const app = require('./server'); // hago esto para modularizar y no tener todo en el mismo archivo

app.listen(3001, () =>{
    console.log('Server on port 3001')
})