(function(global){

  //namespace
  var blox = {};
  global.blox = blox;

  //private state;
  var p = {};

  p.puzzles = [];

  //register a new puzzle
  blox.puzzle = puzzle;
  function puzzle(defs){
    p.puzzles.push(defs);
  };

  //get all the puzzles that are registered
  blox.puzzles = puzzles;
  function puzzles(){
    return p.puzzles;
  }

})(this);
