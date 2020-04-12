var tar;
var targets = [];
var delay="";
var miss = 0;
var lives = 0;
var cnv;
let scoreElem;
let btn;
let startTime;
let endTime;

function setup() {
    startTime = new Date();
    scoreElem = createDiv('Score = 0');
    //btn = createDiv('<button type="button" class="btn btn-primary btn-lg">START</button>');
    btn = createDiv('');
    btn.class('text-center');
    btn.style('margin-top','27%');
      scoreElem.id = 'score';
      btn.style('margin-left','15%');
      btn.style('margin-right','15%');
  //scoreElem.style('color', 'black');
  scoreElem.style('text-align','center');
  scoreElem.style('margin-left','15%');
  scoreElem.style('margin-right','15%');
    scoreElem.class('jumbotron text-center');
  cnv=createCanvas(400, 400);
  centerCanvas();
//   targets.push(new Target());
}



function mousePressed(){
    for(i = 0;i<targets.length;i++){
        targets[i].checkClick(i);
    }
}

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
  }

  function windowResized() {
    centerCanvas();
  }

function draw() {
    background(200);
    if(random(1)<0.09){
        if(millis()-delay>200 || delay==""){
            delay = millis();
            print(delay);
            targets.push(new Target);
        }
    }
    for(i = 0;i<targets.length;i++){
        targets[i].show();
    }
    if(lives>=3){
        noLoop();
        const scoreVal = parseInt(scoreElem.html().substring(8));
        endTime = new Date();
        var timeDiff = endTime - startTime; //in ms
        // strip the ms
        timeDiff /= 1000;

        // get seconds 
        var scoreTime = Math.round(timeDiff);
        scoreElem.html('Game ended! Your score was : ' + scoreVal+' and Time : ' + scoreTime + ' seconds.');
    }
}


