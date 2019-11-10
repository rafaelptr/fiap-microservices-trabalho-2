const path = require('path');
const express = require('express');
const http = require('http');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const url = "http://api-servicos:8081";   

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => { 
    http.get(url+'/api/v1/servicos', (resp) => {    
        var chunks = [];

        resp.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        resp.on("end", function() {
            var body = Buffer.concat(chunks);
        
            res.render('servicos_view', {
                 results: JSON.parse(body)._embedded.servicos
            });   

        });


    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
});

app.post('/salvar', (req, res) => {
    
    let id = req.body.id;

    const data = JSON.stringify({
        id: req.body.id,
        nome_servico: req.body.nome_servico,
        descricao_servico: req.body.descricao_servico
    });
      
    const options = {
        hostname: "localhost",
        port: 8081,
        path: '/api/v1/servicos/'+id,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    }
      
    http.request(options, (resp) => {
        console.log('statusCode: '+ resp.statusCode);
        var chunks = [];      
        
        resp.on('data', (d) => {
            chunks.push(chunk);
        });
        
        resp.on("end", function() {
            var body = Buffer.concat(chunks);
            console.log(body);
            res.redirect('/');
        });
    });
});

app.post('/atualizar', (req, res) => {
    
    let id = req.body.id;

    const data = JSON.stringify({
        id: req.body.id,
        nome_servico: req.body.nome_servico,
        descricao_servico: req.body.descricao_servico
    });
      
    const options = {
        hostname: "localhost",
        port: 8081,
        path: '/api/v1/servicos/'+id,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    }
      
    http.request(options, (resp) => {
        console.log('statusCode: '+ resp.statusCode);
        var chunks = [];      
        
        resp.on('data', (d) => {
            chunks.push(chunk);
        });
        
        resp.on("end", function() {
            var body = Buffer.concat(chunks);
            console.log(body);
            res.redirect('/');
        });
    });
});

app.post('/deletar', (req, res) => {    
    let id = req.body.id;

    const options = {
        hostname: "localhost",
        port: 8081,
        path: '/api/v1/servicos/'+id,
        method: 'DELETE',
    }
      
    http.request(options, (resp) => {
        console.log('statusCode: '+ resp.statusCode);
        var chunks = [];      
        
        resp.on('data', (d) => {
            chunks.push(chunk);
        });
        
        resp.on("end", function() {
            var body = Buffer.concat(chunks);
            console.log(body);
            res.redirect('/');
        });
    });
});

app.listen(port, () => {
    console.log('Server is running at port '+port);
});