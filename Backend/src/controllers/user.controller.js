import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import jwt from  "jsonwebtoken"

// TODO : Register the user
const registerUser = asyncHandler(async (req,res)  => {
    const { fullName , email , username ,password } = req.body;


})


// TODO : Login the user
const loginUser = asyncHandler( async(req,res) => {
    const { email , password ,username } = req.body;


})


// TODO : Logout the user 
const logoutUser = asyncHandler( async(req,res) => {

})

// TODO : Refresh the access token 
const refreshAccessToken = asyncHandler (async (req,res) => {

})

// TODO : Change the current password 
const changeCurrentPassword = asyncHandler( async (req,res) => {
    const {oldPassword, newPassword , confirmNewPassword} = req.body;


})


// TODO : Update the account details
const updateAccountDetails = asyncHandler( async(req,res) => {
    const {fullName , email } = req.body;



})

// TODO : Update the image
const updateImage = asyncHandler( async(req,res) => {

})

export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    updateAccountDetails, 
    updateImage
};