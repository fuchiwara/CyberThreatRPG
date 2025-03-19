const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    create: function() {
      this.add.text(100, 100, 'Hello Phaser!', { fontSize: '32px', fill: '#fff' });
      function preload() {
  this.load.image('background', 'assets/background.png');
        function create() {
  this.add.image(400, 300, 'background');
  this.add.text(100, 100, 'Hello Phaser!', { fontSize: '32px', fill: '#fff' });
          function update() {
  // โค้ดสำหรับอัปเดตเกมในทุกเฟรม
}

}

    }
  }
};

const game = new Phaser.Game(config);
