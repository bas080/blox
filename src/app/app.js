//create a block
var block = blox.block()

//get the fourth puzzle
var level = 0;
var puzzle = blox.puzzles()[level];

var freemode = false;

//set the block it's puzzle
block.puzzle(puzzle);

(function(){
  setInterval(function(){

    if (!freemode && block.complete == 1){
      level +=1;
      puzzle = blox.puzzles()[level]; //do something next
      block.puzzle( puzzle);
      //d3.select('.input').text('');
    }

    var str = d3.select('.input').text();
    var result = block.eval(str);
    //generate the block's answer

    if (!freemode){
      var answer = block.answer()
      var sum = answer.map(function(item, index){
        return item + result[index]
      });
    }

    d3.select('.name').text(
      puzzle.name
    );

    var gui = blox.gui.block()
      .side(512);

    var log = blox.gui.log();

    d3.select('.blocks').call(gui(result));
    d3.select('.log').call(log(blox.log));

  }, 2000);

})();
