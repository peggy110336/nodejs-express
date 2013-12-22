exports.time = function(req, res){
  var time = 
  {
  	"Time" : Date().toLocaleString(),
  }
  res.send(time);
};

var count = 0;
exports.info = function(req, res){
  count ++;
  var data = 
  {
  	"Server's name " : "Peggy's server.",
  	"Now Time " : Date().toLocaleString(),
    "API calls " : count
  };
  res.send(data);
};