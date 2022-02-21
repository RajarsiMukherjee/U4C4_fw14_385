const express = require("express");

const connect =  require("./configs/db");

const app = express()

app.use(express.json())

const {register ,login} = require("./controllers/user.controller")

const userController = require("./controllers/user.controller")

const postController = require("./controllers/post.controller")

const commentController = require("./controllers/comment.controller")

app.post("/user/register", upload.single("profile_photo_url"), register)
app.post("/user/login" , login)

app.use("/user", userController)

app.use("/post", postController)

app.use("/commnet", commentController)

const upload = require("./middlewares/upload")

 
 
app.listen(2223, async () => {

    try {
        await connect()
        console.log("Listening on PORT 2223")
    }catch(e){
        console.log(e.message)
    }
 })