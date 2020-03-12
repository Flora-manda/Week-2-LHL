/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const setupInput = function(conn) {
  let connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function() {
    conn.write('Say: LOVE');
    
    stdin.on('data', (key) => {
    if (key === '\u0003') {
      conn.write(process.exit());
    }
    if (key === 'w') {
      conn.write('Move: up');
    }
    if (key === 's') {
      conn.write('Move: down');
    }
    if (key === 'a') {
      conn.write('Move: left');
    }
    if (key === 'd') {
      conn.write('Move: right');
    }
  });
}
  handleUserInput();
  // Stores the active TCP connection object.

  return stdin;
}

module.exports = { setupInput };