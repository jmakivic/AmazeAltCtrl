
    class StaticSprite {
        constructor(img, x, y){
            this.x = x;
            this.y = y;
            this.img = img;
        }

        show() {
            image(this.img, this.x, this.y);
        }
    }