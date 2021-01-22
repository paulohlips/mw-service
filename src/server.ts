import express from "express";

const server = express();

server.get("/", (request, response) => response.json({ ok: true }));

server.listen(3000, () => {
  console.log("Server online on :3000");
});
