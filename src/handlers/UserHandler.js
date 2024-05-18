const DB=require("../DB")
const Authenticate=require("../Authenticate")
const createUser=async(request,response)=>
{
  try{
    console.log("request.body",request.body)
    const {phoneNumber,email,password}=request.body
    let result=await Authenticate.signUp(phoneNumber,password,email)
    let userDBresponse=null
    if(result)
    {
      let user={}
      user.username=username
      user.email=email
      userDBresponse=await DB.createUser(user)
    }
    if(!result || !userDBresponse)
    {
      response.status(400).send("User could not be added")
    }
    response.status(200).send("User Successfylly added")
  }
  catch(error)
  {
    response.status(500).send("Internal Server Error")
  }
}

const signIn=async(request,response)=>{
  try{
    let result=await Authenticate.signIn
    if(!result)
    {
      response.status(400).send("No user")
    }
    response.status(200).send("User Successfylly added")
  }
  catch(error)
  {
    response.status(500).send("Internal Server Error")
  }
}

const saveMakers=async(request,response)=>{
  try{
    let result= await DB.createMaker(request.body)
    if(!result)
    {
      response.status(400).send("No maker")
    }
    response.status(200).send("Maker data added")
  }
  catch(error)
  {
    response.status(500).send("Internal Server Error")
  }
}
module.exports.createUser=createUser
module.exports.signIn=signIn
module.exports.saveMakers=saveMakers