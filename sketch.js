let bubbler = []
let Antal = 10

function setup() {
  createCanvas(400, 400);
  //laver variabel mængde bubbler
  for(i++;i<Antal;i++){
    append(bubbler,new Bubbles(
      random(0,width),
      random(0,height),
      random(0,40)))
  }
}

function draw() {
  background(220);
  for(i=0;i<bubbler.length;i++){
    bubbler[i].show()
    bubbler[i].move()

  }

}
