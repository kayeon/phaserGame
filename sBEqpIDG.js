/**
 * Generated from the Phaser Sandbox
 *
 * http://phaser.io/sandbox/sBEqpIDG
 *
 * This source requires Phaser 2.4.7
 */

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.stage.backgroundColor = '#85b5e1';

    game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('player', 'sprites/phaser-dude.png');
    game.load.image('platform', 'sprites/platform.png');
    game.load.image('ball', 'games/breakout/ball.png');
}

var player;
var platforms;
var cursors;
var jumpButton;
var ball;

function create() {

    player = game.add.sprite(250, 40, 'player');
    
    ball = game.add.sprite(200,40, 'ball');

    game.physics.arcade.enable(player);
    game.physics.arcade.enable(ball);

    player.body.collideWorldBounds = true;
    player.body.gravity.y = 500;
    
    ball.body.collideWorldBounds = true;
    ball.body.gravity.y = 200;

    platforms = game.add.physicsGroup();

    platforms.create(500, 150, 'platform');
    platforms.create(-200, 300, 'platform');
    platforms.create(400, 450, 'platform');

    platforms.setAll('body.immovable', true);

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    throwButton = game.input.keyboard.addKey(Phaser.Keyboard.A); 
}

function update () {

    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(ball, platforms);

    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -250;
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 250;
    }

    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
    {
        player.body.velocity.y = -400;
    }
    if (throwButton.isDown) {
        ball.game.physics.arcade.velocityFromAngle(45, 60, point);
    }
}

function render () {

}
