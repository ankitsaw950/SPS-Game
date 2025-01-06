import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
        type: String,
        required: [true,"Username is required"],
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
        minlength : [4,"Username must be atleast 3 characters long."],
        maxlength : [15, "Username must be atmost 15 characters long."],


        // Here we can add more validation regarding some reserved username like  -> admin , root 

        // We can also add the validation on username value , that what the username should contain either alphabets ,numbers , special symbols , or combination of them 
    

    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,

    },
    fullname: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required:true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    refreshToken: {
        type: String,
    },
    accessToken: {
        type: String,
    },
  },
  {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' fields
  }
);


// here the .pre is a middleware that work on the documents instance of the model before saving to the main the database 
userSchema.pre("save" , async function(next) {
    if(!this.isModified("password")) 
        return next();

    this.password = await bcrypt.hash(this.password ,10)
    next()

})


userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password,this.password)
}


userSchema.methods.generateAccessToken = function () {
    return jwt.sign({

        _id : this._id,
        email:this.email,
        username : this.username
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

userSchema.methods.generateRefreshToken = function() {
    return jwt.sign({
        _id : this._id,
        email : this.email,
        username : this.username
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)
}

export const User = mongoose.model("User" , userSchema)