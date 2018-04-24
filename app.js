const express=require ('express');
const app=express();

const server = app.listen(8081, function() {
    console.log(new Date().toISOString() + ": server started on port 8081");
});

app.use((req,res,next)=>{
	res.status(200).json()( {
	 message: 'It works!'
	});
});

module.exports=app;