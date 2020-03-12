const { connect } = require('./client');
const { setupInput } = require('./input');

// play.js
let conn = connect();

setupInput(conn);
