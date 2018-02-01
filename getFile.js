//获取项目工程里的图片
var fs = require('fs');//引用文件系统模块
    
function readFileList(path, filesList) {
        var files = fs.readdirSync(path);
        files.forEach(function (itm, index) {
            var stat = fs.statSync(path + itm);
            if (stat.isDirectory()) {
            //递归读取文件
                readFileList(path + itm + "/", filesList)
            } else {
    
                var obj = {};//定义一个对象存放文件的路径和名字
                obj.path = path;//路径
                obj.filename = itm//名字
                filesList.push(obj);
            }
    
        })
    
    }
var getFiles = {
    //获取文件夹下的所有文件
    getFileList: function (path) {
        var filesList = [];
        readFileList(path, filesList);
        return filesList;
    }
};
//获取文件夹下的所有文件
// console.log(getFiles.getFileList("./sound/"))
// console.log(getFiles.getFileList("./spine/"))
// console.log(getFiles.getFileList("./images/"))
let fileImg = getFiles.getFileList("./images/");
let fileSound = getFiles.getFileList("./sound/");
let fileSpine = getFiles.getFileList("./spine/");
let filePath = [];
let filePathImg = [];
let filePathSound = [];
let filePathSpine = [];
let filePathSpineImg = [];
for(let i=0;i<fileImg.length;i++){
    let thisFilePath = fileImg[i].path + fileImg[i].filename;
    filePath.push(thisFilePath);
    filePathImg.push(thisFilePath);
}
for(let i=0;i<fileSound.length;i++){
    let thisFilePath = fileImg[i].path + fileImg[i].filename;
    filePath.push(thisFilePath);
    filePathSound.push(thisFilePath);
}
// console.log(fileSpine)
for(let i=0;i<fileSpine.length;i++){
    console.log(fileSpine[i].filename.search(/^.+\/(\w+\.\w+)/i));
    if(fileSpine[i].filename.replace(/^.\//,'').replace(/.*\/([^\/]+)\.(.+)/,'$2') == "atlas"){
        filePathSpine.push(fileSpine[i].path+fileSpine[i].filename);
    }
    if(fileSpine[i].filename.replace(/^.\//,'').replace(/.*\/([^\/]+)\.(.+)/,'$2') == "png"){
        let name = fileSpine[i].path.replace(/^.\//,'').replace(/(.*\/)[^\/]+\..+/,'$1').replace(/\//g,'_').replace(/\_$/,"");
        if(!filePathSpineImg[name]){
            filePathSpineImg[name] = [];
        }
        filePathSpineImg[name].push(fileSpine[i].path+fileSpine[i].filename)
    }   
}
// console.log(filePathSpine,filePathSpineImg)
// console.log(filePathImg)


// var str = "[";
// for(let i=0;i<fileImg.length;i++){
//     str+=JSON.stringify(fileImg[i])+",";
// }
// str = str + "]";

// var fs = require('fs');
// fs.writeFile('json/' + "images.txt", str , function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("The file was saved!");
// });