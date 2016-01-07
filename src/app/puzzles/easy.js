(function(puzzle){

  puzzle({
    name: 'Simon says return "true"',
    side: 1,
    loop: function(){
      return true;
    },
    on: {
      complete: function(){
        return 'complete';
      },
      initiate: function(){
        return 'initiate';
      }
    }
  });

  puzzle({
    name: 'Simon says return "false"',
    side: 1,
    loop: function(){
      return false;
    }
  });

  puzzle({
    name: 'First 0th',
    side: 2,
    loop: function(index){
      return (index == 0);
    }
  });

  puzzle({
    name: 'First 2nd',
    side: 2,
    loop: function(index){
      return (index == 1);
    }
  });

  puzzle({
    name: 'Last but not least',
    side: 3,
    loop: function(index, length){
      return (index == length);
    }
  });

  puzzle({
    name: 'Almost last',
    side: 3,
    loop: function(index, length){
      return (index == length-1);
    }
  });

  puzzle({
    name: 'Invert!',
    side: 2,
    loop: function(index,length){
      return (index != 0);
    }
  });

  puzzle({
    name: 'Compliment!',
    side: 5,
    loop: function(index, length){
      return (index != length)
    }
  });

})(blox.puzzle);
