
const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
let uri="mongodb+srv://snehapriyadarshan9:ycaps9999@makersmarketspace.mceicji.mongodb.net/?retryWrites=true&w=majority&appName=MakersMarketSpace"
const client = new MongoClient(uri);
const database=client.db('makersmarketplace')



const createProducts=async(product)=>{
try{
  const products=database.collection('products')
const result = await products.insertOne(product);
return result
}
catch(error)
{
console.log("error",error)
}
}
const createUser=async(user)=>{
  try{    
  const users=database.collection('users')
  const result = await users.insertOne(user);
  return result
  }
  catch(error)
  {
  throw error
  }
  } 

  const createMaker=async(user)=>{
    try{    
    const users=database.collection('makers')
    const result = await users.insertOne(user);
    return result
    }
    catch(error)
    {
    throw error
    }
    } 

    const getAllProducts=async(email)=>{
      try{    
      const makers=database.collection('makers')
      const result = await makers.find({ "email": email }).toArray(); // Added parentheses and await  
      return result
      }
      catch(error)
      {
      throw error
      }
      } 


module.exports.createProducts=createProducts
module.exports.createUser=createUser
module.exports.createMaker=createMaker
module.exports.getAllProducts=getAllProducts
// run().catch(console.dir);