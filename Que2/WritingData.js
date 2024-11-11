const fs = require('fs')

const content = "I am good, What About You ?"

fs.writeFile('output.txt', content, (err)=>{
    if(err){
        console.log("An error occured while writing into file", err);
        return;
    }
    else{
        console.log("Content has been written Successfully");      
    }
})