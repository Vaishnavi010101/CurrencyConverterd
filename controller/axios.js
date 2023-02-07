
const User = require('../model/schema')
const { default: axios } = require('axios')
const userRoute = require('../router/routes')
//const User = require('../model/schema')
const moment =require('moment')




const axiosUser= async(req,res) =>{
    try{
        console.log("ifuhg")

    
        const {amount ,from, to} =req.body

        const response = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,{
            headers:{
                "apiKey":"3Cy3R865uTduIL0plTf3ovJTPjZTKhJb"
            }
        })
        //res.send(response.result)
const phone=req.params.phone
const u= await User.findOne({phone:phone})
//const date=new Date().toString()
let m = moment()
const var1=m.format("DD//MM/YYYY")

const obj ={
    from:from,
    amount:amount,
    to:to,
    result:response.data.result,
    CreatedAt:var1
}
u.currency.push(obj);


//u.currency.slice(parameter);


await u.save()
 


// const u = response.data 
//         u.save()
        console.log(response.data.result)
         res.send(response.data.result)
         return 
        
    }catch(err){
        console.log(err)
    }   
}
module.exports={axiosUser}


// router.post('/', async (req, res) => {
//     const response = await axios.post(apiPath, req.body);
//     res.json(response.data)})