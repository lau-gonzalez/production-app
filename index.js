const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({path: '.env'});
const mongoose = require('mongoose');

//connect to mongo

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gleba-app-production', {
        useNewUrlParser: true,
        useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

//settings
const PORT = process.env.PORT || 8080;

//middlewaresn
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

//routes
app.use('/api/fscfi1s', require('./routes/fscfi1'));
app.use('/api/fscfi2s', require('./routes/fscfi2'));
app.use('/api/fschs', require('./routes/fsch'));
app.use('/api/fecfi1s', require('./routes/fecfi1'));
app.use('/api/fecfi2s', require('./routes/fecfi2'));
app.use('/api/fh1s', require('./routes/fh1'));
app.use('/api/fh2s', require('./routes/fh2'));

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
