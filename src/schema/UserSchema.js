// import * as  db from './DB.js'
const mongoose=require('mongoose');
const db=require('./DB')
const USER_MODEL='Users'
const dbConnection=db.get()
const Schema = dbConnection.Schema;
const Types = Schema.Types;
const UserSchema=new dbConnection.Schema({
   
    email:Types.String,
    userId:Types.String,
    refreshToken:Types.String
  

})
UserSchema.statics.createUser=async function(user){
    console.log("in create",user)
   
    const userResponse=await this.model(USER_MODEL).create(user)
    console.log("userResponse",userResponse)
    return userResponse
}
UserSchema.statics.ifUserAlreadyExists=async function(emailId)
{
    console.log("in create",emailId)
   
    const userResponse=await this.model(USER_MODEL).findOne({email:"giana@gmail.com"})
    console.log("userResponse",userResponse)
    return userResponse
}

module.exports.dbConnectionFUNCTIN=dbConnection.model(USER_MODEL,UserSchema)
var User = mongoose.model(USER_MODEL
    ,UserSchema);
module.exports = User;



