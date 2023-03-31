const express = require('express');
const sendEmailRoute = require('./routes/send.email');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors({
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello from the website!');
});

sendEmailRoute(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});