import { Router }  from "express"

import { 
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    updateAccountDetails, 
    updateImage
}  from "../controllers/user.controller.js"

import { upload } from "../middlewares/multer.middleware.js"

import { verifyJWT } from "../middlewares/auth.middleware.js"



const router = Router();

router.route("/register").post(upload.single("image") , registerUser)

router.route("/login").post(loginUser)


// Secured Routes : Routes that requires user to be logined
// The verify middleware will be used in every routes

router.route("/logout").post(verifyJWT,logoutUser)

router.route("/refresh-token").post(refreshAccessToken)

router.route("/change-password").post(verifyJWT,changeCurrentPassword)

router.route("/update-profile").patch(verifyJWT,updateAccountDetails)

router.route("/update-image").patch(verifyJWT,upload.single("image") ,updateImage)



export default router