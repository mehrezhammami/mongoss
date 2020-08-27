const mongoose = require ('mongoose');
let personschema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    favoritefood:[{type:String}]

})
module.exports=mongoose.model('person',personschema)