class Particle {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.vx = Math.random(-2, 2);
        this.vy = Math.random(-2, 2);
        this.size = 12;
        this.img = img;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.size += 1;
        image(this.img, this.x - 30, this.y - 30, this.img.width / 12, this.img.height / 12);
    }

    // show() {
    //     noStroke();
    //     fill(255, this.alpha);
    //     ellipse(this.x, this.y, 16);
    // }

    finished() {
        return this.size > 30;
    }
}