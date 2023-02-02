
const User = require('../model/schema')
const { default: axios } = require('axios')




const axiosUser= async(req,res) =>{
    try{
        console.log("ifuhg")

    
        const {amount ,from, to} =req.body

        const response = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,{
            headers:{
                "apiKey":"3Cy3R865uTduIL0plTf3ovJTPjZTKhJb"
            }
        })
        console.log(response.data)
         res.send(response.data)
         return 
        
    }catch(err){
        console.log(err)
    }   
}
module.exports={axiosUser}


// router.post('/', async (req, res) => {
//     const response = await axios.post(apiPath, req.body);
//     res.json(response.data)})