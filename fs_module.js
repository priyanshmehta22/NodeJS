const fs= require("fs");
text=fs.readFileSync("NODE_SAMPLE_FILE.txt","utf-8",(err,data)=>{
    console.log(data);
});
// console.log(text);

// text=text.replace("hello","PRI");
text="ffsdfsfs";
console.log(text);

fs.writeFile("NODE_SAMPLE_FILE.txt",text,(err)=>{
    console.log("done");
});
   
//fs.appendFile()
fs.appendFile("NODE_SAMPLE_FILE2.txt"," YOYOYO",function(err){
    if(err) throw err;
    console.log("appended");
});

//fs.open()
fs.open("NODE_SAMPLE_FILE.txt","w", (err)=>{
    if(err) throw err;
    console.log("done hehe");
});

//fs.writeFile() 
fs.writeFile("NODE_SAMPLE_FILE3.txt","this is a file created using fs.writefile",(err)=>{
    if(err) throw err;
    console.log("done");
});

//DELETE FILE

//fs.unlink()
// fs.unlink("NODE_SAMPLE_FILE2.txt",(err)=>{
//     if(err) throw err;
//     console.log("deleted");
// });

//RENAME FILE
//fs.rename()
fs.rename("NODE_SAMPLE_FILE.txt","NODE_SAMPLE_FILE.txt",(err)=>{
    if(err) throw err;
    console.log("renamed");
});
