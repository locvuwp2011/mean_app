var express = require('express');
//var mainController = require('../controllers/main');
var router = express.Router();

/* GET home page. */
//router.get('/', mainController.index);

var locationController = require('../controllers/location');
var otherController = require('../controllers/other');

router.get('/', locationController.locationList);
router.get('/location', locationController.locationInfo);
router.get('/location/review/new', locationController.addReview);
router.get('/other', otherController.about);

module.exports = router;
