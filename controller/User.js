const User = require('../model/schema')



/////CRUD///////////
const getUser = async(req,res) =>{
    try{
        res.send("success")
    }catch(err){

    }
}
const DeleteUser = async(req,res) =>{
    try{
        await User.findByIdAndRemove(req.params.id)
      return   res.send("Delted")
    }catch(err){

    }
}



const postUser = async(req,res) =>{
    try{
        const {name,phone} =req.body
        console.log(req.body)
        const obj = new User(req.body)

        console.log(obj)
      await obj.save()
      console.log(req.body, "************************************")
        return res.send(req.body)
    }catch(err){
        console.log(err)
    }
}




const updateUser = async(req,res) =>{
    try{
        const {name,phone} =req.body
    
        if(phone.length != 10){
            return res.send("Please Provide a valid no.")
        }
        console.log(req.params.id)
        await User.findByIdAndUpdate(req.params.id,{ "name" :name,"phone ":phone})
        return res.send("update")
    }catch(err){
        console.log(err)
    }
}

module.exports = {getUser,postUser,updateUser,DeleteUser} 

// const posUser= async(req,res)=>{
//     try{
//         const phone=req.body;
        
        
        
//         const update = await User.findByIdAndUpdate(id, updateData, { new: true })
//         reply.send(update)
//       } catch (err) {
//     console.error(error)
//       }
//     }
//}

