
// readline example
// line is a keyword of readline

const readline = require('readline');
const rl = readline.createInterface(process.stdin , process.stdout);
rl.setPrompt("user age");
rl.prompt();

rl.on('line', (age)=>{
    console.log("age are received", age);
    if(age >= 18){
        console.log("eligible for vote")
    }
    else{
        console.log("not eligible")
    }
    rl.close()
});






// linebyline example
// push
// resume
// error
// this is a keyword of linebyline package



const readline = require('linebyline')

 rl = readline ("./abc.txt")

rl.on('line', function(line , lineCount , lineByte){
    console.log("file data : " , line)
    console.log("number of line  : " , lineCount)
    console.log("file size : " , lineByte)

})
.on('error', function(e){
    // error
})
rl.on('push', ()=>{
    console.log("push event are invoke")
})

rl.on('resume', ()=> {
    console.log('resume event are invoke')
});