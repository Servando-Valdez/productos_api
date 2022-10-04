import { Sequelize} from "sequelize";
import dotenv from 'dotenv';
dotenv.config({path: '.env'});

export const connection = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER ,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
});

(async()=>{
  await connection.authenticate()
  .then(()=>{
    console.log('Succesful Connection');
  })
  .catch(()=>{
    console.log('Connection Error');
  }) 
})();

// try{
    //     await connection.authenticate();
    //     console.log('Succesful Connection');
    // }catch(error){
    //     console.log("Error: ", error.message);
    // }

// export const connection = new Sequelize({
//     database: process.env.DB_NAME,
//     username: "root",
//     password: process.env.DB_PASS,
//     host: "127.0.0.1",
//     dialect: "mysql",
//   });

  // const connection = new Sequelize({
  //   database: "school",
  //   username: "root",
  //   password: "123456",
  //   host: "127.0.0.1",
  //   dialect: "mysql",
  // });


  // try{
    //     await connection.authenticate();
    //     console.log('Succesful Connection');
    // }catch(error){
    //     console.log("Error: ", error.message);
    // }

// export const connection = new Sequelize(process.env.BD_NAME,process.env.DB_USER, process.env.DB_PASS, {
//     host:process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: 'mysql',
//     define: {
//         timestamps: true
//     },
//     pool: {//configuraciones de conexiones nuevas o existentes
//         max: 5, //maximo de conexiones a mantener
//         min: 0,
//         acquire: 40000,//30 segundos
//         idle: 10000, //no hay movimiento o visitas, 10 segundos para que la conexión finalice
//     },
//     // operatorsAliases: false //es algo que existia, mejor lo quitamos, porque está obsoleto
// });