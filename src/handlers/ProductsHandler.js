const DB=require("../DB")
const getAllProducts=async(request,response)=>{
    try{
    let products=await DB.getAllProducts(request.params.email)
    if(!products ||products.length==0)
    {
        response.status(400).send("Products not found")
    }
    response.status(200).send(products)
    }
    catch(error)
    {
        response.status(500).send("Internal Server Error")
    }
    }
    



    const saveProducts=async(request,response)=>{
        try{
            let products=await DB.createProducts(request.body)
            if(!products ||products.length==0)
            {
                response.status(400).send("Products not found")
            }
            response.status(200).send(products)
            }
            catch(error)
            {
                response.status(500).send("Internal Server Error")
            }
            }

module.exports.saveProducts=saveProducts
module.exports.getAllProducts=getAllProducts