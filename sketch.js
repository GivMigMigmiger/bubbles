let bubbler = []
let Antal = 10
let BubRadMax = 40

function setup() {
  createCanvas(400, 400);
  //laver variabel mængde bubbler
  for(i++;i<Antal;i++){
    //tempR gør det muligt at være meget tæt på udenforskærmen
    let tempR = random(0,BubRadMax)
    append(bubbler,new Bubbles(
      random(-tempR,width+tempR),
      random(-tempR,height+tempR),
      tempR))
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
      //bruger radius til at bestemme hvor langt nede den skal være
      let tempR = random(0,BubRadMax)
      append(bubbler,new Bubbles(
        random(-tempR,width),
        heigt+tempR,
        tempR))
    }
  }

}
