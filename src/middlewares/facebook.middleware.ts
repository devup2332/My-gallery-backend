import { deserializeUser, serializeUser } from "passport";
import { Strategy } from "passport-facebook";
import { pusher } from "../app";
import { GenerateToken } from "../controllers/generateToken.controller";
import { environments } from "../environments/environments";
import UserModel from "../models/User.model";
import ui from "uniqid";

serializeUser((user, done) => {
  done(null, user);
});

deserializeUser((user, done) => {
  done(null, user as any);
});

const facebookStrategy = new Strategy(
  {
    clientID: environments.FB.FB_ID,
    clientSecret: environments.FB.FB_SECRET,
    callbackURL: "/api/auth/facebook",
    profileFields: ["email", "displayName"],
  },
  async (token, refreshToken, profile, done) => {
    try {
      const { email, name } = profile?._json;
      const user = await UserModel.findOne({
        where: {
          email,
        },
      });
      if (user) {
        console.log("login");
        pusher.trigger("my-gallery", "login-facebook", {
          token: GenerateToken(user),
          message: "User Logged",
        });
        return done(null, user);
      }
      console.log("register");
      const newUser = await UserModel.create({
        id: ui(),
        email,
        fullName: name,
        avatar: environments.DEFAULT.PHOTO,
        provider: "facebook",
      });

      pusher.trigger("my-gallery", "register-facebook", {
        token: GenerateToken(newUser),
        message: "User Registered and Logged",
      });

      return done(null, newUser);
    } catch (err) {
      console.log(err.message);
      return done(err, false);
    }
  }
);

export default facebookStrategy;
