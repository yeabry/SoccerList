import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routers from './routes/soccerRoutes';
import routes from './routes/soccerRoutes';


const app = express();
const PORT = 4000;

// Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Bodyparser Setup
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

// CORS Setup
app.use(cors());

routes(app);

app.get('/', (req, res) =>
    res.send(`Our Soccer Application Is Running on Port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your Soccer Server Is Running on Port ${PORT}`)
);