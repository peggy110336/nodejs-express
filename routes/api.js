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
     };
  });
  res.end();
};

exports.delete = function(req, res){
  console.log(">>>>>>>Delete.");
  res.end();
};