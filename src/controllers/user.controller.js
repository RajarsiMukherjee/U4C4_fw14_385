const express = require("express");

const {body,validationResult} = require("express-validatior")

const router = express.Router()

const User = require("../models/user.model")

router.post("",
               body("firstName").isString().isLength({min:3, max:30}),
               body("lastName").isString().isString({min:3, max:30}),
               body("age").isNumeric({min:0, max:150}),
               async(req,res)=>{
                   try {
                       const user = await User.create(req.body)
                       return res.status(202).send(user)
                   }catch(e){
                       return res.status(505).send({Error: e.message})
                   }
               
})

router.get("",async(req,res)=>{
    try {
        const user = await User.find().lean().exec();
        return res.status(202).send(user)
    }catch(e){
        
    }
})