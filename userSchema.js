const mongoose=require('mongoose');
const userSchema=mongoose.model('userSchema',
    {
        name:{
            type:String,
            
        

        },
        email:{
            type:String,
            
        },
        password:{
            type:String,
            
        }
        
    })

    module.exports=userSchema
