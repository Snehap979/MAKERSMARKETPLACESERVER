// import * as  db from './DB.js'
const mongoose=require('mongoose');
const db=require('./DB')
const CLIENT_MODEL='Clients'
const dbConnection=db.get()
const Schema = dbConnection.Schema;
const Types = Schema.Types;
const ClientSchema=new dbConnection.Schema({
    id:Types.Number,
    address:{},
    sessionsSubscribed:Types.Number,
    status:Types.String,
    phoneNumber:Types.String,
    firstName:Types.String,
    lastName:Types.String,
    modeOfPayment:Types.String,
})
ClientSchema.statics.createClient=async function(client){ 
    const clientResponse=await this.model(CLIENT_MODEL).create(client)
    return clientResponse
}
ClientSchema.statics.getClients=async function(){
    const clientList=await this.model(CLIENT_MODEL).find({status:'active'})
    return clientList
}
ClientSchema.statics.getFormerClients=async function(){
    const formerClientsList=await this.model(CLIENT_MODEL).find({status:'former'})
    return formerClientsList
}
// export default dbConnection.model(CLIENT_MODEL,ClientSchema)

// module.exports.createClient=createClient,
//  module.exports.ClientSchema={
//      getClients},
module.exports.dbConnectionFUNCTIN=dbConnection.model(CLIENT_MODEL,ClientSchema)
var Client = mongoose.model(CLIENT_MODEL,ClientSchema);
module.exports = Client;
