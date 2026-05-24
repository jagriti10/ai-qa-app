const {
  describeImage,
} = require("../services/openaiService");

async function imageDescription(req, res) {
  try {
    console.log("Image controller reached");

    if (!req.file) {
      return res.status(400).json({
        error: "image is required",
      });
    }

    const base64Image =
      req.file.buffer.toString("base64");

    const result =
      await describeImage(
        base64Image,
        req.file.mimetype
      );

    res.json({
      result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Image analysis failed",
    });
  }
}

module.exports = {
  imageDescription,
};