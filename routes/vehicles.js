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
/* GET detail vehicle page */
router.get('/detail', vehicle_controller.vehicle_view_one_Page);
/* GET create vehicle page */
router.get('/create', vehicle_controller.vehicle_create_Page);
/* GET create vehicle page */
router.get('/update', vehicle_controller.vehicle_update_Page);

module.exports = router;