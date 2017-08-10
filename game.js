console.log("hello from game.js")

class Play {

  preload() {
    this.load.image("background","background.png")
    this.load.image("sprite","sprite.png")

  }

  create() {
    game.physics.startSystem(Phaser.Physics.ARCADE)
    this.bg = this.add.sprite(0,0,"background")
    this.sprite = this.add.sprite(50,284,"sprite")

    game.physics.enable(this.sprite)
    this.sprite.body.gravity.y = 600
    this.sprite.body.collideWorldBounds = true
    this.sprite.body.bounce.setTo(1)
    this.sprite.body.velocity.x = 600
  }

}


var game = new Phaser.Game(320,568)
game.state.add("Play",Play)
game.state.start("Play")
