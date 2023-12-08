const mongoose = require("mongoose");
const User = mongoose.model("User");
const passport = require("passport");
const bcrypt = require("bcrypt");

const ctrlUsers = {
  signup: async (req, res) => {
    try {
      const { firstName, lastName, username, password, birthday, gender } =
        req.body;

      const existingUser = await User.findOne({ username });

      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const newUser = new User({
        firstName,
        lastName,
        username,
        password: hashedPassword,
        birthday,
        gender,
      });
      console.log(newUser);
      await newUser.save();

      return res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Error registering user", error: error.message });
    }
  },
  login: (req, res, next) => {
    passport.authenticate("local", async (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        console.log(info);
        return res.status(404).json({ message: "No user found" });
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        // Successful login, return the user or a success message
        return res.status(200).json({ message: "Login successful", user });
      });
    })(req, res, next);
  },
  logout: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Error logging out" });
      }
      return res.status(200).json({ message: "Logged out successfully" });
    });
  },
};

module.exports = ctrlUsers;
