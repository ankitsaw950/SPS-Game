import { asyncHandler } from "../utils/asyncHandler";

const loginWithGoogle = (userData, cb) => {
  // TODO :find or create user in database also generate token and sent it
};
const loginWithGithub = (userData, cb) => {
  // TODO :find or create user in database also generate token and sent it
};

const googleCallback = (req, res, next) => {
  //TODO:if login failed redirect to /failed route and send error in response get the access token and user data from req.user and set it to cookies and also send user data and token in response 
};

const githubCallback = (req, res, next) => {
  //TODO
};
export { loginWithGithub, loginWithGoogle, githubCallback, googleCallback };
