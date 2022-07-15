const {response} = require('express')
const likes=require('../database')

const like={}

like.post=(req,res)=>{
    try{
        likes.likepost(req,res)
        
    }catch(e){
        console.log(e);
    }
}

like.usuario=(req,res)=>{
    try{
        likes.likeuser(req,res)
        
    }catch(e){
        console.log(e);
    }
}

like.createlikepost=(req,res)=> {
    try{
        likes.createlikepost(req,res);
        
    }catch(e) {
        console.log(e);
    }
}

like.createlikeuser=(req,res)=> {
    try{
        likes.createlikeuser(req,res)
        
    }catch(e){
        console.log(e);
    }
}

like.deletelikeuser=(req,res)=> {
    try{
        likes.deletelikeuser(req,res)
    }catch(e){
        console.log(e)
    }
}

like.deletelikepost=(req,res)=> {
    try{
        likes.deletelikepost(req,res)
    }catch(e){
        console.log(e)
    }
}

module.exports = like;