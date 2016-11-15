

var goingup;
var player1move = firebase.database().ref('moves/player1/y');
player1move.on('value', function(snapshot) {
  if(game){
    console.log(snapshot.val())
    var angle = Math.tan(snapshot.val());
    var adjacent = (canvas.height/2);
    var opposite = adjacent * angle;
    y = opposite;
    console.log(y  
    updatePlayer(1,y);
  }
});
