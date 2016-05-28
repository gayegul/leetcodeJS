/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

var getHint = function(secret, guess) {
  var bull = 0;
  var cow = 0;
  var holder = {};
  var index = {};
  
  for(var i = 0; i < secret.length; i++) {
    if(!holder[secret[i]]) holder[secret[i]] = 1;
    else holder[secret[i]]++;
  }

  for(var j = 0; j < secret.length; j++) {
    if(secret[j] === guess[j]) {
      bull++;
      holder[secret[j]]--;
      index[j] = true;
    }
  }

  for(var k = 0; k < secret.length; k++) {
    if(holder[guess[k]] && holder[guess[k]] > 0 && !index[k]) {
      cow++;
      holder[guess[k]]--;
    }
  }

  return bull + 'A' + cow + 'B';
};
