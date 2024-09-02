// const userModel = require("../model/userModel");
// const cartModel = require("../model/cartModel");
// const bcrypt = require("bcrypt");

// const register= async(req, res)=>{
//     const {name, email, password, confirmpassword} = req.body;

//     //if all the details are not entered
//     if(!name || !email || !password) {
//         res.status(401).json({success: false, message:"Enter every required detial"})
//     } 

//     const isExist= await userModel.findOne({email})
//     const isPasswordSame=false;

//     if(password === confirmpassword){
//         isPasswordSame=true;
//     }else{
//         res.status
//     }

//     if(!isExist || isPasswordSame){
//         const newUser= await userModel.create(req.body);
//         res.status(200).json({success: true, message:"User registered successfully"});
//     }else{
//         res.status(401).json({success: false, message: "cannot register user"});
//         }
//     }

// }