class Introduction extends Phaser.Scene {
    constructor() {
        super('Introduction');
    }
    
    preload() {
        this.load.path = './assets/';
        this.load.image('rocket', 'rocket.png');
        this.load.path = './assets/';
        this.load.image('firered', 'firered.png');
        this.load.path = './assets/';
        this.load.image('fireorange', 'fireorange.png');
        this.load.path = './assets/';
        this.load.image('fireyellow', 'fireyellow.png');
    }  
    
    create() {
        // Render rocket
        this.imageObject = this.add.image(
            210,//x
            390,//y
            'rocket',//imagename
        )
        this.imageObject.setScale(0.9) //resize
        this.imageObject.setAngle(137);

        this.textObject = this.add.text(
            70, //x
            70,//y
            "Preparing for takeoff...", //text
            {
                fontFamily: 'CustomFont',
                color: "#ffffff",
                fontSize: 50,
            } //style
        );
        this.textObject = this.add.text(
            340, //x
            120,//y
            "Are you ready?", //text
            {
                fontFamily: 'Merriweather',
                color: "#ffffff",
                fontSize: 40,
            } //style
        );
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xff0000, 1); // set the fill color to red
        this.graphics.fillRect(70, 30, 700, 35); // draw a filled rectangle at (x, y) with the specified width and height
        this.graphics.fillStyle(0xff8f26, 1); 
        this.graphics.fillRect(600, 75, 170, 35);
        this.graphics.fillStyle(0xffd761, 1); 
        this.graphics.fillRect(600, 125, 170, 35);

        // TOP FIRE ANIMATION
        this.yellow1 = this.add.image(
            40,//x
            320,//y
            'fireyellow',//imagename
        )
        this.yellow1.setScale(0.15) //resize
        this.yellow1.setAngle(-70);
        this.orange1 = this.add.image(
            40,//x
            320,//y
            'fireorange',//imagename
        )
        this.orange1.setScale(0.15) //resize
        this.orange1.setAngle(-70);
        this.orange1.alpha = 0;
        this.tweens.add({
            targets: this.orange1,
            alpha: 1,
            duration: 5000,
            delay: 200,
            ease: 'Power2'
        });
        this.red1 = this.add.image(
            40,//x
            320,//y
            'firered',//imagename
        )
        this.red1.setScale(0.15) //resize
        this.red1.setAngle(-70);
        this.red1.alpha = 0;
        this.tweens.add({
            targets: this.red1,
            alpha: 1,
            duration: 5000,
            delay: 550,
            ease: 'Power2'
        });
        // MIDDLE FIRE ANIMATION
        this.yellow2 = this.add.image(
            50,//x
            390,//y
            'fireyellow',//imagename
        )
        this.yellow2.setScale(0.15) //resize
        this.yellow2.setAngle(-90);
        this.orange2 = this.add.image(
            50,//x
            390,//y
            'fireorange',//imagename
        )
        this.orange2.setScale(0.15) //resize
        this.orange2.setAngle(-90);
        this.orange2.alpha = 0;
        this.tweens.add({
            targets: this.orange2,
            alpha: 1,
            duration: 5000,
            delay: 200,
            ease: 'Power2'
        });
        this.red2 = this.add.image(
            50,//x
            390,//y
            'firered',//imagename
        )
        this.red2.setScale(0.15) //resize
        this.red2.setAngle(-90);
        this.red2.alpha = 0;
        this.tweens.add({
            targets: this.red2,
            alpha: 1,
            duration: 5000,
            delay: 550,
            ease: 'Power2'
        });
       // BOTTOM FIRE ANIMATION
       this.yellow3 = this.add.image(
            40,//x
            460,//y
            'fireyellow',//imagename
        )
        this.yellow3.setScale(0.15) //resize
        this.yellow3.setAngle(-110);
        this.orange3 = this.add.image(
            40,//x
            460,//y
            'fireorange',//imagename
        )
        this.orange3.setScale(0.15) //resize
        this.orange3.setAngle(-110);
        this.orange3.alpha = 0;
        this.tweens.add({
            targets: this.orange3,
            alpha: 1,
            duration: 5000,
            delay: 200,
            ease: 'Power2'
        });
        this.red3 = this.add.image(
            40,//x
            460,//y
            'firered',//imagename
        )
        this.red3.setScale(0.15) //resize
        this.red3.setAngle(-110);
        this.red3.alpha = 0;
        this.tweens.add({
            targets: this.red3,
            alpha: 1,
            duration: 5000,
            delay: 550,
            ease: 'Power2'
        });

        this.tweens.add({
            targets: [this.yellow1, this.yellow2, this.yellow3, this.orange1, this.orange2, this.orange3, this.red1, this.red2, this.red3],
            x: 1000,
            duration: 5900,
            delay: 1700,
            ease: 'Linear'
        });
        this.tweens.add({
            targets: this.imageObject,
            x: 1000,
            duration: 5000,
            delay: 1700,
        });
        this.time.addEvent({
            delay: 7100,
            loop: false,
            callback: () => {
                this.scene.start("Video");
            }
        })

        
    }

    
    update(){}
}

class Video extends Phaser.Scene {
    constructor() {
        super('Video');
    }
    
    preload() {
        this.load.video('video', './assets/video.mp4');
        this.load.image('cloud', './assets/cloudygames.png');
    }    
    
    create() {
        // Create a camera object
        var camera = this.cameras.main;

        // Start the camera at position x = 0
        camera.scrollX =800;

        // Tween the camera to move to the right over 2 seconds
        this.tweens.add({
            targets: camera,
            scrollX: 0, // move the camera 1000 pixels to the right
            duration: 2000, // 2 seconds
            ease: 'Power2',
        });
        // Render rocket
       this.videoObject = this.add.video(
            400,//x
            300,//y
            'video',//imagename
        )
        this.videoObject.play(false);
        this.imageObject = this.add.image(
            400,//x
            300,//y
            'cloud',//imagename
        )
        this.imageObject.alpha = 0;

        this.tweens.add({
            targets: [this.imageObject],
            alpha: 1,
            duration: 2000,
            delay: 6700,
            ease: 'Power2'
        });
        
        this.time.addEvent({
            delay: 9850,
            loop: false,
            callback: () => {
                this.cameras.main.fadeOut(2000);
            }
        })

        this.time.addEvent({
            delay: 11100,
            loop: false,
            callback: () => {
                this.scene.start("TitleScreen");
            }
        })
    }

    
    update(){}
}

class LoadingScreen extends Phaser.Scene {
    constructor() {
        super('LoadingScreen');
    }
    
    preload() {

    }  
    
    create() {
        // Create a group to hold the stars

        const starGroup = this.add.group();
        let xCoord = 0;
        let yCoord = -20;
        let count = 0;
        let flag = 0;
        // Create multiple stars and add them to the group
        for (let i = 0; i < 170; i++) {
            // Create a new graphics object
            const graphics = this.add.graphics();
            // Set the line style and fill color
            graphics.fillStyle(0xffffcc, 1);

            // Define the points of the star shape
            const points = [
                { x: 0, y: -25 },
                { x: 7.5, y: -7.5 },
                { x: 25, y: -5 },
                { x: 12.5, y: 5 },
                { x: 20, y: 20 },
                { x: 0, y: 12.5 },
                { x: -20, y: 20 },
                { x: -12.5, y: 5 },
                { x: -25, y: -5 },
                { x: -7.5, y: -7.5 },
            ];

            // Draw the star shape using the points and move it to a random position off-screen
            graphics.beginPath();
            graphics.moveTo(points[0].x, points[0].y);

            for (let j = 1; j < points.length; j++) {
                graphics.lineTo(points[j].x, points[j].y);
            }
            graphics.closePath();
            graphics.strokePath();
            graphics.fillPath();

            // Add the graphics object to the star group
            starGroup.add(graphics);

            // Set the initial position of the star off-screen
            graphics.x = xCoord
            graphics.y = yCoord;
            if (i % 14 == 0) { yCoord += 50; xCoord = -25;}
            xCoord += 60;
            //   Create a tween to move the star off-screen in a random direction
            let offscreenX = 0; Phaser.Math.Between(-100, this.cameras.main.width + 100);
            let offscreenY = 0;
            if (count == 0) { 
                offscreenX = Phaser.Math.Between(-100, this.cameras.main.width + 100);
                offscreenY = Phaser.Math.Between(-100, -50);
                count += 1;
            } else if (count == 1)  {
                offscreenX = Phaser.Math.Between(-100, this.cameras.main.width + 100);
                offscreenY = Phaser.Math.Between(650, 700);
                count += 1;
            } else if (count == 2)  {
                offscreenX = Phaser.Math.Between(-100,-50);
                offscreenY = Phaser.Math.Between(-100, this.cameras.main.height + 100);
                count += 1;
            } else {
                offscreenX = Phaser.Math.Between(850,900);
                offscreenY = Phaser.Math.Between(-100, this.cameras.main.height + 100);
                count = 0;
            }
            let tween = this.tweens.add({
                targets: graphics,
                x: offscreenX,
                y: offscreenY,
                duration: 4000,
                delay: 600,
            });
        }
        this.textObject = this.add.text(
            20, //x
            250,//y
            "You, the rocket, will be launched into the night sky", //text
            {
                fontFamily: 'CustomFont',
                color: "#cf1515",
                fontSize: 30,
            } //style
        );
        this.textObject2 = this.add.text(
            20, //x
            350,//y
            "You know what you will need to do…\nDon’t make us regret choosing you for the mission\nYou know what will happen if you mess up", //text
            {
                fontFamily: 'Merriweather',
                color: "#ffffff",
                fontSize: 30
            } //style
        );
        this.textObject.alpha = 0;
        this.textObject2.alpha = 0;


        this.tweens.add({
            targets: [this.textObject, this.textObject2],
            alpha: 1,
            duration: 5000,
            delay: 3000,
            ease: 'Power2'
        });
       
    }
    
    update(){}
}

class TitleScreen extends Phaser.Scene {
    constructor() {
        super('TitleScreen');
    }
    
    preload() {
        this.load.path = './assets/';
        this.load.image('moon', 'moon.jpg');
    }  
    
    create() {
        this.cameras.main.fadeIn(2000);

        //create image object 
        this.imageObject = this.add.image(
            280,//x
            390,//y
            'moon',//imagename
        )
        this.imageObject.setScale(0.18) //resize
        this.textObject = this.add.text(
            440, //x
            20,//y
            "Rocket", //text
            {
                fontFamily: 'CustomFont',
                color: "#ffffff",
                fontSize: 100,
            } //style
        );
        this.textObject = this.add.text(
            550, //x
            100,//y
            "The Art of Flying", //text
            {
                fontFamily: 'Merriweather',
                color: "#ffffff",
                fontSize: 30,
            } //style
        );
        this.textObject2 = this.add.text(
            35, //x
            430,//y
            "START", //text
            {
                fontFamily: 'Merriweather',
                color: "#ffffff",
                fontSize: 30,
                fontWeight: 'bold'
            } //style
        );
        
        this.textObject3 = this.add.text(
            35, //x
            462,//y
            "OPTIONS\nQUIT", //text
            {
                fontFamily: 'Merriweather',
                color: "#ffffff",
                fontSize: 30,
            } //style
        );
        this.tweens.add({
            targets: [this.textObject3],
            alpha: 0,
            duration: 2000,
            delay: 1600,
            ease: 'Power2'
        });
       

        this.time.addEvent({
            delay: 3350,
            loop: false,
            callback: () => {
                this.scene.start("LoadingScreen");
            }
        })
        
    }
    
    update(){}
}


let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [Introduction, Video, TitleScreen, LoadingScreen],
    // scene: [Video],
}
let game = new Phaser.Game(config);


