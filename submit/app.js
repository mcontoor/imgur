const express = require("express");
const photoRoute = express.Router();
const multer = require("multer");
var storage = multer.memoryStorage();
var upload = multer({
    storage: storage,
    limits: {
        fileds: 1,
        fileSize: 6000000,
        files: 1,
        part: 2
    }
});
const mongodb = require("mongodb");
const MongoClient = require('mongodb').MongoClient;
const objectID = require("mongodb").objectID;
let db;
const {
    Readable
} = require("stream");
const app = express();

app.use("/photo", photoRoute);

 const uri= MongoClient.connect("mongodb+srv://varshith:4869varshith@basic4869-flznn.mongodb.net/slimgure?retryWrites=true");
const client = new MongoClient(uri, {
    useNewUrlParser: true
});
client.connect(err => {
    if (err) {
        console.log("$$$$$$$$$$$$$4", err);
        process.exit(1);
    } else {
        console.log("Connected");
        // collection.insertOne({"name": "Sai"})
        // perform actions on the collection object
        db = client.db("slimgur");
        photoRoute.get('/:photoID', (req, res) => {
            try {
                var photoID = new objectID(req.params.photoID);
            } catch (err) {
                return res.status(400).json({
                    message: "Invalid PhotoId"
                });
            }
            var bucket = new mongodb.GridFSBucket(collection, {
                bucketName: 'photos'
            });

            let downloadStream = bucket.openDownloadStream(photoID);
            downloadStream.on('data', (chunk) => {
                res.write(chunk);
            });
            downloadStream.on('error', () => {

                res.sendStatus(404);
                downloadStream.on('end', () => {
                    res.end();

                });
            });
        });
    }
});
photoRoute.post('/', (req, res) => {
    upload.single('photo')(req, res, (err) => {
        if (err) {
            return res.status(400).json({
                message: "upload request validation failed"
            });
         } else if (!req.body.name){
            return res.status(400).json({message:"no photos"});

         }
         let photoName = req.body.name;
         const readablePhotoStream = new Readable();
         readablePhotoStream.push(req.file.buffer);
         readablePhotoStream.push(null);


        let bucket = new mongodb.GridFSBucket(db, {
            bucketName: 'photos'
        });

        let uploadStream = bucket.openUploadStream(photoName);
        let id = uploadStream.id;
        readablePhotoStream.pipe(uploadStream);

        uploadStream.on('error', () => {
            return res.status(500).json({
                message: "Error uploading file"
            });
            
        });
        uploadStream.on('finish',()=>{
            return res.status(201).json({message:"File upload,stored under Mongo ObjectID: " +id });
        });
    });   
        });
        




const users = db.collections('user');
const images = db.collection('images');