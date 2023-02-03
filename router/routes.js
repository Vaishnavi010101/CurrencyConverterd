const {  deleteUser}=require('../Controller/controller')
const {getUser,postUser,updateUser,DeleteUser}  =require('../controller/User')
const{axiosUser}=require("../controller/axios")
const mongoose=require('mongoose')
const { default: axios } = require('axios')


function userRoute(fastify,options,done){
    fastify.get('/allUsers',getUser )
    fastify.delete("/deleteUser/:id",DeleteUser)
    fastify.post('/postuser',postUser)
    fastify.put('/updateuser/:id',updateUser)

    
    fastify.post('/:phone/CurrencyConverter', axiosUser)

    
    // fastify.get('/user/:id',async (req,reply)=>{
    //     const id = req.params.id
    //     const user = await User.findById(id)
    //     reply.send(user)
    // })
    // //Post request


    // fastify.post('/addUser',postUserOPts)

    // //Put 
    // fastify.put('/updateUser/:id',updateUserOPts)

    //Delete request
    // fastify.delete('/deleteUser/:id',deleteUserOPts)

    done()
}


module.exports=userRoute