let http=require('http')
 let server=http.createServer(function(req,res){
    res.end("hello world")
})
server.listen(4242,()=>{
    console.log('server is running')
})