(function (window){
    var HelloSpeaker = {};
    var speakWord = "Hello";
    
    HelloSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    }
     
     window.HelloSpeaker = HelloSpeaker;
    })(window);