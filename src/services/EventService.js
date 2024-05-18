const createEvent = async(event) => {
    try{    
        console.log("event",event) 
        let notes=event.notes.split("\n")
        let eventNotes=notes.toString()
        event.notes=eventNotes
        let eventResponse = await require('../schema/EventSchema').createEvent(event)
       
        return eventResponse
    } catch(error){
        console.log('error', error);
    }
}
const getEvents=async()=>{
    try{   
        console.log("in get events")  
        const getEventsFromSchema= require('../schema/EventSchema').getEvents()
        let events = await getEventsFromSchema
        console.log("events",events)
        return events
    } catch(error){
        console.log('error', error);
    }
}
const deleteEvent=async(event)=>{
    try{   
        console.log("in dlete events service")  
        const deleteFromSchema= require('../schema/EventSchema').deleteEvent(event)
        let response = await deleteFromSchema
        console.log("events",response)
        return response
    } catch(error){
        console.log('error', error);
    }
}
module.exports.getEvents=getEvents,
module.exports.createEvent=createEvent,
module.exports.deleteEvent=deleteEvent