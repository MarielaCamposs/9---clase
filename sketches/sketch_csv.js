var data;

function preload() {
   data = loadTable("data/zonaswifi.csv", "true", "header");
}

function setup() {
   canvas = createCanvas(600, 300);
   canvas.parent('top');
   print(data);
   noLoop();
}

function draw() {
   background(237, 34, 93);
   var total_zonas = 0;

}
