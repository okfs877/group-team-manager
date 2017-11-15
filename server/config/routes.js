var player =  require('../controllers/player.js');
var path = require("path");
module.exports = function(app){
    app.get('/all', function(req, res){
        player.retrieve(req, res);
    })
    app.post('/create', function(req, res){
        player.create(req, res);
    })
    app.get('/delete/:id', function(req, res){
        player.destroy(req, res);
    })
    app.get("/update/:id/:game/:status", function(req, res){
        player.update(req, res);
    })
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("c:/Users/okfs87 7/Desktop/DojoAssignments/MEAN/Full MEAN/Team Manager/client/dist/index.html"))
    });
}