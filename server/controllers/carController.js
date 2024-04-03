const { Car } = require('../models');

function getCars (req, res, next) {
   Car.find()
   .populate('userId')
   .then(cars => res.json(cars))
   .catch(next);
};

function getCar (req, res, next) {
   const { carId } = req.params;

   Car.findById(carId)
       .populate({
           path : 'cars',
           populate : {
             path : 'userId'
           }
         })
       .then(car => res.json(car))
       .catch(next);
}

module.exports = {
   getCars,
   getCar,
}
