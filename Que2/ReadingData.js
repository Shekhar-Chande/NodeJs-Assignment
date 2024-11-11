const fs = require('fs');
fs.readFile('input.txt', (err, data)=>{
    if(err){
        console.log("An error has occured while readng a file: ", err);
        return;
    }

    else{
        console.log("File Content:", data.toString());     
    }
})