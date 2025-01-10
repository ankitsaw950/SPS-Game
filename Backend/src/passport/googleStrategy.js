import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { loginWithGoogle } from '../controllers/auth.controllers.js';

const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
  },
  async (accessToken, refreshToken, profile, done) => {
    
    try {
      loginWithGoogle(profile,done);
    } catch (error) {
      return done(error, null);
    }
  }
);

export default googleStrategy;
