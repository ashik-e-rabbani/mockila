const file = require('fs')

file.readFile('app.js','utf-8',(msg)=>{
    console.log('DONE!!!');
});

file.writeFile('app.js','Replace all and insert me',(msg)=>{
    console.log('DONE!!!');
});

file.writeFile('appNew.js','create new file and insert me',(msg)=>{
    console.log('DONE!!!');
});

file.appendFile('app.js','Replace all and insert me',(msg)=>{
    console.log('DONE!!! data appended to file');
});

file.readFile('app.js','utf-8',(msg)=>{
    console.log('DONE!!!');
});

