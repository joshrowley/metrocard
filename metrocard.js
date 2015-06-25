function calcMetrocard (currentValue) {
  var results = [];
  var start   = 550;
  var end     = 6000;

  while (start <= end) {
    var bonus     = Math.round(start * 1.11 * 5)
    var cardValue = Math.round(currentValue + bonus);
    if (cardValue % 275 === 0) { results.push(start / 100); }
    start += 5;
  }

  return results;
}

var results = calcMetrocard(.95);
console.log(results);
