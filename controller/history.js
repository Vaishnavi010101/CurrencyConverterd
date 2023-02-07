
const axiosUser = require('../controller/axios')
const User = require('../model/schema')
const moment =require('moment')

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



const dateSame = async(req,res) =>{
    try{
    
        //const {date}=req.body
        const phone=req.params.phone
        const y= await User.findOne({phone:phone})
const var1=y.currency.filter((item)=>{
    return moment(item.CreatedAt).format("DD-MM-YYYY")==moment(req.body.date).format("DD-MM-YYYY")
})
res.send(var1)

    }catch(err){
        console.log(err)
            }}
    
            



const dateAfter = async(req,res) =>{
    try{
    
        //const {date}=req.body
        const phone=req.params.phone
        const y= await User.findOne({phone:phone})
const var1=y.currency.filter((item)=>{
    return moment(item.CreatedAt).format("DD-MM-YYYY")>moment(req.body.date).format("DD-MM-YYYY")
})
res.send(var1)

    }catch(err){
        console.log(err)
            }}
                      
                    
                   



const dateBefore = async(req,res) =>{
try{
    
            //const {date}=req.body
            const phone=req.params.phone
            const y= await User.findOne({phone:phone})
    const var1=y.currency.filter((item)=>{
        return moment(item.CreatedAt).format("DD-MM-YYYY")<moment(req.body.date).format("DD-MM-YYYY")
    })
    res.send(var1)
    
        }catch(err){
            console.log(err)
                }}
                          
                               
 const  favouriteUser= async(req,res) =>{
   
        try{
            
                    //const {date}=req.body
                    const phone=req.params.phone
                    const y= await User.findOne({phone:phone})
            

            const var2= y.currency.filter((item)=>{
                return item.favourite
            })
            res.send(var2)
            }
            //res.send(var2)
            
              //  }
                catch(err){
                    console.log(err)
                        }  }                   




 module.exports={historyUser,dateBefore,dateAfter,dateSame,favouriteUser}
