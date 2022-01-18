const {Pool} = require('pg');

//Local access to Database
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'pg2999Dlanor',
    database: 'inlandchallenge',
    port:'5432'
});

//Methods
const getPlaces = async (req, res) =>{
    console.log('getPlaces ----------------');
    const response = await pool.query('SELECT * FROM places');
    console.log(response.rows);
    res.status(200).json(response.rows);
};

const createPlace = async (req, res) =>{
    const { name, latitude, longitude } = req.body;
    if(!name || !latitude || !longitude){                       //In case there is a missing field to create
        console.log("missing field");
        res.send('Missing field');
    }
    const response = await pool.query('INSERT INTO places (name, latitude, longitude) VALUES ($1, $2, $3)', [name, latitude, longitude]);
    res.json({
        message: "New place created successfully",
        body: {
            place: {name, latitude, longitude}
        }
    })
};

const getDistance = async (req, res) =>{
    let {place1, place2, unit} = req.params;

    //Formating params to use
    place1 = place1.split(':')[1];
    place2 = place2.split(':')[1];
    unit = unit.split(':')[1];

    console.log(place1);
    console.log(place2);

    const place1Data = await pool.query(`SELECT * FROM places WHERE name = '${place1}'`);
    const place2Data = await pool.query(`SELECT * FROM places WHERE name = '${place2}'`);
    
    res.json({
        message:'getDistance',
        body:{
            place1: place1Data['rows'],
            place2: place2Data['rows']
        }
    })
};

const getDistanceOptional = async (req, res) =>{
    let {lat1, lon1, lat2, lon2, unit} = req.params;

    //Formating params to use
    lat1 = lat1.split(':')[1];
    lon1 = lon1.split(':')[1];
    lat2 = lat2.split(':')[1];
    lon2 = lon2.split(':')[1];
    unit = unit.split(':')[1];

    lon1 =  lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    let longitude = lon2 - lon1;
    let latitude = lat2 - lat1;
    let firstpart = Math.pow(Math.sin(latitude / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(longitude / 2),2);
    let secondpart = 2 * Math.asin(Math.sqrt(firstpart));

    let radiusKm = 6371;

    let totalDistance = secondpart * radiusKm;

    console.log('place 1 lat: ' + lat1 + ' lon: ' + lon1);
    console.log('place 2 lat: ' + lat2 + ' lon: ' + lon2);
    console.log('distance: ' + totalDistance);

    res.json({
        message:'getDistance',
        place1:{
            latitude:  lat1,
            longitude: lon1
        },
        place2:{
            latitude:  lat2,
            longitude: lon2
        },
        distance: totalDistance
    })
};

module.exports = {
    getPlaces,
    createPlace,
    getDistance,
    getDistanceOptional
};