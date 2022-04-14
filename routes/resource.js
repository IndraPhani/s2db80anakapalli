var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var vehicle_controller = require('../controllers/vehicle');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// vehicle ROUTES ///
// POST request for creating a vehicle.
router.post('/vehicles', vehicle_controller.vehicle_create_post);
// DELETE request to delete vehicle.
router.delete('/vehicles/:id', vehicle_controller.vehicle_delete);
// PUT request to update vehicle.
router.put('/vehicles/:id', vehicle_controller.vehicle_update_put);
// GET request for one vehicle.
router.get('/vehicles/:id', vehicle_controller.vehicle_detail);
// GET request for list of all vehicle items.
router.get('/vehicles', vehicle_controller.vehicle_list);
module.exports = router;