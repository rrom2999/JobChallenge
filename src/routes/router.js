const {Router} = require('express');
const router = Router();

const {getPlaces} = require("../controllers/places.controller");

//routes
router.get('/places', getPlaces );                                  //http://localhost:3000/places [GET]

module.exports = router;