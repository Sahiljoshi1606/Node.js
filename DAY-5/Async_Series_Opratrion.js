

// mainly async this package are use for avoid a call back hell condition
// some included method is
// series
// parallel
// waterfall

const async = require('async');
const fs = require('fs');


async.series([
    function (callback) {
        fs.mkdir('./hello', { recursive: true }, (err) => {
            if (err) {
                return callback(err);
            }
            callback(null, "first task completed");
        });
    },
    function(callback){
        fs.writeFile('./hello/abc.txt' , 'hello node js' , (err) =>{
if(err){
    console.log('error occure')
}
else{
    console.log("fill write successfully")
     callback(null, "second task completed");

}
        })
    }
    ,
    function(callback){
        fs.unlink('./hello/abc.txt',(err)=>{
            if(err){
                console.log('error occure' +err)
            }
            else{
                console.log("delete fill successfully")
                 callback(null, "third task completed");
            }
        })
    },
    function(callback){
        fs.rmdir('./hello', (err) =>{
            if(err){
                console.log("error are occur" + err)
            }
            else{
                console.log('folder deleted successfully')
                callback(null , "fourth task is completed")
            }
        })
    }
      
  
],
function (err, results) {
    if (err) {
        console.log("error occurred:", err);
    } else {
        console.log(results);
    }
});
