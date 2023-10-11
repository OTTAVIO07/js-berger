function setup() {
    createCanvas(800, 600);
    background("white")
  }
  
  function draw() {
    
    stroke("blue");
    fill("red");
    
      //console.log(mouseIsPressed);
    
      if(mouseIsPressed) {
      rect(mouseX, mouseY, 40, 45);
      }
  }