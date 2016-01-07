(function(puzzle){

  puzzle({
    name: 'gt 3',
    side: 5,
    loop: function(index, length){
      return (x > 3);
    }
  });

  puzzle({
    name: 'Same same, BUT different',
    side: 5,
    loop: function(index, length){
      return (y < 3);
    }
  });

  puzzle({
    name: 'Combine',
    side: 5,
    loop: function(index, length){
      return (y < side/2 &&
              x > side/2);
    }
  });

  puzzle({
    name: 'Stairway',
    side: 5,
    loop: function(index, length){
      return (y + x < side);
    }
  });

  puzzle({
    name: 'Line air',
    side: 10,
    loop: function(index, length){
      return (x - y == 0);
    }
  });

  puzzle({
    name: 'Equals one side',
    side: 10,
    loop: function(index, length){
      return (x + y == side);
    }
  });

  puzzle({
    name: 'Combined',
    side: 10,
    loop: function(index, length){
      return ( x + y == side ||
               x - y == 0 );
    }
  });

  puzzle({
    name: 'HuGE',
    side: 20,
    loop: function(index){
      return (x * y) / x;
    }
  });

})(blox.puzzle);

