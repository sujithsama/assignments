const prompt = require('prompt-sync')();
const fs = require('fs');
const zlib = require('zlib');
let loop = 9;
function createfile() {
    let filename = prompt(`Enter your file name: `);
    let desc = prompt(`File Content: `);
    // fs.writeFile(`${filename}`, `${desc}`, function (err) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         console.log("creating a file completed");
    //     }
    // }
       fs.writeFileSync(`${filename}`, `${desc}`);
       console.log("File created succesfully");
    
}
function appendfile() {
    let filename = prompt(`Enter your file name: `);
    let desc = prompt(`File Content: `);
    // fs.appendFile(`${filename}`, `${desc}`, function (err) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         console.log("appending to file completed");
    //     }
    // })
    fs.appendFileSync(`${filename}`, `${desc}`);
    console.log(`appended to file sucessfully`);
}
function copyfile() {
    let source = prompt(`enter file source: `);
    let dest = prompt(`Enter file destination: `);
    // fs.copyFile(`${source}`, `${dest}`, function (err) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         console.log(`File copied sucessfully`);
    //     }
    // })
    fs.copyFileSync(`${source}`, `${dest}`);
    console.log(`copied ${source} to ${dest} sucessfully`);
}
function makedir() {
    let dir = prompt('Enter directory name: ');
    // fs.mkdir(`${dir}`, function (err) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     console.log("directory created");
    // })
    fs.mkdirSync(`${dir}`);
    console.log("directory created");
}
function removedir() {
    let dir = prompt(`enter directory: `)
    // fs.rmdir(`${dir}`, function (err) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     console.log("directory removed");
    // })
    fs.rmdirSync(`${dir}`);
    console.log("directory removed");
}
function delfile() {
    let fname = prompt(`Enter filename to remove: `);
    // fs.unlink(`${fname}`, function (err) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         console.log(`File deleted sucessfully`);
    //     }
    // })
    fs.unlinkSync(`${fname}`);
    console.log(`File deleted sucessfully`);
}
function zipfile() {
    let fname = prompt(`Enter file to be zipped: `);
    // zlib.createGunzip('demo.txt');
    // Compress the file input.txt to input.txt.gz
    fs.createReadStream(`${fname}`)// read file
        .pipe(zlib.createGzip())// zip it
        .pipe(fs.createWriteStream(`${fname}.gz`));//write to another file as zip

    console.log("File Compressed.");
}
function unzipfile() {
    let fname = prompt(`Enter zipped file name`);
    let b = fname.split('.gz');
    fs.createReadStream(`${fname}`)// read file
        .pipe(zlib.createGunzip())// zip it
        .pipe(fs.createWriteStream(`${b[0]}`));//write to another file as zip

    console.log("File DeCompressed.");
}

while (loop != 10) {
    console.log(`1.create a file with some contents`);
    console.log(`2.append to file`);
    console.log(`3.copy to another location`);
    console.log(`4.creating a dir`);
    console.log(`5.removing a dir`);
    console.log(`6.deleting the file`);
    console.log(`7. zip the file`);
    console.log(`8. unzip the file`);
    console.log(`10. To exit`);
    var resp = 0;
    resp = prompt('Enter your choice?');
    console.log(resp);
    if (resp == 10) {
        loop = 10;
    }
    switch (resp) {
        case '1': createfile();
                   
            break;
        case '2': appendfile();
            break;
        case '3': copyfile();
            break;
        case '4': makedir();
            break;
        case '5': removedir();
            break;
        case '6': delfile();
            break;
        case '7': zipfile();
            break;
        case '8': unzipfile();
            break;
        default:
            console.log(`Invalid input`);
            break;
    }
}







