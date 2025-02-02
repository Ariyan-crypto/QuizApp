const http = require("http");
const requests = require("requests");

const server = http.createServer((req, res) => {
  // Check for the homepage request (root URL)
  if (req.url === "/") {
    const apiUrl = "https://api.jsonserve.com/Uw5CrX";

    requests(apiUrl)
      .on("data", (chunk) => {
        res.writeHead(200, {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Allow all origins
        });
        res.write(chunk);
      })
      .on("end", () => {
        res.end();
      })
      .on("error", (err) => {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Failed to fetch data", details: err.message }));
      });
  } else {
    // Return 404 if the URL does not match
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(2000,"127.0.0.1", () => {
  console.log(`Server running on http://localhost:2000`);
});