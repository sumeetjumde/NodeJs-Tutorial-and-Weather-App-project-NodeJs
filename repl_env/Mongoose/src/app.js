const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongoproject",{useNewUrlParser:true},{useUnifiedTopology:true})
.then(()=>console.log("connection successful...."))
.catch((err)=>console.log(err));


// schema of DB
// It defines the structure of ther document
const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    type:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})


// Moongoose Model is wrapper on mongoose Schema its defines the structure of the document
// this is class
// we have to give singluar name it will make it plural by default
// Collectin creaction
const Playlist = mongoose.model("Playlist",playlistSchema);


// With Async Await
const createDocument = async()=>{
    try{
        // creating document or inserting
    const reactPlaylist = new Playlist({
        name:"NodeJs",
        type:"BackEnd",
        videos:100,
        author:"Sumeet Jumde",
        active:true,
    })

    const jsPlaylist = new Playlist({
        name:"javascript",
        type:"BackEnd",
        videos:1000,
        author:"Sumeet Jumde",
        active:true,
    })
    const mongoPlaylist = new Playlist({
        name:"mongo",
        type:"database",
        videos:100,
        author:"Sumeet Jumde",
        active:true,
    })
    const mongoosePlaylist = new Playlist({
        name:"mongoose",
        type:"database",
        videos:100,
        author:"Sumeet Jumde",
        active:true,
    })
    const expressjsPlaylist = new Playlist({
        name:"Expressjs",
        type:"BackEnd",
        videos:1000,
        author:"Sumeet Jumde",
        active:true,
    })

    const result = await Playlist.insertMany([reactPlaylist,expressjsPlaylist,jsPlaylist,mongoPlaylist,mongoosePlaylist]);
    console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

createDocument();



// Read Document

const getDocumnet = async()=>{
    try{
        const result = await Playlist.find();
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

getDocumnet();

// reading name of databases
// Read Document

const readnameDocumnet = async()=>{
    try{
        const result = await Playlist.find({type:'database'}).select({name:1});
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

readnameDocumnet();



//Quary operator,Read Document

const QuaryaddDocumnet = async()=>{
    try{
        const result = await Playlist
        .find({videos:{$gt:100}})  // greater than 100 $gt, $lte = less than equalto, $gte =greater than equal to,
        .select({name:1});
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

QuaryaddDocumnet();


// In operator for searching two or more values

const QuaryinDocumnet = async()=>{
    try{
        const result = await Playlist
        .find({type:{$in:["BackEnd","database"]}})  // in operator
        .select({name:1});
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

QuaryinDocumnet();

// notIn operator for searching two or more values $nin

const QuarynotinDocumnet = async()=>{
    try{
        const result = await Playlist
        .find({type:{$nin:["BackEnd","database"]}})  // nin operator
        .select({name:1});
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

QuarynotinDocumnet();



// update the Document


// update

const updateDocument = async(_id)=>{
    try{
        const result = await Playlist
        .updateOne({_id},{
            $set:{
                name:"ReactJs"
            }
        })  
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

updateDocument("61dd5d47ebe5f006c6fbab03");


// delete Document

const deleteDocument = async(_id)=>{
    try{
        const result = await Playlist
        .deleteOne({_id})   // This can also be written as this .deleteOne({_id:"61dd5d47ebe5f006c6fbab03"})  or _id:_id but as this is same so  we can write only _id
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

deleteDocument("61dd5d47ebe5f006c6fbab03");