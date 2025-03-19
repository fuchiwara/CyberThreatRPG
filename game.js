const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    create: function() {
      this.add.text(100, 100, 'Hello Phaser!', { fontSize: '32px', fill: '#fff' });
    }
  }
};

const game = new Phaser.Game(config);
