var five = require("johnny-five");
var firebase = require("firebase");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  //var rele = new five.Relay(8);

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  this.repl.inject({
    led: led
    //rele : rele
  });

  var config = {
    apiKey: "AIzaSyDraQbvKX87YbKEwSepRWqtXJN_gxzOS7o",
    authDomain: "iot-tutorial-ce820.firebaseapp.com",
    databaseURL: "https://iot-tutorial-ce820.firebaseio.com",
    storageBucket: "iot-tutorial-ce820.appspot.com",
  };
  firebase.initializeApp(config);

  //led.toggle();

  var starCountRef = firebase.database().ref('lampada').on('value', function(snapshot) {
    let lampada = snapshot.val();

    if (lampada == 'on') {
      led.on();
    } else {
      led.off();
    }
  });

});
