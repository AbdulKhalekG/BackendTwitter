const express = require('express')
const router = express.Router()
const usuario = require('../controllers/usuario')
const post = require('../controllers/post')
const like = require('../controllers/like')
const retweet=require('../controllers/retweet')
const follow=require('../controllers/follow')
const passport=require('passport')
const { passportAuth } = require('../middleware')





//Rutas para los users
router.post('/register', usuario.register) //
router.post('/login', passportAuth) //
router.put('/modify/:id', usuario.modify) //

//busqueda de usuarios por id
router.get('/search-user/:id_usuario',usuario.searchiduser) //

//busqueda de username
router.get('/search-username/:username',usuario.searchuser) //



//Rutas para los posts
router.post('/create-post', post.create) //
router.put('/edit-post',post.edit) //


//busqueda de post por id
router.get('/search-post/:id_post',post.searchid)

//busqueda de post por username
router.get('/search-usernamepost/:username', post.searchuserpost)


//rutas likes
router.get('/like-post/:id_post',like.post)
router.get('/like-user/:id_usuario',like.usuario)
router.post('/createlike-post',like.createlikepost)
router.post('/createlike-user',like.createlikeuser)
router.delete('/deletelike-user/:id_usuario',like.deletelikeuser)
router.delete('/deletelike-post/:id_post',like.deletelikepost)


//retweets
router.get('/retweet-post/:id_post',retweet.post)
router.post('/retweet-create', retweet.create)

//follows
router.post('/follower-create',follow.createfollower)
router.post('/following-create',follow.createfollowing)
router.get('/search-follow/:id_user1',follow.getfollow)
router.get('/search-following/:id_user2',follow.getfollowing)
router.delete('/delete-follow/:id_user1',follow.deletefollow)
router.delete('/delete-following/:id_user2',follow.deletefollowing)



router.get('/perfil',(req,res)=>{
    res.send('perfil')
})


module.exports = router