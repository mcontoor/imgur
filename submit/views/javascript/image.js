var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var imageSchema = new Schema({
    title:String,
    author:String,
    body: String,
    likes: {type:Number,default:0},
   comment:[{type:Schema.Types.ObjectId,ref:"Comments"}],
   data:{type:Date,default:Date.now},
   image:"/fliesstored/bird.png"

});
module.exports = mongoose.model("Images",imageSchema);