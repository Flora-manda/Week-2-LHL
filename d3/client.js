const net = require('net');
const stdin = process.stdin;
const { IP, PORT } = require('./constants');


//Listens for data coming in from the command line
stdin.setEncoding('utf8');

/**
 * Establishes connection with the game server
 */

const connect = function() {

  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });


  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', function(data) {
    console.log(data)
  });

  conn.on('connect', () => 
    {console.log("Successfully connected to game server");
    conn.write('Name: FU');
    //setInterval(() => conn.write('Move: up'), 500);
    // setTimeout(() => conn.write('Move: up'), 500);
    // setTimeout(() => conn.write('Move: right'), 1000);
    // setTimeout(() => conn.write('Move: down'), 1500);
    // setTimeout(() => conn.write('Move: left'), 2000);
  });

  return conn;
}

console.log('Connecting ...');

module.exports = { connect };