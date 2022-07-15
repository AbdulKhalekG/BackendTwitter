const retweet = {}
const tweets = require('../database')
retweet.post=(req,res)=> {
    try{

        tweets.searchretweetid(req,res);

    }catch(e){
        console.log(e);
    }
}

retweet.create=(req,res)=>{
    try{
        tweets.createretweet(req,res)

    }catch(e){
        console.log(e);
    }
}
module.exports=retweet