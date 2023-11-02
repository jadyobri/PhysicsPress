let config = {
    type: Phaser.AUTO,
    height: 640,
    width: 960,
    render: {
        pixelArt: true
    },
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true,
            gravity: {
                x: 0,
                y: 1000
            }
        }
    },
    scene:[Menu, Play]
}
let downFlag = false;
let game = new Phaser.Game(config);
let { height, width } = game.config;
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let keySPACE, keyENTER, keyF;