class Sprite {
  constructor(animation, x, y, speed, isMoving) {
      this.x = x;
      this.y = y;
      this.animation = animation;
      this.w = this.animation[0].width;
      this.len = this.animation.length;
      this.speed = speed;
      this.index = 0;
      this.movement = isMoving;
  }

  show() {
      let index = floor(this.index) % this.len;
      image(this.animation[index], this.x, this.y);
  }
  

  animate() {
      this.index += this.speed;

      if(this.movement == true){
          this.x += this.speed * 50;
      }
      

      if (this.x > width) {
          this.x = -this.w;
      }
  }
}