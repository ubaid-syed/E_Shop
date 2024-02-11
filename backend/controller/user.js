const express = require("express");
const path = require("path");
const User = require("../model/user");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const jwtToken = require("../utils/jwtToken");
const { isAuthenticated } = require("../middleware/auth");
const cloudinary = require("cloudinary");

router.post(
  "/create-user",
  catchAsyncErrors(async (req, res, next) => {
    const { name, email, password, file } = req.body;

    // Check if the user with the given email already exists
    const userEmail = await User.findOne({ email });

    if (userEmail) {
      return next(new ErrorHandler("User already exists", 400));
    }

    // Upload avatar to Cloudinary
    const myCloud = await cloudinary.v2.uploader.upload(file, {
      folder: "avatars",
      width: 800,
      crop: "scale",
    });

    // Create user object
    const user = {
      name,
      email,
      password,
      avatar: myCloud.secure_url,
    };

    // Create activation token
    const activationToken = createActivationToken(user);
    const activationUrl = `https://localhost:3000/activation/${activationToken}`;

    try {
      // Send activation email
      await sendMail({
        email: user.email,
        subject: "Activate your account",
        message: `Hello ${user.name}, please click on the link to activate your account: ${activationUrl}`,
      });

      // Respond to the client
      res.status(201).json({
        success: true,
        message: `Please check your email (${user.email}) to activate your account!`,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

/**
 * Create activation token for the user
 * @param {Object} user - User object containing name, email, password, and avatar
 * @returns {string} Activation token
 */
const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};

/**
 * Activate user account using the activation token
 */
router.post(
  "/activation",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { activation_token } = req.body;

      // Verify activation token
      const newUser = jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET
      );

      if (!newUser) {
        return next(new ErrorHandler("Invalid token", 400));
      }

      const { name, email, password, avatar } = newUser;

      // Check if the user already exists
      let user = await User.findOne({ email });

      if (user) {
        return next(new ErrorHandler("User already exists", 400));
      }

      // Create a new user
      user = await User.create({
        name,
        email,
        avatar,
        password,
      });

      // Send token to the client
      sendToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// log out  user
router.get(
  "/logout",
  isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
      res.status(201).json({
        success: true,
        message: "Log out successful!",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);
module.exports = router;
