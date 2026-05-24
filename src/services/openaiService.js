const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateTopicSummary(topic) {
  

  const response =
    await client.responses.create({
      model: "gpt-4.1-mini",
      input: `Explain the topic: ${topic}`,
    });

  

  return response.output_text;
}

async function describeImage(
  base64Image,
  mimeType
) {
  

  const response =
    await client.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text:
                "Describe this image in detail and provide a concise summary.",
            },
            {
              type: "input_image",
              image_url: `data:${mimeType};base64,${base64Image}`,
            },
          ],
        },
      ],
    });

  

  return response.output_text;
}

module.exports = {
  generateTopicSummary,
  describeImage,
};