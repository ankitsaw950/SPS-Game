import passport from "passport";
import googleStrategy from "../passport/googleStrategy.js";
import githubStrategy from "../passport/githubStrategy.js";

passport.use(googleStrategy);
passport.use(githubStrategy);

passport.serializeUser((user, done) => {
  if (user) {
    done(null, user); 
  } else {
    done(new Error("No user found"), null);
  }
});

passport.deserializeUser((user, done) => {
  done(null,user)
});

export default passport;
