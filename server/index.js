const http = require("http");
const fs = require("fs");
const path = require("path");

// The tiny local server is only here for previewing the static site.
// Hosting providers can serve the same files directly without Node.
const port = process.env.PORT || 3000;
const root = path.join(__dirname, "..");

// Minimal content-type map so browsers read each file correctly.
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".json": "application/json"
};

const server = http.createServer((req, res) => {
  // Remove query strings, then resolve "/" to the main HTML file.
  const cleanUrl = decodeURIComponent(req.url.split("?")[0]);
  const requested = cleanUrl === "/" ? "/index.html" : cleanUrl;
  const filePath = path.normalize(path.join(root, requested));

  // Keep requests inside the project folder.
  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      // Fallback to index.html so hash-style routes and refreshes still work.
      fs.readFile(path.join(root, "index.html"), (fallbackError, fallback) => {
        if (fallbackError) {
          res.writeHead(404);
          res.end("Not found");
          return;
        }
        res.writeHead(200, { "Content-Type": types[".html"], "Cache-Control": "no-cache" });
        res.end(fallback);
      });
      return;
    }

    // Serve existing files normally.
    const ext = path.extname(filePath);
    res.writeHead(200, {
      "Content-Type": types[ext] || "application/octet-stream",
      "Cache-Control": "no-cache"
    });
    res.end(data);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Turpotic server running on http://127.0.0.1:${port}`);
});
