let path=require("path");
let fastify=require("fastify")({logger: false});
let PORT=6007;
let publicDir=path.join(__dirname, "/");
fastify.register(require("@fastify/static"),{
    root: publicDir,
    prefix: "/",
    maxAge: "1d",
    immutable: true
});
fastify.setNotFoundHandler((request, reply)=>{
    reply.code(404).type("text/plain").send("404 Not Found");
});
fastify.setErrorHandler((error, request, reply)=>{
    request.log.error(error);
    reply.code(500).type("text/plain").send(`Server error: ${error.message}`);
});
let start=async()=>{
    try{
        await fastify.listen({port: PORT, host: "::"});
        console.log(`Server running at http://localhost:${PORT}`);
    }
    catch (err){
        process.exit(1);
    }
};
start();