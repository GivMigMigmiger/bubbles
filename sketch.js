let bubbler = []
let Antal = 10
let BubRadMax = 40
let BubRadMin = 10

function setup() {
  createCanvas(windowWidth, windowHeight);
  //laver variabel mængde bubbler
  for(let i=0;i<Antal;i++){
    //tempR gør det muligt at være meget tæt på udenfor skærmen
    //BubRadMin og Max gøre bublerne har en god størrelse
    let tempR = random(BubRadMin,BubRadMax)
    append(bubbler,
      new Bubbles(
      random(-tempR,width+tempR),
      random(-tempR,height+tempR),
      tempR))
  }
}

function draw() {
  background(220);
  for(let i=0;i<bubbler.length;i++){
    //bevæger og viser alle bublerne
    bubbler[i].show()
    bubbler[i].move()
    //tjekker om bublerne er over skærmen
    if(bubbler[i].y+bubbler[i].r<0){
      //splicer elementet
      let Temp1 = bubbler.slice(0,i)
      let Temp2 = bubbler.slice(i+1,bubbler.length)
      bubbler = concat(Temp1,Temp2)
      //laver en ny bubbel
      //bruger radius til at bestemme hvor langt nede den skal være
      let tempR = random(BubRadMin,BubRadMax)
      append(bubbler,
        new Bubbles(
        random(-tempR,width),
        height+tempR,
        tempR))
        //rykker i én tilbage fordi den ellers springer en over
        i -= 1
    }
  }

}
