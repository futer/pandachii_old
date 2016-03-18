var GameState={
  preload: function()
  {

    this.game.load.image('backyard','img/backyard.png');
    this.game.load.image('panda','img/panda_small.gif');

    this.load.spritesheet('pet1', 'img/panda1.png', 97, 83, 5, 1, 1);
  },

  create: function()
  {
  	//background
    this.background = this.game.add.sprite(0,0,'backyard');

    //zwierzak dodanie
    this.pet = this.game.add.sprite(100,400,'pet1',4);
    this.pet.anchor.setTo(0.5);

    //zwierzak opcja przemieszczania
    this.pet.inputEnabled = true;
    this.pet.animations.add('funnyfaces', [0, 1, 2, 3, 4, 3, 2, 1, 0], 7, false);
    this.pet.input.enableDrag();

    //this.pet.animations.play('funnyfaces');
    //przyciski

    //Jablko

	this.panda = this.game.add.sprite(72, 570, 'panda');
    this.panda.anchor.setTo(0.5);
    this.panda.customParams = {health: 20};
    this.panda.inputEnabled = true;
    //this.panda.events.onInputDown.add(this.pickItem, this);

    //Cukierekcc
    this.panda = this.game.add.sprite(144, 570, 'panda');
    this.panda.anchor.setTo(0.5);
    this.panda.customParams = {health: -10, fun: 10};
    this.panda.inputEnabled = true;
    //this.panda.events.onInputDown.add(this.pickItem, this);

    //kaczka
    this.panda = this.game.add.sprite(216, 570, 'panda');
    this.panda.anchor.setTo(0.5);
    this.panda.customParams = {fun: 20};
    this.panda.inputEnabled = true;
    //this.panda.events.onInputDown.add(this.pickItem, this);

    //kulganiesie
    this.panda = this.game.add.sprite(288, 570, 'panda');
    this.panda.anchor.setTo(0.5);
    this.panda.customParams = {health: -20, fun: 20};
    this.panda.inputEnabled = true;
    //this.panda.events.onInputDown.add(this.pickItem, this);

  },

  update: function()
  {

  }

};

var game = new Phaser.Game(360,640,Phaser.AUTO);
game.state.add('GameState',GameState);
game.state.start('GameState');