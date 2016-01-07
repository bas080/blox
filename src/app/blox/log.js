(function(){
  var log = d3.select('.log');

  
  window.log = log;
  function log(v) {
    d3.select('')
    console.log('should log to body element', v);
    return v;
  }


})();


