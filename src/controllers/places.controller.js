//Methods
const getPlaces = async (req, res) =>{
    console.log('Get places...');
    res.status(200).json({message: 'Get places'})
};


module.exports = {
    getPlaces
}