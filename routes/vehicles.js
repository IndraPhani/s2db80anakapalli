var express = require('express');
const vehicle_controller = require('../controllers/vehicle');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('vehicle', { title: 'Search Results' });
});
*/
const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}
/* GET vehicles */
router.get('/', vehicle_controller.vehicle_view_all_Page );
/* GET detail vehicle page */
router.get('/detail', vehicle_controller.vehicle_view_one_Page);
/* GET create vehicle page */
router.get('/create', secured, vehicle_controller.vehicle_create_Page);
/* GET create vehicle page */
router.get('/update', secured, vehicle_controller.vehicle_update_Page);
/* GET delete car page */
router.get('/delete', secured, vehicle_controller.vehicle_delete_Page);

module.exports = router;