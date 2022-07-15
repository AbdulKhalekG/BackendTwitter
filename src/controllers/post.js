//rutas database
const createpost=require('../database')
const editpost=require('../database')
const searchidpost=require('../database')
const searchusernamepost=require('../database')
const post={}



//create post
post.create=(req,res)=>{
    try{
        createpost.createpost(req,res);
       
    }catch(e){
        console.log(e)
    }  

}
//like

//edit post
post.edit=(req,res)=>{
try {
    editpost.editpost(req,res);
    
}catch(e){
    console.log(e)
}

}

//search post id
post.searchid=(req,res)=> {

    try{
        searchidpost.searchidpost(req,res);
        
    }catch(e){
        console.log(e)
    }
}
//search usernamepost
post.searchuserpost=(req,res)=> {
    try{
        searchusernamepost.searchusernamepost(req,res);
        
    }catch(e){
        console.log(e)
    }

}


module.exports= post