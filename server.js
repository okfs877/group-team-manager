var express = require("express");
var path = require("path");
var app = express();
var port = 8000;
var session = require("express-session");
app.use(session({secret: "codingdojorocks"}));
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/dist')));
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
app.listen(port, function(){
    console.log(`listening on port ${port}`);
});