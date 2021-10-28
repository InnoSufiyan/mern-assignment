const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors')
const mongoose = require('mongoose')

const URL = "mongodb+srv://sufiyan:sufiyanahmed@cluster0.gn26n.mongodb.net/mernassignment?retryWrites=true&w=majority"

mongoose.connect(URL).then(()=>{
    console.log("connected to mongoose")
}).catch((err)=> {
    console.log(err)
})



app.use(cors())

app.use()



app.listen(port, () => {
      console.log(`port running at ${port}`)
})