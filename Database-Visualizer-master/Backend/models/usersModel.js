const{Schema , model}= require('../connection')
 
const mySchema=new Schema({
 username:String,
 email:String,
 password:String,
})
 module.exports=model('user',mySchema)