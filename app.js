const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// Configuración del motor de plantillas EJS y los layouts de Express
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static(path.join(__dirname,'public')))
// Ruta principal
/*app.get('/', (req, res) => {
    res.send('Dashboard con Node.js');
});*/
//utilizar router

const router = require('./routes/router')
app.use(router.routes)
// Iniciar el servidor
app.listen(4000, () => {
    console.log('Server up and running at http://localhost:4000');
});
