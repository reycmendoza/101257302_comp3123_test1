let fs = require('fs')
let path = require('path')
let dirname = "Logs"
let process = require('process')
let content = 'This is my text'

if (!fs.existsSync(dirname)){
    fs.mkdirSync(dirname);
}

process.chdir(dirname)

for(let x = 0; x < 10; x++){
    let filename = `log${x}.txt`
    fs.writeFile(filename, content, function (err)  {
        if (err){
           throw err;
        }
    });
    console.log(filename)
}

if(fs.existsSync(dirname)){
    fs.readdir(dirname, (err, files)=>{
        if(err){
            throw err;
        }
        for (let file of files){
            fs.unlink(path.join(dirname,file),err =>{
                if (err){
                    throw err;
                }
            });
            console.log(`delete files... ${file}`);
        }
        fs.rmdirSync(dirname)
    });
}