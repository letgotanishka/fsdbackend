const http= requie('http');
const server=http.createServer((req,res)=>{
    let data=[
        {
            "id": 1,
            "username": "admin",
            "password": "1234"
        },
        {
            "id": 2,
            "username": "user",
            "password": "5678"
        }
    ];
    res.writeHead(200,

        {
            'Constaent-Type':'application/json'});
            res.end(data);

});
server.listen(9000,(err)=>{
    if(err)
        console.log("Error starting server",err)
    else
        console.log("Server started on port 9000")
});