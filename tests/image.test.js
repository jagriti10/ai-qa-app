jest.setTimeout(30000);
const request = require("supertest");
const path = require("path");

const app = require("../src/app");

describe("Image Description API", () => {

  test("POST /image-description should reject missing image", async () => {

    const response = await request(app)
      .post("/image-description");

    expect(response.statusCode).toBe(400);
  });

  test("POST /image-description should analyze image", async () => {

    const imagePath = path.join(
      __dirname,
      "test.jpg"
    );

    const response = await request(app)
      .post("/image-description")
      .attach("image", imagePath);

    expect(response.statusCode).toBe(200);

    expect(response.body.result)
      .toBeTruthy();

    expect(response.body.result.length)
      .toBeGreaterThan(20);
  });
});