const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    note: [{ note: Number, commentaire: String }]
});

const Artist = mongoose.model('Artist', artistSchema); //convert to model named Tea
module.exports = Artist; //export for controller use