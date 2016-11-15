/* player script , reads mobile y value and passes to firebase for game client */
    var gn = new GyroNorm();

    gn.init().then(function(){
        gn.start(function(data){
          console.log("here!")
            // Process:
            // data.do.alpha    ( deviceorientation event alpha value )
            // data.do.beta     ( deviceorientation event beta value )
            // data.do.gamma    ( deviceorientation event gamma value )
            // data.do.absolute ( deviceorientation event absolute value )

            // data.dm.x        ( devicemotion event acceleration x value )
            // data.dm.y        ( devicemotion event acceleration y value )
            // data.dm.z        ( devicemotion event acceleration z value )

            // data.dm.gx       ( devicemotion event accelerationIncludingGravity x value )
            // data.dm.gy       ( devicemotion event accelerationIncludingGravity y value )
            // data.dm.gz       ( devicemotion event accelerationIncludingGravity z value )

            // data.dm.alpha    ( devicemotion event rotationRate alpha value )
            // data.dm.beta     ( devicemotion event rotationRate beta value )
            // data.dm.gamma    ( devicemotion event rotationRate gamma value )
            writeUserData(data.dm.y,data.dm.gy);
        });
    }).catch(function(e){
      document.getElementById("y").innerHTML = "ERROR!";
      // Catch if the DeviceOrientation or DeviceMotion is not supported by the browser or device
    });

function writeUserData(y, gy) {
  document.getElementById("y").innerHTML = ""+y+"";
  document.getElementById("gy").innerHTML = ""+gy+"";
  firebase.database().ref('moves/player/' + player).set({
    'y': y,
    'gy': gy
  });
}
