const express = require('express');
const router = express.Router();
const artistController = require('../dao/controllers/artist.controller');

router.get('/artist', artistController.getAllArtist);
router.post('/artist', artistController.newArtist);
router.delete('/artist', artistController.deleteAllArtist);

router.get('/artist/:nom', artistController.getOneArtist);
router.post('/artist/:nom', artistController.newComment);
router.delete('/artist/:nom', artistController.deleteOneArtist);

module.exports = router;