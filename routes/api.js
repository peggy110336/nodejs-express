var vcard = [];

exports.creat = function(req, res){
  console.log(">>>>>>>Creat.");
  var person = 
	{
		nickname : "",
		name : "",
		tel : ""
	};

  person.nickname = req.params.nickname;
  person.tel = req.query.tel;
  person.name = req.query.name;

  vcard.push(person);
  res.end();
  
};

exports.read = function(req, res){
  console.log(">>>>>>>Read.");
  res.send(vcard);
  res.end();
};

exports.update = function(req, res){
  console.log(">>>>>>>Update.");
  var nickname = req.params.nickname;

  vcard.forEach(function (entry)  {
     if (entry.nickname === nickname ) {
     	console.log("Found!");

     	entry.name = req.query.name;
     	entry.tel = req.query.tel;
     }
  });
  res.end();
};

exports.delete = function(req, res){
  console.log(">>>>>>>Delete.");

  var nickname = req.params.nickname;
  var newvcard = [];
  vcard.forEach(function (entry)  {
   if (entry.nickname !== nickname ) {
        newvcard.push(entry);
    }
  });

vcard = newvcard;

  res.end();
};

exports.upload = function(req, res) {
 
     var fs = require('fs');
     var path = require('path');
     // var ext = path.extname(req.files.file.path);
     var filename = req.params.nickname + '.jpg';
     var type = req.params.type;   // 'photo' or 'voice'
 
     fs.readFile(req.files.file.path, function (err, data) {
         var newPath = path.join(__dirname, '../frontend/', 'upload',  filename);
 
         fs.writeFile(newPath, data, function (err) {
             if (err) {
                 res.json({status: 'error', message: err});
             } else {
                 res.json({status: 'ok'});
            }
         });
     });
  };