const Express = require('express');
const operations = require('./api.js');
const port = 3000;

const application = Express();

application.listen(port,()=>{
	console.log("Listening on Port: " + port);
})

application.get("/addition",(request,response)=>{
	var result = operations.add_complex();
	response.send(result);
})

application.get("/subtraction",(request,response)=>{
	var result = operations.sub_complex();
	response.send(result);
})

application.get("/multiply",(request,response)=>{
	var result = operations.multiply_complex();
	response.send(result);
})

application.get("/division",(request,response)=>{
	var result = operations.divide_complex();
	response.send(result);
})
