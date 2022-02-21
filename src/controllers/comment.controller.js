const express = require("express")

const router = express.Router()

const comment = required("../models/comment.model")

router.post("/", async(req,res) => {
    try {
        const comment = await comment.create(req.body)
        return res.status(201).send(shows)
    }catch(e){
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.get("/",async(req,res) => {
    try {
        const comment = await comment.find({comment : req.query.comment})

        return res.status(201).json({comment})
    }catch(e){
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.get("/nearest", async(req,res) => {
    try {
        const comment = await comment.find({post : req.query.post})

        return res.status(201).json({shows})
    }catch(e){
        return res.status(500).json({status: "Failed", message: e.message})
    }
})