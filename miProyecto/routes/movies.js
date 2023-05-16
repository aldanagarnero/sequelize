var express = require('express');
var router = express.Router();
let moviesController = require('../controllers/moviesControllers')

router.get('/', moviesController.index);
router.get('/detail/:id', moviesController.detail);
router.get('/new', moviesController.new);
router.get('/recommended', moviesController.recomm)

module.exports = router;
