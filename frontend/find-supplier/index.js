const path = require('path');
const express = require('express');
const http = require('http');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const app = express();
const port = 8090;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => { 
    var url = "http://ip172-18-0-29-bn3h6v8ajsig009nhal0-8080.direct.labs.play-with-docker.com";   
    http.get(url+'/api/v1/servicos', (resp) => {    
        console.log('STATUS: ' + resp.statusCode);
        console.log('HEADERS: ' + JSON.stringify(resp.headers));
    
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
    let data = {product_name: req.body.product_name, product_price: req.body.product_price};
    let sql = "INSERT INTO product SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.post('/atualizar', (req, res) => {
    let sql = "UPDATE product SET product_name='" + req.body.product_name + "', product_price='" + req.body.product_price + "' WHERE product_id=" + req.body.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.post('/deletar', (req, res) => {
    let sql = "DELETE FROM product WHERE product_id=" + req.body.product_id + "";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.listen(port, () => {
    console.log('Server is running at port '+port);
});