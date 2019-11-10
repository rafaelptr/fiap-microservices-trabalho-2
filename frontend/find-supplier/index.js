const path = require('path');
const express = require('express');
const http = require('http');
var request = require('request');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
//const api_host = "api-servicos";
const api_host = "ip172-18-0-15-bn44rnoajsig00bdv7p0-8081.direct.labs.play-with-docker.com";
const api_port = 8081;
const url = "http://"+api_host+":"+api_port;   

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
    console.log("salvar");

    request.post(
        url+'/api/v1/servicos',
        {
            json: {
                nome_servico: req.body.nome_servico,
                descricao_servico: req.body.descricao_servico
            }
        },
        function (error, response, body) {
            console.log(body);
            console.log(error);
            console.log(response);
            res.redirect('/');
        }
    );
});

app.post('/atualizar', (req, res) => {
    
    let id = req.body.id;
    console.log("atualizar "+id);

    request.put(
        url+'/api/v1/servicos/'+id,
        {
            json: {    
                id: id,
                nome_servico: req.body.nome_servico,
                descricao_servico: req.body.descricao_servico
            }
        },
        function (error, response, body) {
            console.log(body);
            console.log(error);
            console.log(response);
            res.redirect('/');
        }
    );
});

app.post('/deletar', (req, res) => {    
    let id = req.body.id;
    console.log("deletar "+id);

    request.delete(
        url+'/api/v1/servicos/'+id,
        {},
        function (error, response, body) {
            console.log(body);
            console.log(error);
            console.log(response);
            res.redirect('/');
        }
    );
});

app.listen(port, () => {
    console.log('Server is running at port '+port);
});