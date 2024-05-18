const express=require('express')
var http = require('http');
const routes=express()
const multer = require('multer');
const port=process.env.PORT||7000
const bodyParser=require('body-parser')
const cors=require('cors')
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({extended: false}));
routes.use(cors());
const User=require('./src/handlers/UserHandler.js')
const Product=require("./src/handlers/ProductsHandler.js")
// routes.post('/users',(req,res)=>UserHandler.createUser(req,res))
// routes.get('/users',(req,res)=>UserHandler.getUsers(req,res))
const upload = multer();
routes.post('/upload', upload.single('photo'), (req, res) => {
    const file = req.file; // Access the uploaded file
    const photoData = req.body.photo; // Access the FormData field 'photo'
    if (!file) {
      return res.status(400).send('No file uploaded.');
    }
    res.send('File uploaded successfully.');
  });
  
routes.listen(port,()=>{
    console.log("served started at the port")
})
routes.post('/photo',(req,res)=>UserHandler.uploadFile(req,res))
routes.post('/products',(req,res)=>{
 Product.saveProducts(req,res)
})

routes.post('/users',(req,res)=>{
User.createUser(req,res)
})

routes.post('/signIn',(req,res)=>{
  User.signIn(req,res)
})
routes.post('/makers',(req,res)=>{
  User.saveMakers(req,res)
})

routes.get('/products/:email',(req,res)=>Product.getAllProducts(req,res))

// routes.get('/events',(req,res)=>EventHandler.getEvents(req,res))
// routes.put('/events',(req,res)=>EventHandler.deleteEvents(req,res))
// routes.get('/clients/former',(req,res)=>ClientHandler.getFormerClients(req,res))
// routes.post('/sessions',(req,res)=>SessionHandler.createSession(req,res)),
// routes.post('/trainers',(req,res)=>TrainerHandler.createTrainer(req,res))
// routes.get('/trainers/emailId/:emailId',(req,res)=>TrainerHandler.ifTrainerAlreadyExists(req,res))




