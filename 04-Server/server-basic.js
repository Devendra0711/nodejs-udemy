//! STATUS CODES
//? 2xx Success Codes:-
// 1. 200 ok:- The Standard resposne for successful requests.
// 2. 201 Created:- Signifies that a new resource has been successfully created.
// 3. 204 No Content:- Indicates that the server successfully processed the request, but is not returning any content.

//? 3xx Redirection Codes:-
// 1. 301 Moved Permanently:- The URL of the requested resource has been changed Permanently.The new URL is given in the response.
// 2. 302 Found:- Indicates that the resource is temporarily located at another URI.
// 3. 304 Not Modified:- Informs the client that the cached version of the response is still valid and can be used.

//? 4xx Client Error Codes:-
// 1. 400 Bad Request:- The server cannot process the request due to client error.
// 2. 401 Unauthorized:- Authentication is required for the request to be completed.
// 3. 403 Forbidden:- The server understands teh request but refuses to authorize it.
// 4. 404 Not Found:- The server can't find the requested resource.
// 5. 429 Too Many Request:- The user has sent too many requests in a given amount of time("rate limiting").

//? 5xx Server Error Codes:-
// 1. 500 Internal server Error:- A generic error message when the server encounters an unexpected condition.
// 2. 501 Not Implemented:- The server doesnot supports the functionality required to fulfil the request.
// 3. 503 server Unavailable:- The server is not ready to handle the request, often used for maintainance or overloaded servers.

//! HTTP Methods:-
//? GET/orders:- It is used for getting the data
//? POST/orders:- It is used to creating a data on server
//? PUT/orders/{order_id}:- It is used to updating any record in DB
//? PATCH/orders/{order_id}:- It is used to updating any record in DB
//? DELETE/orders/{order_id}:- Its is used for deleting any record from DB.

const http = require('node:http');
const server = http.createServer(function (req, res) {
  console.log(`I am getting an incoming request`);
  // db code here.....

  res.writeHead(200);
  res.end('Thanks for visiting my server');
});
server.listen(8000, function () {
  console.log('Server is started on port 8000');
});


// What are HTTP request headers?
// HTTP headers contain text information stored in key-value pairs, and they are included in every HTTP request (and response, more on that later). These headers communicate core information, such as what browser the client is using and what data is being requested.

// Example of HTTP request headers from Google Chrome's network tab:

//? Request Headers
//? :authority: www.google.com
//? :method: GET
//? :path: /
//? :scheme: https
//? accept: text/html
//? accept-encoding: gzip, deflate, br
//? accept-language: en-US, en;q=0.9
//? upgrade-insecure-requests: 1
//? user-agent: Mozilla/5.0  --> windows or mac

//! URL:-https:// www.google.com/contact-us?q=xyz&sort=desc

//? Scheme -> https://
//? Naked/Apex Domain -> google.com
//? subdomain -> www
//? path -> contact-us 
//? query parameter -> q=xyz and sort=desc


const http = require('node:http');
const servers = http.createServer(function(req, res){
  console.log(req.headers);

  res.writeHead(200);
  res.end(`you can send only ${req.headers['accept-language'] }`);
});

servers.listen(3000, () => console.log(`server is listning on port 3000`));

//todo --> Create a basic server with the path of the pages and return the data

const http = require('node:http');
const serv = http.createServer(function(req, res) {
  console.log(`Incoming Request`);
  console.log(req.url);

  
  switch (req.url){
    case '/':
    res.writeHead(200);
    return res.end(`HomePage`);

    case '/contact-us':
    res.writeHead(200);
    return res.end(`You can contact me at "devendrajha@gmail.com"`);
    
    case '/about-us':
    res.writeHead(200);
    return res.end(`I am a software engineer`);
    default: 
    res.writeHead(404);
    return res.end(` you are lost`);
  }

});

serv.listen(2000, () => console.log(` Your server is running on port 2000`));