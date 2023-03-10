const fs=require("fs");
/** 
Callaback function to read fileData
@param (Error) error
@param {buffer) fileData
@returns vold
*/
function readFirstFivecallback(error, fileData)
{
    if (error)
    {
        console.error (error)
        return;
    }
     //Ifeoovert ing the fileData which is buffer to string and splitting by line
     const Lines = filedata.toString().split ("\n");
     //slice the Lines to the first five and log them.
     Lines.slice (0,5).forEach ( (line)=>
     {
        console.log ( Line) ;
     });
}
 //function call with callback
fs. readFile("", readFirstFivecallback) ;