require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
var bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario'));

mongoose.connect(process.env.NODE_ENV, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, res) => {

    if (err) throw err

    console.log('Base de datos ONLINE');

});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

app.listen(process.env.PORT, () => {
    console.log('Running port: ', process.env.PORT);
});