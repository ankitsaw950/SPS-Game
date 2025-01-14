import { Router } from "express";
import {
  githubCallback,
  googleCallback,
  googleLoginFailed,
  githubLoginFailed
} from "../controllers/auth.controllers.js";
import passport from "../middlewares/passport.middleware.js";
const router = Router();

router
  .route("/login-with-google")
  .get(passport.authenticate("google", { scope: ["profile", "email"] }));

router.route("/login-with-google/callback").get(
  passport.authenticate("google", {
    failureRedirect: "/api/v1/auth/login-with-google/failed",
  }),
  googleCallback
);

router
  .route("/login-with-github")
  .get(passport.authenticate("github", { scope: ["user:email"] }));


router.route("/login-with-github/callback").get(
  passport.authenticate("github", {
    failureRedirect: "/api/v1/auth/login-with-github/failed",
  }),
  githubCallback
);

router.route("/login-with-google/failed").get(googleLoginFailed);
router.route("/login-with-github/failed").get(githubLoginFailed);

export default router;
