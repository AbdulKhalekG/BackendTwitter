const { Pool } = require('pg')
const  helpers  = require('./helpers')

const config={

    connectionString: process.env.DATABASE_URL,
    max:500,
    min:100,
    ssl: {rejectUnauthorized:false}

   // user:'faefrtbvusiifx',
   // host:'ec2-54-152-28-9.compute-1.amazonaws.com',
   // password:'15183a7d5b0f78a919654a538803702f9df706a162dad8a790cf5a5cb9796490c',
   // database:'d54loslgcri427'
};
//funciones
const pool = new Pool(config);






//funcion create user
const createuser= async (req,res) =>{

    const{ nombre, username, correo, bio, direccion, birthday, clave} = req.body;
    const passwordencriptado = await helpers.encryptPassword(clave)
    const response = await pool.query('INSERT INTO usuarios (nombre, username, correo, bio, direccion, birthday, clave) VALUES($1, $2, $3, $4, $5, $6, $7)', [
        nombre, username, correo, bio, direccion, birthday, passwordencriptado])
    console.log(response);
    res.json(response.rows)
}

//funcion modify user
const modifyuser=async (req,res)=>{

    const{ nombre, username, correo, bio, direccion, birthday, clave,id_usuario} = req.body;
    const response = await pool.query('UPDATE usuarios SET nombre= $1 username= $2, correo=$3, bio =$4, direccion=$5, birthday=$6, clave=$7 WHERE id_usuario=$8', [nombre, username, correo, bio, direccion, birthday,clave,id_usuario])
    console.log(response);
    res.json(response.rows)

}


//funcion create post

const createpost=async (req,res)=> {
    const{contenido, username, fecha, hora} = req.body
    const response = await pool.query('INSERT INTO post(contenido, username, fecha, hora) VALUES($1,$2,$3,$4)',[contenido,username,fecha,hora])
    console.log(response);
    res.json(response.rows)
}

//funcion edit post
const editpost=async(req,res)=>{

    const{id_post, contenido, username, fecha, hora} = req.body
    const response = await pool.query('UPDATE post SET contenido=$1, username=$2, fecha=$3, hora=$4 WHERE id_post=$5', [contenido,username,fecha,hora,id_post])
    console.log(response);
    res.json(response.rows)
}

//funcion post id
const searchidpost=async(req,res)=>{
    const id_post =req.params.id_post
    const response=await pool.query('SELECT *FROM post WHERE id_post=$1', [id_post])
    console.log(response.rows);
    res.json(response.rows)
}

//funcion post username
const searchusernamepost=async(req,res)=>{
    const username=req.params.username
    const response=await pool.query('SELECT* FROM post WHERE username=$1', [username])
    console.log(response.rows);
    res.json(response.rows)
}

//funcion searchuserid
const searchuserid=async(req,res)=>{
    const id_usuario =req.params.id_usuario
    const response=await pool.query('SELECT * FROM usuarios WHERE id_usuario=$1', [id_usuario])
    console.log(response.rows);
    res.json(response.rows)
}

//funcion searchusername
const searchusername=async(req,res)=>{
    const username = req.params.username
    const response= await pool.query('SELECT * FROM usuarios WHERE username=$1 ', [username])
    console.log(response.rows);
    res.json(response.rows)
}

//funcion likepost por posts
const likepost=async(req,res)=> {
    const id_post=req.params.id_post
    const response=await pool.query('SELECT* FROM liked WHERE id_post=$1', [id_post])
    console.log(response.rowCount);
    res.json(response.rowCount)

}

//funcion likeuser por usuario
const likeuser=async(req,res)=> {
    const id_usuario=req.params.id_usuario
    const response= await pool.query('SELECT *FROM liked WHERE id_usuario=$1', [id_usuario])
    console.log(response.rowCount);
    res.json(response.rows)
}

//funcion createlikepost crear like para post

const createlikepost=async(req,res)=> {
    const{like_id,id_post} = req.body
    const response = await pool.query('INSERT INTO liked(like_id,id_post) VALUES($1,$2)', [like_id,id_post])
    console.log(response);
    res.json(response.rows)
}

//funcion createlikeuser
const createlikeuser=async(req,res)=> {
    const{like_id,id_post} = req.body
    const response = await pool.query('INSERT INTO liked(like_id,id_usuario VALUES($1,$2)', [like_id,id_usuario])
    console.log(response);
    res.json(response.rows)
}

//funcion deletelikeuser
const deletelikeuser=async(req,res)=>{
    const id_usuario=req.params.id_usuario
    const response= await pool.query('DELETE * FROM liked WHERE id_usuario=$1',[id_usuario])
    console.log(response)
    res.json(response.rows);

}

//funcion deletelikepost
const deletelikepost=async(req,res)=>{
    const id_post =req.params.id_post
    const response= await pool.query('DELETE * FROM liked WHERE id_post=$1', [id_post])
    console.log(response);
    res.json(response.rows)

}

//funcion searchretweetid

const searchretweetid= async(req,res)=> {
    const id_post =req.params.id_post
    const response=await pool.query('SELECT *FROM retweet WHERE id_post=$1', [id_post])
    console.log(response);
    res.json(response.rowCount)
}

//funcion createretweet
const createretweet=async(req,res)=> {
    const {retweet_id,id_post} = req.body
    const response = await pool.query('INSERT INTO retweet(retweet_id,id_post VALUES($1,2$)', [retweet_id, id_post])
    console.log(response);
    res.json(response.row)
}

//funcion createfollowers
const createfollower=async(req,res)=> {
    const {follow_id, id_user1} = req.body
    const response = await pool.query('INSERT  INTO follow(follow_id,id_user1 VALUES(1$,2$)', [follow_id,id_user1])
    console.log(response);
    res.json(response.rowCount)
}

//funcion createfollowing
const createfollowing=async(req,res)=> {
    const {follow_id,id_user2} = req.body
    const response = await pool.query('INSERT INTO follow(follow_id,id_user2) VALUES($1,$2)', [follow_id,id_user2])
    console.log(response);
    res.json(response.row)
}

//funcion followeriduser
const followeriduser=async(req,res)=>{
    const id_user1=req.params.id_user1
    const response=await pool.query('SELECT * FROM follow WHERE id_user1=$1', [id_user1])
    console.log(response);
    res.json(response.rowCount)
}

//funcion followeruser
const followeruser=async(req,res)=>{
    const id_user2=req.params.id_user2
    const response=await pool.query('SELECT * FROM follow WHERE id_user2=$1', [id_user2])
    console.log(response);
    res.json(response.rowCount)
}

//funcion deletefollow
const deletefollow=async(req,res)=>{
    const id_user1 =req.params.id_user1
    const response = await pool.query('DELETE * FROM follow WHERE id_user1=$1', [id_user1])
    console.log(response);
    res.json(response.rows)

}

//funcion deletefollowing
const deletefollowing=async(req,res)=>{
    const id_user2 =req.params.id_user2
    const response = await pool.query('DELETE * FROM follow WHERE id_user2=$2', [id_user2])
    console.log(response);
    res.json(response.rows)
}



module.exports={
    createuser,
    modifyuser,
    createpost,
    editpost,
    searchidpost,
    searchusernamepost,
    searchuserid,
    searchusername,
    likepost,
    likeuser,
    createlikepost,
    createlikeuser,
    searchretweetid,
    createretweet,
    createfollower,
    createfollowing,
    followeriduser,
    followeruser,
    deletelikeuser,
    deletelikepost,
    deletefollow,
    deletefollowing
    
}


