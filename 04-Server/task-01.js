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

serv.listen(2000, () => console.log(` Your server is running on port 2000`))