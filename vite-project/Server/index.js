const express = require('express');
const app = express();
app.use(express.json());

require('./db/conecction')
const User = require('./models/user');

app.post("/", async(req,res)=>{
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
})

app.listen(4000);