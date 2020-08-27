const mongoose=require('mongoose')
const Person=require('./model/personmodele')
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI,{ useUnifiedTopology: true,useNewUrlParser: true },()=>console.log('db connected'))
//Create a person having this prototype:

let person=new Person({
    name:'mehrez',
    age:20,
    favoritefood:['hiba']
})
//Create and Save a Record of a Model:
// person.save()
// .then(data=>console.log(data))
// .catch(er=>console.error(er))
//
// Person.create([{name:'ali',age:18,favoritefood:['viande']},{name:'hiba',age:26,favoritefood:['kouskous']}])
// Person.create([{name:'chourouk',age:29,favoritefood:['hargma']},{name:'sophie',age:31,favoritefood:['dawara']}])

Person.find({name:'ali'})
.then(result=>console.log(result))

Person.findOne({favoritefood:'kouskous'})
.then(result=>console.log(result))

Person.findById({_id:"5f4642a8f6a1ab20b8acdf3b"})
.then(result=>console.log(result))
.catch(er=>console.log(er))

 Person.findOne({favoritefood:'kouskous'})
 .then(data=>{data.favoritefood.push('dawara')
console.log(data)})
.catch(er=>console.log(er))

Person.findOneAndUpdate({name:'hiba'},{$set:{age:20}})
.then(result=>console.log(result))
.catch(er=>console.log(er))

Person.findByIdAndRemove({_id:"5f4642a8f6a1ab20b8acdf3b"})
.then(result=>console.log(result))
.catch(er=>console.log(er))

Person.remove({name:'sophie'})
.then(result=>console.log(result))
.catch(er=>console.log(er))

Person.find({favoritefood:'hargma'}).sort({name:1}).limit(2).select({age:true}).exec().then(result=>console.log(result))
