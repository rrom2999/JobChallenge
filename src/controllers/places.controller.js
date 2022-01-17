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


module.exports = {
    getPlaces
};