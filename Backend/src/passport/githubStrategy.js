import { Strategy as GitHubStrategy } from "passport-github2";
import { loginWithGithub } from "../controllers/auth.controllers.js";

const githubStrategy = new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL,
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      loginWithGithub(profile, done);
    } catch (error) {
      return done(error, null);
    }
  }
);

export default githubStrategy;
