import passport from "passport";
import googleStrategy from "../passport/googleStrategy.js";
import githubStrategy from "../passport/githubStrategy.js";

passport.use(googleStrategy);
passport.use(githubStrategy);

passport.serializeUser((userData, done) => {
  if (userData) {
    
    done(null, userData); 
  } else {
    done(new Error("No user found"), null);
  }
});

passport.deserializeUser((user, done) => {
  done(null,user)
});

export default passport;
