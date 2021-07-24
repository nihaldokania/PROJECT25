class Paper
{
 constructor(x,y,r){
    var options={
        restitution:0.3,
        friction:0,
        density:1.2			
        }
    this.x=x;
    this.y=y;
    this.r=r
    this.image=loadImage("paper.png");
    this.body=Bodies.rectangle(x, y, r, options);
     World.add(world, this.body);

}
display()
{
        
        var PaperPos=this.body.position;		

        push()
        translate(PaperPos.x, PaperPos.y);
       fill(255,0,255);
       imageMode(CENTER);
       image(this.image,0,0,this.r,this.r)
        pop()
        
}
 }   
