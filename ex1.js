var fs = require('fs');
var filepath = "input.txt";

fs.readFile(filepath, function(err, contents){
  if(err) return console.err(err);

  console.log(countDistance(contents.toString()));
});

//returns number of steps away from starting position
function countDistance(moves){
  moves = moves.split(", ");
  var x = 0;//relative to start position
  var y = 0;
  var direction = 0; //0 = north 1=east 2=south 3=west

  for(var i = 0; i < moves.length; i++){
    var move = moves[i].charAt(0);
    var step_count = Number(moves[i].substring(1, moves[i].length));

    if( move === 'R')
      direction++;
      else{
        if(--direction === -1)
          direction = 3;
      }

      switch(direction%4){
        case 0:
          y += step_count;
          break;
        case 1:
          x += step_count;
          break;
        case 2:
          y -= step_count;
          break;
        case 3:
          x -= step_count;
      }
  }
  if(x < 0)
    x*= -1;
  if(y < 0)
    y*= -1;

  return x+y;
}
