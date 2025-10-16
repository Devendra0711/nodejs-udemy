//todo --> HTTP server Task

//* Description

//? 1. GET: `/`: Send simple hello from server message.
//? 2. GET: `/contact-us`: Send your email and contact number to the user.
//? 3. POST: `/tweet`: Do a fake DB operation and send the acknowledge that it is done.
//? 4. GET: `/tweet`: Send all the tweets from fake DB to the user

// Also, you need to log the incoming requests with timestamps in the file named `log.txt`

const http = require("node:http");
const fs = require('node:fs');
const server = http.createServer(function (req, res) {
    const method = req.method;
    const path = req.url;

    const log = `\n[${Date.now()}]: ${method} ${path}`;
    fs.appendFileSync('log.txt', log, 'utf-8');

    switch (method){
        case 'GET': {
            switch (path) {
                case "/":
                    return res.writeHead(200).end(`Hello from server`);

                case "/contact-us":
                    return res.writeHead(200).end(`you can contact me at email: dev@test.com and mobile: +91 7254786875`);
                case "/tweet":
                    return res.writeHead(200).end(`Tweet-1\nTweet-2`);    
        }
        
    }
    break
    case 'POST': {
        switch(path) {
            case '/tweet':
            return res.writeHead(201).end(`Your tweet was created`);
        }
    }

  }
  return res.writeHead(404).end('You are lost')
});

server.listen(3000, () => console.log(`server is listning on port 3000`));
