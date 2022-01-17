const {Router} = require('express');
const router = Router();

const {getPlaces, createPlace, getDistance} = require("../controllers/places.controller");

//routes
router.get('/places', getPlaces );                                  //http://localhost:3000/places [GET]
router.post('/createPlace', createPlace);                                //http://localhost:3000/places [POST]
router.get('/distance/:place1&:place2&:unit', getDistance);         //http://localhost:3000/distance/place1:Name1&place2:Name2&unit:Unit [GET]

module.exports = router;