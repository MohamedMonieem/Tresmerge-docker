const  express = require('express');
const mongoose = require('mongoose') ;
const redis = require('redis');
// const  {Client} = require('pg');

// init app
const port= process.env.Port || 4000;
const app = express();

// mongodb connect
// mongoose.connect('mongodb://username:password@host:port/database?options...');  from mongoose docs
const DB_USER=  'root'
const DB_PASSWORD= 'example'
const DB_PORT = 27017 ;
// const DB_HOST = '172.18.0.2' 
const DB_HOST = 'mongo'
const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`

//now use connect func
mongoose.connect(URI).
then( ()=>console.log('connect to db...')).
catch((err)=>console.log('failed connect to db:' ,err))


// //redis connect 
// // createClient({ url: 'redis://alice:foobared@awesome.redis.server:6380'});

const REDIS_PORT= '6379'
const REDIS_HOST = 'redis'
const redisClient = redis.createClient({url: `redis://${REDIS_HOST}:${REDIS_PORT}`})
  redisClient.on('error', (err) => console.log('Redis Client Error', err))
  redisClient.on('connect' , () => console.log('connect to redis ...') )
  .connect()


 // pg connect
// const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
//
//  const DB_USER= 'root';
// const DB_PASSWORD = 'example';
// const DB_HOST= 'postgres';
// const DB_PORT= 5432;
//  const URI = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;  

//  const client =  new Client({
//   connectionString: URI,
// });
// await client.connect() 
//
// const client = new Client({
//     connectionString : URI,
// });
//  client.connect()
//  .then( () =>console.log('connect to postgresdb...'))
//  .catch((err)=>console.log('failed connect to postgresdb:' ,err))






app.get('/' ,(req,res) => {
  redisClient.set('products', ' categories...')
  res.send('<h1>Hello using dockerhub </h1>') } );


  app.get('/data' , async (req,res) => {
    const products = await redisClient.get('products')
     redisClient.get('products' , 'categories...')
     res.send(`<h1>Hello hhhhh</h1>  <h2> ${products}</h2> `)  } );
    

app.listen(port, ()=> console.log(`app is run on port: ${port}`))

// ./.env

