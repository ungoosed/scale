import Phaser from 'phaser';
import logoImg from './assets/logo.png';
import tilesetImg from './assets/tileset.png';
import tilemapJSON from './assets/tilemap.json'
class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        //  This is an example of a bundled image:
        this.load.image('logo', logoImg);
        this.load.tilemapTiledJSON('map', tilemapJSON);
        //  This is an example of loading a static image from the public folder:
        this.load.image('background', 'assets/bg.jpg');
        this.load.image('tileset', tilesetImg);

    }
      
    create ()
    {
        const map = this.make.tilemap({key:'map',tilewidth:16,tileHeight: 16})
        const tileset = map.addTilesetImage('tiles','tileset',16,16)
        const layer = map.createLayer('top',tileset,0,0)
        this.cursors = this.input.keyboard.createCursorKeys();

        // this.add.image(400, 300, 'background');
        this.logo = this.physics.add.sprite(50, 50, 'logo').setScale(0.1,0.1)

        //camera adjustments
        this.cameras.main.setZoom(3);
        this.cameras.main.startFollow(this.logo, true, 0.2, 0.2);

        // this.tweens.add({
        //     targets: this.logo,
        //     y: 450,
        //     duration: 100,
        //     ease: "Power2",
        //     yoyo: true,
        //     loop: -1
        // });
    }

    update () {
        this.logo.setVelocityX(0);
        this.logo.setVelocityY(0);
        if (this.cursors.up.isDown) {
            this.logo.setVelocityY(-200)

        }
        if (this.cursors.down.isDown) {
            this.logo.setVelocityY(200)
                                

        }
        if (this.cursors.left.isDown) {
            this.logo.setVelocityX(-200)

        }
        if (this.cursors.right.isDown) {
            this.logo.setVelocityX(200)

        }

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        }
    },
    scene: MyGame
};

const game = new Phaser.Game(config);
