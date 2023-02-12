const fs=require("fs");

function readUTF8File(filePath)
{
    fs.readFile(filePath,"UTF-8",(data,error)=>
     {
        if (error)
        {
            console.error(error);
            return
        }
        console.log(data)
    });
}

readUTF8File("./1.txt");
