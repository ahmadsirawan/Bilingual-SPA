
(function () {

  
  var partialsCache = {}
  

  
  function getContent(fragmentId, callback){

    
    if(partialsCache[fragmentId]) {

     
      callback(partialsCache[fragmentId]);

    } else {
      
      $.get(fragmentId + ".html", function (content) {

        
        partialsCache[fragmentId] = content;

        callback(content);
      });
    }
  }

  function navigate(){

    
    var fragmentId = location.hash.substr(1) ;

    
    getContent(fragmentId, function (content) {
      $("#content").html(content);
    });

    
  }

  
  if(!location.hash) {

    location.hash = "#home";
  }
 
  
  navigate();

  $(window).bind('hashchange', navigate);
}());