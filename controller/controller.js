const mongoose=require("mongoose")
const User=require("../model/schema.js")

 
////////////////User CRUD//////////////////
const getUser= async (req, reply) => {
    try {
      const res=await User.find()
      reply.send(res)
    } catch (err) {
      console.error(err)
    }
}
  
const postUser=async(req,reply)=>{
    try{
        const phone =req.body.phoneno;
        if(!phone){
             reply.send("Please enter a phone number")
        }else{

            try{
                const user=new User(req.body)
                user.save()
            }
            catch(error){
                console.log("test")
                reply.send("jnksd")
            }
           
        }

        
    }catch(error){
        console.log("outer catch")
        reply.send(error)
        
    }
  
}

const updateUser=async (req,reply)=>{
    try {
        const id = req.params.id
        const user = req.body
        const { ...updateData } = user
        const update = await User.findByIdAndUpdate(id, updateData, { new: true })
        reply.send(update)
      } catch (err) {
    console.error(error)
      }
    
}

const deleteUser= async (req,reply)=>{
    const id = req.params.id
    const user = await User.findByIdAndRemove(id)

    reply.send({message:`User ${id} has been deleted`})
}

///////////////////////////////////////////////////
  



module.exports={getUser,postUser, deleteUser,updateUser}