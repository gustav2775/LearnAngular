'use strict';
const express = require('express');

const serverSSE = require('./main/sse');
const serverLP = require('./main/long_polling');

require('./main/ws');

const serverSSEPort = 5550; 
const serverLPPort = 5551; 
const server3Port = 5552; 


serverSSE.listen(serverSSEPort, () => {
  console.log(`Server sse is running on http://localhost:${serverSSEPort}`);
})

serverLP.listen(serverLPPort, () => {
  console.log(`Server long pulling is running on http://localhost:${serverLPPort}`);
})
