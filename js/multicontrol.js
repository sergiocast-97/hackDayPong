


var player1move = firebase.database().ref('moves/player1/y');
player1move.on('value', function(snapshot) {
  if(game){
    console.log(snapshot.val())
    var y = snapshot.val();
    if(y >0){
      y = game.player.y + 1;
    }
    else if(y<0){
      y = game.player.y -1;
    }

    updatePlayer(1,y);
  }
});
