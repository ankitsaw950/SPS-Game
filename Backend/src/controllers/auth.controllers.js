import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import passport from "../middlewares/passport.middleware.js";

const loginWithGoogle = (userData, cb) => {
  // TODO :find or create user in database also generate token and sent

  cb(null, userData);
};
const loginWithGithub = (userData, cb) => {
  // TODO :find or create user in database also generate token and sent it
};

const googleCallback = (req, res, next) => {
  //  get the access token and user data from req.user and set it to cookies and also send user data and token in response
  
  try {
    const user = req.user;
    res.status(200).json(new ApiResponse(200, { user }));
  } catch (error) {
    console.error("Error in Google Callback:", error);
        res
          .status(500)
          .json(new ApiResponse(500, null, "Internal Server Error"));
      }
  }



const githubCallback = (req, res, next) => {
  //TODO
};

const googleLoginFailed = (req, res) => {
  // TODO: handle login failed scenario
  res
    .status(400)
    .json(new ApiResponse(400, null, "user authentication failed"));
};
export {
  loginWithGithub,
  loginWithGoogle,
  githubCallback,
  googleCallback,
  googleLoginFailed,
};
