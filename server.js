const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const HTML_FILE = path.join(__dirname, 'combination-finder.html');

// Pre-load the HTML into memory so we don't read disk on every request
let htmlCache = null;
let cacheTime = 0;

function getHtml(callback) {
  const now = Date.now();
  if (htmlCache && (now - cacheTime < 5000)) {
    return callback(null, htmlCache);
  }
  fs.readFile(HTML_FILE, 'utf8', (err, data) => {
    if (!err) {
      htmlCache = data;
      cacheTime = now;
    }
    callback(err, data);
  });
}

const server = http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);

  // Serve the main page for all routes
  getHtml((err, data) => {
    if (err) {
      console.error('ERROR reading HTML:', err.message);
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('500 Internal Server Error');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});

server.on('error', (err) => {
  console.error('Server error:', err.message);
  process.exit(1);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Combination Finder running on http://0.0.0.0:${PORT}`);
});
