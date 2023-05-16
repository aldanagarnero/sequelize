var express = require('express');
var router = express.Router();
let genreController = require("../controllers/genreController")

router.get('/', genreController.index)

module.exports = router;