import passport from "passport";
import googleStrategy from "../passport/googleStrategy";
import githubStrategy from "../passport/githubStrategy";

passport.use(googleStrategy)
passport.use(githubStrategy)

passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
})

module.exports = passport;