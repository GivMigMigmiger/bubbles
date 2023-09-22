let bubbler = []
let Antal = 10
let BubRadMax = 40

function setup() {
  createCanvas(400, 400);
  //laver variabel mængde bubbler
  for(i++;i<Antal;i++){
    append(bubbler,new Bubbles(
      random(0,width),
      random(0,height),
      random(0,BubRadMax)))
  }
}

function draw() {
  background(220);
  for(i=0;i<bubbler.length;i++){
    //bevæger og viser alle bublerne
    bubbler[i].show()
    bubbler[i].move()
    //tjekker om bublerne er over skærmen
    if(bubbler[i].y+bubbler[i].r<0){
      //splicer elementet
      let Temp1 = asteroider.slice(0,minIndex)
      let Temp2 = asteroider.slice(minIndex+1,asteroider.length)
      bubbler = concat(astTemp1,astTemp2)
      //laver en ny bubbel
      let tempR = random(0,BubRadMax)
      append(bubbler,new Bubbles(
        random(0,width),
        heigt+tempR,
        random(0,BubRadMax)))
    }
  }

}
