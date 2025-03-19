const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

function preload() {
  // โหลดไฟล์เกม เช่น
  this.load.image('background', 'assets/cyber_background.png');
}

function create() {
  // แสดงฉากพื้นหลัง
  this.add.image(400, 300, 'background');
}

function update() {
function create() {

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

}

  // อัปเดตเกม
}
