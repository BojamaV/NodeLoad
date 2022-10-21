var loading = (function() { //variable name loading
  var h = ['.', '..', '...', '....']; //sequence of dots in order
  var i = 0;

  return setInterval(() => {
    i = (i > 3) ? 0 : i;
    console.clear();
    console.log(h[i]); //logs the output
    i++;
  }, 350); //ms value
})();

// clearInterval(loading) to stop the script
