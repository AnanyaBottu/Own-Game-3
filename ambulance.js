class Ambulance{
constructor(x,y,width,height){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.siren=loadSound("Siren.m4a");
    this.image = loadImage("amb.png");
}


display(){
    push();
    rect(this.x,this.y,this.width,this.height);
    pop();
    image(this.image,this.x-50,this.y-50,150,175);
    if(keyIsDown(RIGHT_ARROW)){
        this.x=this.x+10;
    }
   


}



}