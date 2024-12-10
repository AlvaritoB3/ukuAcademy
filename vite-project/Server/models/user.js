const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:String,
    apellido:String,
    rut:String,
    email:String,
    comentario:String
});

module.exports=mongoose.model("user",userSchema);