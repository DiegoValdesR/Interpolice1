//administracion de la conexion BD usando CALLBACKS

const mysql = require('mysql2')

const cnx = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'interpolice',
});


cnx.query("SELECT * FROM ciudadanos",(err,results)=>{
    console.log(results);
})

cnx.connect((error)=>{
    if (error) {
        console.log(`Error en la conexion de la base de datos: \n ${error}`)
    } else {
        console.log("Conexion exitosa a la base de datos!")        
    }
})

module.exports = cnx