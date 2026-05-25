const express = require("express");
const multer = require("multer");

const {
  topicSummary,
} = require("../controllers/topicController");

const {
  imageDescription,
} = require("../controllers/imageController");

const router = express.Router();

const upload = multer();

router.get("/health", (req, res) => {
  console.log("Health route hit");

  res.json({
    status: "healthy",
  });
});

router.post(
  "/topic-summary",
  topicSummary
);

//this is for testing image description, it will be removed in production
router.post(
  "/image-description",
  upload.single("image"),
  imageDescription
);

module.exports = router;