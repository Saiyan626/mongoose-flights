const mongoose = require('mongoose');

mongoose.connect(
    //db connection string
    'mongodb://localhost/flights',
    // mongoose connection options
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
);

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});