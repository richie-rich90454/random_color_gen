import path from "path";
import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import {fileURLToPath} from "url";

let __filename=fileURLToPath(import.meta.url);
let __dirname=path.dirname(__filename);
let fastify=Fastify({logger: false});
let PORT=process.env.PORT||6007;
let publicDir=path.join(__dirname, "dist");
await fastify.register(fastifyStatic,{
	root: publicDir,
	prefix: "/",
	maxAge: "1d",
	immutable: true,
});
fastify.setNotFoundHandler((request, reply)=>{
	reply.code(404).type("text/plain").send("404 Not Found");
});
fastify.setErrorHandler((error, request, reply)=>{
	request.log.error(error);
	reply.code(500).type("text/plain").send(`Server error: ${error.message}`);
});
try{
	await fastify.listen({port: PORT, host: "::"});
	console.log(`Server running at http://localhost:${PORT}`);
}
catch (err){
	process.exit(1);
}