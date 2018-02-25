class Bee {
    constructor(img) {
        this.x = 0;
        this.y = 0;
        this.alpha = 255;
        this.img = img;
    }

    update(x, y) {
        this.x = x;
        this.y = y;
        image(this.img, x - 76, y - 56, this.img.width / 4, this.img.height / 4);
        // this.show();
    }

    // show() {
    //     noStroke();
    //     fill(255, this.alpha);
    //     ellipse(this.x, this.y, 16);
    // }
}