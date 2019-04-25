// Logging made simple (tm)

const debug =  function(text) {
    console.log(text);
  }
  
  const info =  function(text) {
    console.log(text);
  }
  
  const error =  function(text) {
    console.log(text);
  }
  
  const _ = function(text) {
    console.log(text);
  }
  
  module.exports = {
    debug, info, error, _
  };
  