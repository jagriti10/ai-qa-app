jest.setTimeout(30000);
const request = require("supertest");
const app = require("../src/app");

describe("Topic Summary API", () => {

  test("POST /topic-summary should generate AI summary", async () => {

    const start = Date.now();

    const response = await request(app)
      .post("/topic-summary")
      .send({
        topic: "Artificial Intelligence",
      });

    const duration = Date.now() - start;

    expect(response.statusCode).toBe(200);

    expect(response.body.summary)
      .toBeTruthy();

    expect(response.body.summary.length)
      .toBeGreaterThan(20);

    expect(duration)
      .toBeLessThan(30000);
  });

  test("POST /topic-summary should reject empty input", async () => {

    const response = await request(app)
      .post("/topic-summary")
      .send({});

    expect(response.statusCode).toBe(400);
  });
});