
/* eslint-disable guard-for-in */

// import * as mongoose from "../../node_modules/mongoose/"
const mongoose=require('mongoose');
const connect=async()=>{
	console.log("in mongoose")
// let url="mongodb+srv://sneha:2yVtWMufLGGjH77p@ptt-rhyw7.gcp.mongodb.net/test?retryWrites=true&w=majority"
// let url="mongodb+srv://admin:ptt1234567@cluster0.ydehc.mongodb.net/PTT?retryWrites=true&w=majority"
let url="mongodb+srv://snehapriydarshan9@gmail.com:ycaps9999@makersmarketspace.mceicji.mongodb.net/?retryWrites=true&w=majority&appName=MakersMarketSpace"
// let url='mongodb://127.0.0.1/ptt_db'
await mongoose.connect(url,{useNewUrlParser: true});
return true
}
var db=mongoose.connection;
db.on('connected',function(){
	console.log("mongoose connection done")
})
function get(){
	const val=connect();
	console.log("val",val)
	return mongoose;
};

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://sneha:<password>@ptt-rhyw7.gcp.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
module.exports.get = get;
