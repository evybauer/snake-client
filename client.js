const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT

  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: ELB');
  });

    conn.on('connect', () => {
      console.log("Message successfully sent");
      conn.write('Say: Hello there. :) ');
  });

  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write('Move: up');
  //   }, 50) 
  // });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};


module.exports = {connect};
