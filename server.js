const mongoose=require("mongoose");
const {MongoClient}= require("mongodb");
const uri ="mongodb+srv://Vaishu-mtalkz:Vaishu123@cluster0.33yrva5.mongodb.net/CurrencyConverterDB?retryWrites=true&w=majority";
const fastify=require('fastify')({logger:true})
fastify.register(require('./router/routes'))
const client =new MongoClient(uri);



async function connect(){
    try{
        mongoose.set("strictQuery",false)
        mongoose.connect(uri,{useNewUrlParser : true})
        console.log("connected to mongodb");
        
    }catch(error){
        console.error(error);
    }
}
connect();

// Declare a route

fastify.get('/', async (request, reply) => {
    reply.type('application/json').code(200)
    return { hello: 'world' }
})


  // Run the server!
fastify.listen({ port: 3000 }, (err, address) => {
    if (err) throw err
    // Server is now listening on ${address}
  })