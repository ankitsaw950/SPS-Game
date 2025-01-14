import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import passport from "../middlewares/passport.middleware.js";
import { User } from "../models/user.model.js";
import { generateAccessAndRefreshTokens } from "./user.controller.js";

const loginWithGoogle = async (userData, cb) => {
  // TODO :find or create user in database also generate token and sent
  try {
    const userDataConverted = JSON.parse(JSON.stringify(userData));
    const data = userDataConverted._json;
    const { name, email, picture, sub } = data;
    const provider = userDataConverted.provider;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      if (!existingUser.oauthProvider || existingUser.oauthId !== sub) {
        existingUser.oauthProvider = provider;
        existingUser.oauthId = sub;
        existingUser.isVerified = true;
        await existingUser.save({ validateBeforeSave: false });
      }

      // console.log(existingUser)

      return cb(null, existingUser);
    } else {
      const newUser = await User.create({
        fullName: name,
        email,
        username: email.split("@")[0],
        image: picture,
        oauthProvider: provider,
        oauthId: sub,
        isVerified: true,
      });

      // console.log(newUser)
      return cb(null, newUser);
    }
  } catch (error) {
    console.error("Error in loginWithGoogle:", error);
    return cb(error);
  }
};
const loginWithGithub = async (userData, cb) => {
  // TODO :find or create user in database also generate token and sent it
  try {
    const user = userData._json;
    const { avatar_url, node_id, name, email } = user;
    const provider = userData.provider;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      if (!existingUser.oauthProvider || existingUser.oauthId !== node_id) {
        existingUser.oauthProvider = provider;
        existingUser.oauthId = node_id;
        existingUser.isVerified = true;
        await existingUser.save({ validateBeforeSave: false });
      }

      return cb(null, existingUser);
    } else {
      const newUser = await User.create({
        fullName: name,
        email,
        username: String(email).split("@")[0],
        image: avatar_url,
        oauthProvider: provider,
        oauthId: node_id,
        isVerified: true,
      });
      return cb(null, newUser);
    }
  } catch (error) {
    console.error("Error in loginWithGithub:", error);
    return cb(error);
  }
};

const googleCallback = asyncHandler(async (req, res, next) => {
  //  get the access token and user data from req.user and set it to cookies and also send user data and token in response

  try {
    if (!req.user) {
      return res.status(401).json(new ApiResponse(401, null, "Unauthorized"));
    }
    const user = req.user;

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user._id
    );

    const options = {
      httpOnly: true,
      secure: true,
    };
    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    req.logout((err) => {
      if (err) {
        console.error("Error logging out the session:", err);
        return res
          .status(500)
          .json(new ApiResponse(500, null, "Internal Server Error"));
      }
      res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
          new ApiResponse(
            200,
            {
              user: loggedInUser,
              accessToken,
              refreshToken,
            },
            "User login successfully"
          )
        );
    });
  } catch (error) {
    console.error("Error in Google Callback:", error);
    res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));
  }
});

const githubCallback = asyncHandler(async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json(new ApiResponse(401, null, "Unauthorized"));
    }
    const user = req.user;

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user._id
    );

    const options = {
      httpOnly: true,
      secure: true,
    };
    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    req.logout((err) => {
      if (err) {
        console.error("Error logging out the session:", err);
        return res
          .status(500)
          .json(new ApiResponse(500, null, "Internal Server Error"));
      }
      res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
          new ApiResponse(
            200,
            {
              user: loggedInUser,
              accessToken,
              refreshToken,
            },
            "User login successfully"
          )
        );
    });
  } catch (error) {
    console.error("Error in Google Callback:", error);
    res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));
  }
});

const googleLoginFailed = (req, res) => {
  // TODO: handle login failed scenario
  res
    .status(400)
    .json(new ApiResponse(400, null, "user authentication failed"));
};

const githubLoginFailed = (req, res) => {
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
  githubLoginFailed,
};
