const request = require("supertest");

const server = require("./server.js");
const user = {
  username: "JungleVIP",
  password: "iwannabelikeyou"
};
describe("server.js", function() {
  describe("GET /", function() {
    it("should return 200 OK", function() {
      return request(server)
        .get("/")
        .then(response => {
          expect(response.status).toBe(200);
        });
    });
    it("should return JSON", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });

    it('should respond with { api: "up" }', function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body.api).toBe("up");
        });
    });
  });
  describe("POST /api/auth/register", function() {
    it("should return 200 OK", function() {
      return request(server)
        .post("/api/auth/register")
        .send(user)
        .then(response => {
          expect(response.status).toBe(200);
        });
    });
    it("should return JSON", function() {
      return request(server)
        .post("/api/auth/register")
        .send(user)
        .then(res => {
          expect(res.type).toMatch(/text/i);
        });
    });

    it("should respond with some data", function() {
      return request(server)
        .post("/api/auth/register")
        .then(res => {
          expect(res.body).toBeTruthy();
        });
    });
  });
  describe("POST /api/auth/login", function() {
    it("should return 200", function() {
      return request(server)
        .post("/api/auth/login")
        .send(user)
        .then(response => {
          expect(response.status).toBe(200);
        });
    });
    it("should return JSON", function() {
      return request(server)
        .post("/api/auth/login")
        .send(user)
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });

    it("should respond with some data", function() {
      return request(server)
        .post("/api/auth/login")
        .send(user)
        .then(res => {
          expect(res.body).toBeTruthy();
        });
    });
  });
  describe("GET /api/jokes", function() {
    it("should return 400 OK", function() {
      return request(server)
        .get("/api/jokes")
        .then(response => {
          expect(response.status).toBe(400);
        });
    });
    it("should return JSON", function() {
      return request(server)
        .get("/api/jokes")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });

    it("should respond with some kind of data", function() {
      return request(server)
        .get("/api/jokes")
        .then(res => {
          expect(res.body).toBeTruthy();
        });
    });
  });
});
