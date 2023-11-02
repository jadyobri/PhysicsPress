class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
        //local;
        //text;
        this.prevDirection;
        this.direction;


        // this.minY = 576;
        // this.maxY = height/1.5
        // this.lastY = 0;
        // this.duration = 0;
        // this.prevDuration = 0;
        
        
    }
    
    preload(){
        this.load.spritesheet('ball', './assets/BallSpriteInspired.png',{frameWidth: 32, frameHeight:32, startFrame:0, endFrame:22});
    }
    create(){
        //placeholder.  Must change
        //this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);
        //this.BOUNCE_VELOCITY = 350;

        //keys
        
       keyF= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
      // keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
     
        this.anims.create({
            key: 'bounce regular',
            frames: this.anims.generateFrameNumbers('ball', {start: 0, end: 8, first: 0}),
            frameRate: 22
        });
        this.anims.create({
            key: 'bounce accend',
            frames: this.anims.generateFrameNumbers('ball', {start: 9, end: 14, first: 9}),
            frameRate: 22
        })
        this.bounce = this.physics.add.sprite(width/2, height/1.5, 'ball', 1).setScale(4);
        //this.bounce.setVelocity(0,60);
        
        this.bounce.setOrigin(0.5,0);

        this.lastY = this.bounce.y;
        this.bounce.setMaxVelocity(0,500);
        //this.physics.world.gravity.y = 1000;
        this.bounce.setCollideWorldBounds(true, 1, 1);
       // this.bounce.setDragY(0);
        
       
        

    }
    update(){
        // this.boulder();
        //let bounceVector = new Phaser.Math.Vector2(0,-1);
        //let bounce = this.add.sprite(game.config.width/2, game.config.height/2, 'bounce').setOrigin(0,0);;
        //if(this.bounce.y )
        //this.bounce.setVelocityY(this.BOUNCE_VELOCITY);
        this.bounce.play('bounce regular', true);
        this.factor = 1.5;
        //if()
        //this.downFlag = false;
        if(Phaser.Input.Keyboard.JustDown(keyF)){
            // if(this.bounce.body.velocity < 0){
            //     this.bounce.setVelocity(0,-1*this.bounce.body.velocity*this.factor);
            //     //this.bounce.body.velocity *= -1;
            // }
            //console.log(this.factor);
            
            this.bounce.setVelocity(0,1000);
        }
        console.log(downFlag);

        if(keyF.isDown && this.bounce.body.velocity.y > 0){
            console.log("here");
            //this.bounce.setBounceY(2);
           // downFlag = true;

           //this.bounce.setMaxVelocity(0,1000);
           //this.physics.world.gravity.y = 3000;
           //this.bounce.setVelocity(0,this.bounce.body.velocity.y*1.5);
           //this.bounce.setMaxVelocity(0, this.);
        //    if(this.bounce.y == 1000){
        //     //this.bounce.setMaxVelocity(0,1000);
        //    }
        this.bounce.setMaxVelocity(0, 1000);
            
           
        }
        else if(keyF.isDown){
            //this.bounce.setVelocity(0,this.bounce.body.velocity.y *-1.5)
            //this.bounce.setVelocity(0,this.bounce.body.velocity.y*-1.5);
            // this.bounce.setMaxVelocity(0, 1000);
            // //this.bounce.setVelocity(0,this.bounce.body.velocity.y/1.5);
        }
        else{
            //if(downFlag == true){
                //downFlag = false;
                this.bounce.setMaxVelocity(0, 500);
                this.bounce.setOrigin(0.5,0);
            //this.bounce.setVelocity(0,this.bounce.body.velocity.y/1.5);
           // }
        }

        
        // if(keyF.isdown){
        //     this.downFlag = true;
        //     this.bounce.setMaxVelocity(0,1000);
        // }
        // else{
        //     if(this.downFlag){
        //         this.downFlag = false;
        //         //this.bounce.setVelocity(0,500);
        //         //this.physics.world.gravity.y = 1000;
        //         //this.bounce.setMaxVelocity(0,500);
        //     }
        //     else{
        //         this.bounce.setMaxVelocity(0,500);
        //         //this.bounce.setMaxVelocity(0,500);
        //     }
        
        // }
        console.log(this.bounce.body.velocity);
        // else{
        //     this.bounce.setMaxVelocity(0,500);
        //     //this.bounce.setVelocity(0,500);
        // }
        // else{
        //     this.bounce.setMaxVelocity(0,500);
        // }
        //this.bounce.setBounceY(1);
        // else{
        // if(this.bounce.y == height/1.5){
        // this.bounce.setBounceY(1);
        // }
        //this.bounce.setBounce(0);
        // if(Phaser.Math.Fuzzy.LessThan(this.bounce.body.velocity.y, 0, 0.1)){
        //     this.direction = "up";
        // }
        // else{
        //     this.direction = "down";
        // }

        // if(this.prevDirection != this.direction && this.prevDirection == "up"){
        //     const marker = this.add.sprite(0, this.bounce.y + 18, "marker");

        //     marker.setOrigin(0,1);
        //     this.lastY = this.bounce.y;
        //     this.prevDuration = this.duration;
        //     this.duration = 0;
        // }

        // this.prevDirection = this.direction;
        // this.duration += delta;

        // this.minY = Math.min(this.minY, this.bounce.y);
        // this.maxY = Math.max(this.minY, this.maxY, this.lastY);

        // console.log(this.bounce.y);
        //this.bounce.play('bounce accend');
        //bounceVector.normalize();
        //this.bounce.setVelocity(bounceVector.x, this.BOUNCE_VELOCITY *bounceVector.y);
        
        


    }
    boulder(){

    //bounce = 

    }
}