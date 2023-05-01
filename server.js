const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        let data = fs.readFileSync('index.html', 'utf8');
        res.end(data);
    } else if (req.url == "/about") {
        let data = fs.readFileSync('about.html', 'utf8');
        res.end(data);  
    } else if (req.url == "/contact") {
        let data = fs.readFileSync('contact.html', 'utf8');
        res.end(data);
    } else {
        let data = fs.readFileSync('404.html', 'utf8');
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(data);
    }
});

const port = 5000;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
