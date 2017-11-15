// require mongoose
var mongoose = require("mongoose");
//create our schema
var PlayerSchema = new mongoose.Schema({
    name:{type: String, required:true},
    preferredPosition: {type: String, required:true},
    game1: {type: String, required:true},
    game2: {type: String, required:true},
    game3: {type: String, required:true}
},
{
    timestamps: true
});
var Player = mongoose.model('Player', PlayerSchema);