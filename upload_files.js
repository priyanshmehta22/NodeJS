var http = require('http');
var formidable = require('formidable');
var fs= require('fs');

http.createServer((req,res)=>{
    if(req.url=='/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, (err,fields,files)=>{
            var oldpath = files.filetoupload.filepath;
            var newpath = 'C:/Users/Priyansh Mehta/Desktop/NODE/' + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, (err)=>{
                if(err) throw err;
                res.write('File uploaded and moved!');
                res.end();
        });
        });
    }
        else{
            res.writeHead(200,{'Content-type':'text/html'});
            res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
            res.write('<input type="file" name="filetoupload"><br>');
            res.write('<input type="submit">');
            res.write('</form>');
            return res.end();
        }
    }).listen(3030);