const express = require("express");
const path = require("path");
const server = express();

server.use("/static", express.static(path.resolve(__dirname, "src", "static")));

server.get("/*", (request, response) => {
    response.sendFile(path.resolve(__dirname, "src", "index.html"));
});

server.listen((process.env.PORT || 5050), () => console.log("Server running..."));