// Constants
const FRAME_RATE = 30;

// Variables
let c, img, cnv, font, pg;
let fontSize = 300;
let word = "WAVY"
let currLetter = 0;
let lastFrame = 0;

// Main Functions
function preload() {
  font = loadFont("/assets/fonts/Posterman.otf");
}

function setup() {
  // Canvas
  cnv = createCanvas(600, 300);
  // Graphics: sub-canvas
  pg = createGraphics(600, 300);
  // Text
  pg.textFont(font);
  pg.textSize(fontSize);
  pg.textAlign(CENTER, CENTER);

  frameRate(FRAME_RATE);
}

function draw() {
  // if (frameCount - lastFrame > FRAME_RATE) {
  //   currLetter++;
  //   lastFrame = frameCount;
  //   if (currLetter === word.length) currLetter = 0;
  // }
  pg.background(0);
  pg.fill(255, 0, 0);
  pg.noStroke();
  pg.text(word, width / 2, height / 2 - 60);
  image(pg, 0, 0)

  // Kinetic
  let tilesX = 8;
  let tilesY = 8;
  let tileW = int(width / tilesX);
  let tileH = int(height / tilesY);

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      let wave = int(sin(frameCount * 0.05 * x + y) * 10);

      // Source
      let sx = x * tileW + wave;
      let sy = y * tileH;
      let sw = tileW;
      let sh = tileH;

      // Destination
      let dx = x * tileW;
      let dy = y * tileH;
      let dw = tileW;
      let dh = tileH;

      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);

    }
  }
}

function keyPressed() {
  if (key === "s") {
    saveGif("jumo", 4);
  }
}