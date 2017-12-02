

var goingup;
var player1move = firebase.database().ref('moves/player1/a');
player1move.on('value', function(snapshot) {
  if(game){
    //console.log(snapshot.val())
    var y = (canvas.height/12) * snapshot.val();

    y = game.player.y + (y);//(2+(2*y));
    if(y>canvas.height){y = canvas.height;}
    if(y<0){y=0;}

    updatePlayer(1,y);
    document.getElementById('angle').innerHTML = ""+snapshot.val()+"      :    "+y;
  }
});

var player2move = firebase.database().ref('moves/player2/a');
player2move.on('value', function(snapshot){
  if(game){
      //console.log(snapshot.vale() )
      var y2 = (canvas.height/12 ) * snapshot.val();

      y2 = game.player2.y2 + (y2);
      if( y2>canvas.height){ y2 = canvas.height; }
      if(y2<0){y2=0}

      updatePlayer2(1,y);
      document.getElementById('angle').innerHTML = ""+snapshot.val()+"     :   "+y;
  }
});

//var angle = Math.tan(snapshot.val());
//var adjacent = (canvas.height/2);
//var opposite = adjacent * angle;
//y = opposite;
