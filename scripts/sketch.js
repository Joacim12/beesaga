let particles = [];
let bee;
let img;
p5.disableFriendlyErrors = true;

function setup() {
    let c = createCanvas(windowWidth, windowHeight);
    c.parent('game');
    frameRate(30);
    img = loadImage("../../resources/images/logoStuff/bi.png");
    console.log("loaded img");
    bee = new Bee(img);
    console.log("loaded bee");
}

function draw() {
    background(50);
        bee.update(mouseX, mouseY);
    if (frameCount % 3 == 0) {
        let p = new Particle(bee.x, bee.y, img);
        particles.push(p);
    }
    particles.forEach(p => {
        // p.show();
        p.update()
    });
    particles = particles.filter(p => !p.finished());
    fill(255, 0, 200);
    stroke(0);
    text("FPS: " + frameRate().toFixed(2) + " v0.0.01", 10, height - 10);
}

// if (mouseIsPressed) {
//     fill(0);
// } else {
//     fill(255,204,0);
// }
// square(mouseX, mouseY, 80, 80);
