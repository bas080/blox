//create a block instance (wtthout ui)
(function(blox) {

  blox.block = Block;

  //power constructor
  function Block() {

    //private
    var p = {};

    window.log = log;

    function log(v) {
      console.log('should log to body element', v);
    }

    //set the puzzle on the block
    block.puzzle = function puzzle(defs) {

      p.puzzle = defs;

      window.side = defs.side;

      return p.puzzle;
    };

    block.answer = answer;

    function answer() {
      return result(p.puzzle.loop);
    }

    block.eval = _eval;

    function _eval(string) {

      function bind(str) {
        return eval(str);
      }

      var a = result(function(index, length) {
        //use in case when context must be reduced
        return bind.call(window, string);
      });

      var b = answer();

      //seperate correctness check from eval
      var s = a.map(function(item, index) {
        return (item + 1) + b[index];
      });

      block.complete = s.filter(function(i) {
        return (i == 1 || i == 3)
      }).length / a.length;

      return s;
    };

    return block;

    function block() {}

    function result(fn) {
      var l = Math.pow(p.puzzle.side, 2);
      window.length = l;
      var answer = times(l, function(i, l) {
        window.index = i;

        window.x = index % side;
        window.y = Math.floor(index / side);

        return fn(i, l);
      });

      return answer.map(function(item) {
        if (item)
          return 1;
        return 0;
      });
    }
  }

  function times(times, fn) {
    var r = [];
    for (var i = 0, l = times; i < l; i++) {
      r.push(fn(i, times - 1));
    }
    return r;
  }


})(blox);
