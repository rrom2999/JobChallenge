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


module.exports = {
    getPlaces,
    createPlace
};