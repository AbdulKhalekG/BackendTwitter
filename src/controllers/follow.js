const follow={}
const follower= require('../database')

follow.createfollower=(req,res)=>{
    try{
        follower.createfollower(req,res)
    }catch(e){
        console.log(e)
    }
}

follow.createfollowing=(req,res)=> {
    try{
        follower.createfollowing(req,res)
    }catch(e){
        console.log(e)
    }

}

follow.getfollow=(req,res)=>{
    try{
        follower.getfollow(req,res)
    }catch(e){
        console.log(e)
    }
}

    follow.getfollowing=(req,res)=>{
        try{
            follower.getfollowing(req,res)
        }catch(e){
            console.log(e)
        }
    }

follow.deletefollow=(req,res)=>{
    try{
        follower.deletefollow(req,res)
    }catch(e){
        console.log(e)
    }
}

follow.deletefollowing=(req,res)=>{
    try{
        follower.deletefollowing(req,res)
    }catch(e){
        console.log(e)
    }
}

module.exports = follow;