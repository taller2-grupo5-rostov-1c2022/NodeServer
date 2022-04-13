import supertest from "supertest";
import { app, server } from "../index";

const api = supertest(app);

test("should be unauthorized", async () => {
  await api.get("/api/service").expect(401);
});

test("should be ok", async () => {
  await api
    .get("/api/service")
    .set("api_key", process.env.API_KEY)
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

afterAll(() => {
  server.close();
});
