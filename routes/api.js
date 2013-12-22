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
  	"server": "Peggy's Server",
    "time": new Date().toISOString(),
    "count": count
  };
  res.send(data);
};