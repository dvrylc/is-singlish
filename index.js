'use strict';

var phrases = require('./phrases');

module.exports = str => {
  if (typeof str !== 'string') {
    return Promise.reject(new Error('String required'));
  }
  
  for (var i = 0; i < phrases.length; i++) {
    var phrase = phrases[i];
    var re = new RegExp(`\\b${phrase}\\b`, 'gi');
    
    if (re.test(str)) return Promise.resolve(true);
  }
  
  return Promise.resolve(false);
}
