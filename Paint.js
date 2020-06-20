class Paint extends BaseClass {
  constructor(x,y){
    super(x,y,10,10);
    this.image = loadImage("paint.png");
    this.image.scale= 0.5;
    this.trajectory =[];
  }

  display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;

    super.display();

  }
}
