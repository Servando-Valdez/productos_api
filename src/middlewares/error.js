import fs from 'fs';
const fileErrors = './errors.txt';
export const errorHandler = async(error, req, res, next)=>{
    console.log('Error:',error.message);
    fs.writeFileSync(fileErrors, JSON.stringify(error.message));
    res.status(500).json(`Error: ${error.message}`);
    next();
};

// const writeFile = (file, content) =>{
//     fs.writeFile()
// }   