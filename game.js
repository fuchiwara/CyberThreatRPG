
// โหลด Phaser.js
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: 0 }, debug: false }
    },
    scene: { preload, create, update }
};

const game = new Phaser.Game(config);

let player, enemy, cursors;
let playerHP = 100, enemyHP = 100;

function preload() {
    this.load.image('background', 'assets/cyber_background.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('enemy', 'assets/enemy.png');
}

function create() {
    this.add.image(400, 300, 'background');
    player = this.physics.add.sprite(200, 300, 'player');
    enemy = this.physics.add.sprite(600, 300, 'enemy');
}

function update() {}
