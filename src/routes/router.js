const {Router} = require('express');
const router = Router();

const {getPlaces, createPlace} = require("../controllers/places.controller");

//routes
router.get('/places', getPlaces );                                  //http://localhost:3000/places [GET]
router.post('/createPlace', createPlace);                                //http://localhost:3000/places [POST]

module.exports = router;