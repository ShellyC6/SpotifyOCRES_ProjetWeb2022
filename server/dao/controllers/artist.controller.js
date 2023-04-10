const Artist = require("../models/artist.model");

const newArtist = async (req, res, next) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    Artist.findOne({ nom: req.body.nom }, (err, data) => {
        // si l'artiste n'est pas encore dans la bdd
        if (!data) {
            // créer l'artiste
            const newArtist = new Artist({
                nom: req.body.nom,
            });
            // enregistrer l'artiste dans la bdd
            newArtist.save((err, data) => {
                if (err) return res.json({ Error: err });
                return res.json(data);
            });
        } else { // si il y a eu une erreur ou si l'artiste est déjà dans la bdd
            if (err) return res.json(`Il y a eu une erreur, veuillez réessayer. ${err}`);
            return res.json({ message: "Cet artiste existe déjà" });
        }
    })
};

const getAllArtist = (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    Artist.find({}, (err, data) => {
        if (err) {
            return res.json({ Error: err });
        }
        return res.json(data);
    })
};

const deleteAllArtist = (req, res, next) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    Artist.deleteMany({}, err => {
        if (err) {
            return res.json({ message: "La suppression de tous les artistes a echoué" });
        }
        return res.json({ message: "La suppression de tous les artistes a réussi" });
    })
};

const getOneArtist = (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    let nom = req.params.nom;

    Artist.findOne({ nom: nom }, (err, data) => {
        if (err || !data) {
            return res.json({ message: `L'artiste ${nom} n'existe pas.` });
        }
        else return res.json(data);
    });
}

const newComment = async (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    let nom = req.params.nom;
    let newNote = req.body.note;
    let newCommentaire = req.body.commentaire;

    const comment = {
        note: newNote,
        commentaire: newCommentaire
    };

    //return res.json(comment);

    Artist.findOne({ nom: nom }, (err, data) => {
        if (err || !data) {
            return res.json({ message: `L'artiste ${nom} n'existe pas.` });
        } else if (!newNote) {
            return res.json({ message: "Aucune nouvelle note à enregistrer" });
        } else {
            data.note.push(comment);
            data.save(err => {
                if (err) {
                    return res.json({ message: "La note n'a pas pu s'ajouter.", error: err });
                }
                return res.json(data);
            })
        }
    })
}

const deleteOneArtist = (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    let nom = req.params.nom;

    Artist.deleteOne({ nom: nom }, (err, data) => {
        if (data.deletedCount == 0) return res.json({ message: `L'artiste ${nom} n'existe pas.` });
        else if (err) return res.json(`Il y a eu une erreur, veuillez réessayer. ${err}`);
        else return res.json({ message: "L'artiste a été supprimé." });
    });
}

module.exports = { newArtist, getAllArtist, deleteAllArtist, getOneArtist, newComment, deleteOneArtist };