
const axiosUser = require('../controller/axios')
const User = require('../model/schema')

const historyUser = async(req,res) =>{
    try{
        const {parameter} =req.body;
        const phone=req.params.phone
        const y= await User.findOne({phone:phone})
        
        const newarr=    y.currency.slice(`-${parameter}`)
        console.log(newarr)
        res.send(newarr)
    }catch(err){
console.log(err)
    }
}
 module.exports={historyUser}
