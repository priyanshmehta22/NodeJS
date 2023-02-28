const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  //   console.log(res);
  // console.log(req.url, req.method, req.headers);
  //   process.exit();
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsebody = Buffer.concat(body).toString();
      const message = parsebody.split("=")[1];
      console.log(message);
      fs.writeFile("message1.txt", message, (err) => {
        console.error(err.message);
        res.statuscode = 302; // redirect to
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  //sending response
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body>");
  res.write("<h1>Hello from my Node.js Server!</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
