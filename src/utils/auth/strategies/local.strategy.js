import { Strategy } from "passport-local";
import { compare } from "bcrypt";
import db from "../../../../db/conection.js";
const User = db.users;

const localStrategy = new Strategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false);
      }

      const isMatch = await compare(password, user.password);
      if (!isMatch) {
        return done(null, false);
      }

      delete user.password;

      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

export default localStrategy;
