
const http = require("http");


http.createServer( ( req, res ) =>{

    res.write(200, { "Content-Type":"text/plain" });

    const persona = {
        id:1,
        nombre:"Esteban"
    }
    res.write( JSON.stringify(persona) );
    res.end();

})
.listen( 8080 );

console.log(" Escuchando el puerto" , 8080);