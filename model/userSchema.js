import { Mongoose } from "mongoose";
const crypto = require('crypto')
const userSchema = new Mongoose.Schema({
    fullName : String,
    age : Number,
    email : {
        type : String,
        required : true
    },
    hash : {
        type : String,
        required : true
    },
    salt : {
        type : String,
        required : true
    }
})

userSchema.methods.savePass = function (password) {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
        .toString("hex")
};
userSchema.methods.validPassword = function(password) {
    var hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
        .toString("hex");
        return this.hash === hash;
};


module.exports.userModel = mongoose.model("User", userSchema)