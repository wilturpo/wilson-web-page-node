const http = require('http'); //Propio de Nodejs

//Necesitamos crear un servidor
http.createServer((req,res)=>{
    
    //res.write('Hola Mundo');//Enviamos la respuesta

    res.writeHead(200, {'Content-Type': 'application/json'});

    let salida = {
        nombre: 'Wilson',
        edad: 24,
        url: req.url
    }
    
    res.write(JSON.stringify(salida)); 
    res.end();              //Indicamos que finalizaron las operaciones
})
.listen(8080);//Indicamos el puerto de escucha

console.log('Escuchando el puerto 8080');