// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, res, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     const filename = file.originalname.split(".")[0];
//     cb(null, filename + "-" + uniqueSuffix + ".png");
//   },
// });

// exports.upload = multer({ storage: storage });

// gpt
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    try {
      cb(null, "uploads/");
    } catch (error) {
      cb(error);
    }
  },
  filename: function (req, file, cb) {
    try {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const filename = file.originalname.split(".")[0];
      cb(null, filename + "-" + uniqueSuffix + ".png");
    } catch (error) {
      cb(error);
    }
  },
});

exports.upload = multer({ storage: storage });

// // aqib bhai
// const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix);
//   },
// });

// exports.upload = multer({ storage: storage });

// newwwww
// const multer = require("multer");
// const express = require("express");
// const router = express();
// const path = require("path"); // node built-in path package

// // needs "app.use(bodyParser())" middleware to work

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// exports.upload = multer({ storage: storage });
