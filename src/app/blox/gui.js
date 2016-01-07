//powered by d3
(function(blox){

  blox.gui = {};
  blox.gui.log = Log;
  blox.gui.block = Block;

  function Block(){
    var self = {};

    function fill(d){
      var selected = '#f33',
        objective = '#f3f',
        blank = '#999',
        selectedObjective = '#f3a';

      return ['#f33', '#333', '#f33', '#f33'][d-1];
    //return [selectedObjective, blank, objective,selected][d-1];
    //return ['#ccc','#f33','#f33','#ccc'][d-1];
    //return ['#f33','#3f3','#33f','#000'][d-1];
    }

    block.side = function(s){
      self.side = s;
      return block;
    };

    return block;
    function block(data){
      return function(){
        var rects = this.selectAll('rect').data(data);
        var blox = Math.floor(Math.sqrt(data.length));
        var side = self.side / blox;

        var x = function(d, i){
          return (i % blox) * side;
        };

        var y = function(d, i){
          return Math.floor(i / blox) * side;
        };

        this.attr({
          width: side * blox,
          height: side * blox
        });

        rects.enter().append('rect').attr({
          fill: fill,
          opacity: 0
        });

        rects.transition().duration(2000).attr({
          opacity: 1,
          fill: fill,
          stroke: 'black',
          'stroke-width': 1,
          x: x,
          y: y,
          width: side,
          height: side
        });

        rects.exit().remove();

        return rects;
      };
    }
  }

  function Log() {
    return log;
    function log(data){

      return function(){
        var items = this.selectAll('.log-item').data(data);

        items.attr({
          'class': 'log-item',
        });

        var itemEnter = items.enter().append('div');

        itemEnter.append('div')
          .attr({
            'class': 'log-title'
          })
          .text(prop('title'));

        itemEnter.append('div')
          .attr({
            'class': 'log-description'
          })
          .text(prop('description'));
      };
    }
  }

  //helper
  function prop(key) {
    return function(obj) {
      return obj[key];
    };
  }
})(blox);
