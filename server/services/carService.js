const Car = require('../models/Car');

exports.getAll = () => Car.find();

exports.getOne = (carId) => Car.findById(carId);

exports.rentCar = async (carId, userId) => {
    try {
        const car = await Car.findById(carId);
        if (!car) {
            throw new Error('Car not found');
        }
        if (!car.available) {
            throw new Error('Car is not available for rent');
        }

        // add the userId to the renters array

        car.renters.push(userId);

        // mark the car as unavailable

        car.available = false;
        // save the updated car document

        await car.save();
        return car;
    } catch (error) {
        throw new Error('Error renting car: ' + error.message);
    }
};
