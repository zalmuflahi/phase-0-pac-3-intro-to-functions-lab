function shout(string) {
return string. toUpperCase();
  }
  function whisper(string) {
    return string. toLowerCase();
      }
      function logShout(string) {
        console.log(string. toUpperCase());
          }
          function logWhisper(string) {
            console.log(string. toLowerCase());
              }
              const string = "HELLO!";

console.log(string);
console.log(string.toUpperCase());

console.log(string === string.toUpperCase());

function sayHiToHeadphonedRoommate(string){
    if(string === "Let's have dinner together!"){
        return "I would love to!";
    } else if(string === string.toLowerCase()){
        return "I can\'t hear you!"
    } else if(string === string.toUpperCase()){
        return "YES INDEED!"
    }
}
