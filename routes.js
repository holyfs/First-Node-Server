const requestHandler=(req, res)=>{
    const url=req.url;
    const method= req.method
    if(url==='/'){
        res.write('<html><head><tittle>Welcome to my First Node.js Server!</tittle></head>');
        res.write('<body><h1>Hope you like listening to music!</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>');
        res.write('</body></html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const data = parsedBody.split('=')[1];
            console.log(data);
            res.statusCode=302;
            res.setHeader('Location', '/');
            return res.end();
            });
        } 
    if(url==='/users'){
        res.write('<html>');
        res.write('<head><tittle>List of Users</tittle></head>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User 3</li>');
        res.write('<li>User 4</li>');
        res.write('<li>User 5</li>');
        res.write('<li>User 6</li>');
        res.write('<li>User 7</li>');
        res.write('<li>User 8</li>');
        res.write('</ul></body></html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><tittle>My First Page</tittle></head>');
    res.write('<bod><h1>Hello from my Node.js Server!</h1></bod>');
    res.write('</html>');
    res.end();
};

module.exports={
    handler:requestHandler
}