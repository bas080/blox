(function(puzzle){

  puzzle({
    name: 'checkers',
    side: 8,
    loop: function(index, length){
      return ((index % 2) - y % 2);
    }
  });

  puzzle({
    name: 'Sin',
    side: 21,
    loop: function(){
      return (Math.floor(Math.sin(index)));
    }
  })

  puzzle({
    name: 'Math.pow',
    side: 20,
    loop: function(){
      return Math.pow(x,2) == y
    }
  });

  puzzle({
    name: '',
    side: 9,
    loop: function(){
      return (x % 2 || ( (y == 0 || y == side -1) && (index % 4)));
    }
  })

  puzzle({
    name: 'PI - 3',
    side: 11,
    loop: function(){
      return (Math.PI.toString()[index]-3);
    }
  })

  puzzle({
    name: 'pyramid',
    side: 9,
    loop: function(index, length){
      var h = Math.floor(side / 2);
      var x = x;
      var y = y;
      return false; //TODO
    }
  });

})(blox.puzzle);
