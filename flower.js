class Flower {
  constructor(x, y, hue, size) {
    // what do we need to set up a flower?
    this.x = x
    this.y = y
    this.hue = hue
    this.midSize = size
    this.petalDistance = (size / 2) + random(4, 10)
    this.numOfPetals = random(7, 20)
    this.rotation = 0
    this.rotationSpeed = random(-0.015, 0.015)
  }

  draw() {
    // what do we need to draw a flower?
      colorMode(HSB, 100)
      noStroke()
      fill(this.hue, 100, 100,)
      circle(this.x, this.y, this.midSize)

      for (let num = 0; num < this.numOfPetals; num = num + 1) {
        let angle = TWO_PI * num / this.numOfPetals + this.rotation
        let branch = createVector(this.petalDistance, 0)
        branch.rotate(angle)

        circle(this.x + branch.x, this.y + branch.y, 10)
      }

      this.rotation = this.rotation + this.rotationSpeed
  }
}