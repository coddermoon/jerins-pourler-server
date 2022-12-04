const express = require('express');
const cors = require('cors');
const port = process.env.PORT ||5000
const app = express();
app.use(express.json())
app.use(cors());

require('dotenv').config()

app.get('/',(req,res)=>{
    res.send('server is running at http://localhost:5000')
})

app.listen(port,()=>console.log('listening to port '+port))
