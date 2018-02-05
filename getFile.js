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
let filePathSpineImg = {};
for(let i=0;i<fileImg.length;i++){
    let thisFilePath = fileImg[i].path + fileImg[i].filename;
    filePath.push(thisFilePath.replace(/^.\//,''));
    filePathImg.push(thisFilePath.replace(/^.\//,''));
}
for(let i=0;i<fileSound.length;i++){
    let thisFilePath = fileSound[i].path + fileSound[i].filename;
    filePath.push(thisFilePath.replace(/^.\//,''));
    filePathSound.push(thisFilePath.replace(/^.\//,''));
}
// console.log(fileSpine)
for(let i=0;i<fileSpine.length;i++){
    var index1=fileSpine[i].filename.lastIndexOf(".");
    var index2=fileSpine[i].filename.length;
    var suffix=fileSpine[i].filename.substring(index1+1,index2);
    if(suffix == "atlas"){
        filePath.push(fileSpine[i].path.replace(/^.\//,'')+fileSpine[i].filename);
        filePathSpine.push(fileSpine[i].path+fileSpine[i].filename);
    }
    if(suffix == "png"){
        let name = fileSpine[i].path.replace(/^.\//,'').replace(/(.*\/)[^\/]+\..+/,'$1').replace(/\//g,'_').replace(/\_$/,"");
        if(!filePathSpineImg[name]){
            filePathSpineImg[name] = [];
        }
        filePathSpineImg[name].push(fileSpine[i].path.replace(/^.\//,'').replace(/(.*\/)[^\/]+\..+/,'$1')+fileSpine[i].filename)
    }   
}
console.log(filePathSound)
let data = {
    "filePath":filePath,
    "filePathSpineImg":filePathSpineImg
}

// console.log(filePathImg)


// var str = "[";
// for(let i=0;i<fileImg.length;i++){
//     str+=JSON.stringify(fileImg[i])+",";
// }
// str = str + "]";
// console.log(data);
var fs = require('fs');
fs.writeFileSync('json/' + "filePath.json", JSON.stringify(data));
// fs.writeFile('json/' + "filePath.json", data , function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("The file was saved!");
// });