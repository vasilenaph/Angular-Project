global.__basedir = __dirname;
require('dotenv').config()
const dbConnector = require('./config/db');
// const mongoose = require('mongoose');
const apiRouter = require('./router');
const cors = require('cors');
// const config = require('./config/config');
const { errorHandler } = require('./utils');
const { Car, Topic } = require('./models');

// const newCar = new Car({
//   imageUrl: 'example-url',
//   carName: 'example-name',
//   carModel: 'example-model',
//   color: '',
//   year: '',
//   engine: '',
//   fuel: '',
//   description: ''
//   // other properties
// });

// newCar.save()
//   .then((car) => {
//     console.log('Car saved successfully:', car);
//   })
//   .catch((error) => {
//     console.error('Error saving car:', error);
//   });

const newTopic = new Topic({
  title: 'example-name',
  imageUrl: '',
  content: '',
});

newTopic.save()
  .then((topic) => {
    console.log('Topic saved successfully:', topic);
  })
  .catch((error) => {
    console.error('Error saving car:', error);
  });


dbConnector()
  .then(() => {
    const config = require('./config/config');

    const app = require('express')();
    require('./config/express')(app);

    app.use(cors({
      origin: config.origin,
      credentials: true
    }));

    app.use('/api', apiRouter);

    app.use(errorHandler);

    app.listen(config.port, console.log(`Listening on port ${config.port}!`));
  })
  .catch(console.error);