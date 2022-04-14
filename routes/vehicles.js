var express = require('express');
const vehicle_controller = require('../controllers/vehicle');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('vehicle', { title: 'Search Results' });
});
*/

/* GET vehicles */
router.get('/', vehicle_controller.vehicle_view_all_Page );

module.exports = router;