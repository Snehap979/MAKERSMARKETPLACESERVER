
// const createClientsFromSchema=
// const getClientsFromSchema=require('../schema/ClientSchema').getClients()
const createClient = async(client) => {
    try{    
        console.log("client",client) 
        let sessionCount=0
        client.sessionCount=sessionCount   
        let clientResponse = await require('../schema/ClientSchema').createClient(client)
        console.log("clientResponse",clientResponse)
        return clientResponse
    } catch(error){
        console.log('error', error);
    }
}
const getClients=async()=>{
    try{     
        const getClientsFromSchema=require('../schema/ClientSchema').getClients()
        // const getSessionsFromSchema=require('../schema/SessionSchema').getSessionsFromSessionId()
        let clients = await getClientsFromSchema
        // let sessionId=await getSessionsFromSchema
        for(let i=0;i<clients.length;i++)
        {
            //get sessioncount based on the clientId
            const session= await require('../schema/SessionSchema').getSessions(clients[i]._id)
            clients[i].sessionCount=session!=undefined && session.length>0&&session[0].count
            console.log("clients.[i]",clients[i])
        }
        console.log("clients",clients)
        return clients
    } catch(error){
        console.log('error', error);
    }
}
const getFormerClients=async()=>{
    try{
        console.log("getFormerClients service")
        const formerClients= await require('../schema/ClientSchema').getFormerClients()
    return formerClients
    }   
    catch(error)
    {
        console.log("error",error)
    }
}
module.exports.createClient=createClient,
module.exports.getClients=getClients,
module.exports.getFormerClients=getFormerClients