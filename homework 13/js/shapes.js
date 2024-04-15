class shapeclass{

constructor(shapetype, param1, param2, param3, translateX, translateY, rotateXvalue, rotateYvalue, rotateZvalue, textureValue) {
    this.shapetype = shapetype;
    this.param1 = param1;
    this.param2 = param2;
    this.param3 = param3;
    this.translateX = translateX;
    this.translateY = translateY;
    this.rotateXvalue = rotateXvalue;
    this.rotateYvalue = rotateYvalue;
    this.rotateZvalue = rotateZvalue;
    this.textureValue = textureValue;
}

// display the objects
draw(fCount) {
    push();
        translate(this.translateX, this.translateY);

        rotateX(this.rotateXvalue * fCount);
        rotateY(this.rotateYvalue * fCount);
        rotateZ(this.rotateZvalue)
        texture(this.textureValue);
        if (this.shapetype == "sphere") {
            sphere(this.param1, this.param2, );
        } else if (this.shapetype == "cylinder") {
            cylinder(this.param1, this.param2);
        }
        pop();
}
}