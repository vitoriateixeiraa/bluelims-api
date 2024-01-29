import express, { response } from "express";

const server = express();


server.get("/", (request, response) => {
    response.send("Hello world")
})

server.listen(3333, () => {
  console.log("Server is running!");
});
