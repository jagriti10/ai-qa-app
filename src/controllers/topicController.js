const {
  generateTopicSummary,
} = require("../services/openaiService");

async function topicSummary(req, res) {
  try {
    console.log("Controller reached");

    const { topic } = req.body;

    console.log(topic);

    if (!topic) {
      return res.status(400).json({
        error: "topic is required",
      });
    }

    const summary =
      await generateTopicSummary(topic);

    res.json({
      topic,
      summary,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Topic generation failed",
    });
  }
}

module.exports = {
  topicSummary,
};