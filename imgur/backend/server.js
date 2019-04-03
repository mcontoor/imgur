const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');
// const Images = require('./models/images');


const app = express();
app.use(cors());
const router = express.Router();
let Images


// const uri = "mongodb+srv://mcontoor:mcontoor123@healme-bwqpu.mongodb.net/humgur?retryWrites=true";
// mongoose.connect(uri, { useNewUrlParser: true })
// .then(() =>
//     console.log("Connected"),
//         db = mongoose.db("humgur"),
//         Images = mongoose.db("humgur").collection("images"),
// )
// .catch(err => console.log(err))

 
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mcontoor:mcontoor123@healme-bwqpu.mongodb.net/humgur?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if(err) {
        console.log("$$$$$$$$$$$$$4", err);
    } else {
        console.log("Connected");
        // collection.insertOne({"name": "Sai"})
        // perform actions on the collection object
        // client.close();
    }
});
// const db = client.db("humgur")
// const collectionImages = client.db("humgur").collection("images");

// app.use(express.static(path.join(__dirname, 'imgur/public')));

// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/imgur/public/index.html'));
// });

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

const storage = multer.diskStorage({
    destination: client.db.collection('images'),
    filename: function(req, file, cb){
       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
    }
 });
 
 const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
 }).single("myImage");
 

 
 router.post("/upload", function(req, res) {
    upload(req, res, (err) => {
       console.log("Request ---", req.body),
       console.log("Request file ---", req.file);//Here you get file.
       /*Now do where ever you want to do*/
       if (!err) {
         return res.send(200).end();
       }
          
    });
 });

app.use('/api', router);

app.listen(5001, () => console.log("Server is running in  the port ", 5001));
