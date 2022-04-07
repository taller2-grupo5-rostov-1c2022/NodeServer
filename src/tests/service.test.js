import supertest from "supertest";
import { app, server } from "../index";

const api = supertest(app);

test("should not be implemented", async () => {
  await api
    .get("/api/service")
    .expect(500)
    .expect("Content-Type", /application\/json/);
});

afterAll(() => {
  server.close();
});
