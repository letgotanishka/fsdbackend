const fs = require('fs');

const write=()=>{

    const data="I am new file"
    fs.writeFile("./data.txt",data,(err)=>{
        if(err)
            console.log("Error writing File",err);
        else
        console.log("File written Successfully");
    });
}
write("I am new data");