class Target{
    constructor(){
        this.x = random(width-30);
        this.y = random(height-30);
        this.count = 1;
        this.grow = true;
        this.done = false;
    }
    show(){
        if(this.done){

        }
        else{
            fill('red')
            circle(this.x,this.y,this.count);
            if(this.count>30 && this.grow==true){
                this.grow = false;
            }
            if(this.count<0){
                lives++;
                this.done = true;
            }
            else if(this.grow){
                this.count = this.count+0.3;
            }
            else if(!this.grow){
                this.count = this.count-0.3;
            }
        }
    }

    checkClick(){
        if(dist(mouseX,mouseY,this.x,this.y)<this.count+2 && lives<3){
            targets.splice(i,1);
            this.done = true;
            const prevScore = parseInt(scoreElem.html().substring(8));
            scoreElem.html('Score = ' + (prevScore + 1));
        }
        else{
            miss++;
        }
    }
}