var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {
    retrieve: function(req, res) {
        Player.find({}, function(err, players){
            if (err){
                console.log('error occured');
                return;
            }
            console.log(players);
            return res.json(players);
        });
    },
    create: function(req, res) {
        var playerInstance = new Player();
        playerInstance.name = req.body.name;
        playerInstance.preferredPosition = req.body.prefPosition;
        playerInstance.game1 = 'Undecided';
        playerInstance.game2 = 'Undecided';
        playerInstance.game3 = 'Undecided';
        console.log(playerInstance)
        playerInstance.save(function(err){
            return res.redirect('/');
        })
    },
    destroy: function(req, res) {
        Player.findOneAndRemove({_id: req.params.id}, function(err, player){
            if(err){
                console.log(err);
            }
            return res.redirect("/");
        } )
    },
    update: function(req, res) {
        Player.findOne({_id: req.params.id}, function(err, player){
            if(err){
                console.log(err);
            }
            if(req.params.game == "game1"){
                player.game1 = req.params.status;
            }
            if(req.params.game == "game2"){
                player.game2 = req.params.status;
            }
            if(req.params.game == "game3"){
                player.game3 = req.params.status;
            }
            player.save(function(err){
                return res.redirect('/');
            });
        });
    }
}
