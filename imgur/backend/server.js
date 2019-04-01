const express = require('express');
const mongose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');
// const Images = require('./models/images');


const app = express();
app.use(cors());
const router = express.Router();
let Images

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mcontoor:mcontoor123@healme-bwqpu.mongodb.net/humgur?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if(err) {
        console.log("$$$$$$$$$$$$$4", err);
    } else {
        console.log("Connected");
        const db = client.db("humgur"); 
        Images = client.db("humgur").collection("images");

        // collection.insertOne({"name": "Sai"})
        // perform actions on the collection object
        // client.close();
    }
});
router.get('/', (req, res) => {
    res.json({text: 'SOAL'})
})
router.get('/getData', (req, res) => {
    Images.find((err, data) => {
        if(err) {
            console.log('"#########', err)
        } else {
            console.log("%%%%%%%%%", data);
            // JSON.stringify({data});
            return res.json(data)
        }
    })
})

app.use('/api', router);

app.listen(5001, () => console.log("Server is running in  the port ", 5001));
