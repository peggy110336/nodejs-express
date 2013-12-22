var vcard = [];

exports.read = function(req, res){
	var person = 
	{
		name : "",
		tel : ""
	};

  console.log(">>>>>>>Read.");
  person.tel = req.query.tel;
  person.name = req.query.name;
  vcard.push(person);
  res.end();
};
exports.creat = function(req, res){
  console.log(">>>>>>>Creat.");
  res.send(vcard);
  res.end();
  
};
exports.update = function(req, res){
  console.log(">>>>>>>Update.");
  res.end();
};
exports.delete = function(req, res){
  console.log(">>>>>>>Delete.");
  res.end();
};