class biscuit {
    constructor(imagePath, x, y, w, h) {
        //this.imagePath = imagePath;
        this.theImage = loadImage(imagePath)
        this.x = random(x,825);
        this.y = random(y,825);
        this.w = w;
        this.h = h;
    }
    draw() {
image(this.theImage, this.x, this.y);
    }
}