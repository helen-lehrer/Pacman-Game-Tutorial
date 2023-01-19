const canvas = document.querySelector('canvas');
const c =canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Boundary {
  constructor({ position }) {
    this.position = position;
    this.width = 40;
    this.height = 40;
  }

  draw() {
    c.fillStyle = 'blue'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}
//@13:42 https://www.youtube.com/watch?v=5IMXpp3rohQ