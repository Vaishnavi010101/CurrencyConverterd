const User = require('../model/schema')
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
        const check = await User.findOne({"phone": phone})
        
        console.log(phone.length)

        if(phone.length != 10){
            return res.send("Please Provide a valid no.")
        }
        if(!check){
            const obj = new User({
                name:name,
                phone:phone
            })
        //    await obj.save()
        }else{
            return res.send("User Exist")
        }
        return res.send("post")
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

