const createSession=async(session)=>{
    try{  
        console.log("in createSession service")   
        const createSession=require('../schema/SessionSchema').createSession(session)
      
        let createdSession = await createSession
       
        console.log("session",createdSession)
        return createdSession
    } catch(error){
        console.log('error', error);
    }
}

module.exports.createSession=createSession
