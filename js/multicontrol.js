


var player1move = firebase.database().ref('moves/player1/y');
player1move.on('value', function(snapshot) {
console.log(snapshot.val())
  //updatePlayer(1, snapshot.val().y);
});
