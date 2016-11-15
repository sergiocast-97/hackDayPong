

var goingup;
var player1move = firebase.database().ref('moves/player1/y');
player1move.on('value', function(snapshot) {
  if(game){
    console.log(snapshot.val())
    var y = snapshot.val();

      y = game.player.y + (10*y);


    updatePlayer(1,y);
  }
});
