const mongoose = require( "mongoose")

const UserSchema = new mongoose.Schema({
    first_name : {type:String, required: true,minlength:3,maxlength:30},
    last_name : {type:String,minlength:3,maxlength:30 },
    age : {type:Number, required: true},
    email : {type:String, required: true},
    profile_photo_url:[{type:String, required : true}],

},{
    timestamps:true,
    versionKey:false,
})

UserSchema.pre("save", function(next) {
    if(!this.isModified("password")) {return next()}
    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash
    return next()
})