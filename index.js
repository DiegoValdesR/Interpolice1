//COMMONJS
const express  = require('express')
const cors  = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const serverHost = 4100
app.listen(serverHost,()=>{
    console.log(`Server running in: ${serverHost}`);
})