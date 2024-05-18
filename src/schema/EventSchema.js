// import * as  db from './DB.js'
const mongoose=require('mongoose');
const db=require('./DB')
const EVENT_MODEL='Events'
const dbConnection=db.get()
const Schema = dbConnection.Schema;
const Types = Schema.Types;
const EventSchema=new dbConnection.Schema({
    id:Types.Number,
    name:Types.String,
    notes:Types.String,
    date:Types.String,
    client:{},
    time:Types.String
    
})


EventSchema.statics.createEvent=async function(event){
    try{
        console.log("createEvent schema",event)
        const eventResponse=await this.model(EVENT_MODEL).create(event)
        console.log("eventResponse",eventResponse)
        return eventResponse
    }
    catch(error){
        console.log(error)
    }
   
}
EventSchema.statics.getEvents=async function(){
    const events=await this.model(EVENT_MODEL).find({})
    return events
}
EventSchema.statics.deleteEvent=async function(eventObject){
    console.log("event in delete",eventObject)
    const response=await this.model(EVENT_MODEL).deleteOne({_id:eventObject._id})
    return response
}
module.exports.dbConnectionFUNCTIN=dbConnection.model(EVENT_MODEL,EventSchema)
var Event = mongoose.model(EVENT_MODEL,EventSchema);
module.exports = Event;
