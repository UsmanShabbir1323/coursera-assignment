(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i][0].toLowerCase(); // Access the first letter using array indexing
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]); // Use the byeSpeaker function
        } else {
            HelloSpeaker.speak(names[i]); // Use the helloSpeaker function
        }
    }
})();
