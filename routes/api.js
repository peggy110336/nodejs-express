exports.time = function(req, res){
  var time = 
  {
  	"Time" : Date().toLocaleString(),
  }
  res.send(time);
};

exports.info = function(req, res){
  var name = 
  {
  	"Server's name : Peggy." :;
  }
  var timee = 
  {
  	"Time" : Date().toLocaleString(),
  }
  res.send(name,timee);
};