#!/usr/bin/env node

/*************************************************************************************
** An example on how to execute in nodejs env using a gist generated link or a repo **
**************************************************************************************/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Can we have some infos from ya?', ans => {
  console.log(`${ans}!`);
  console.log('Thank you');
  readline.close();
});
