
class Introduction extends Phaser.Scene {
    constructor() {
        super('Introduction');
    }
    
    preload() {
        this.load.path = './assets/';
        this.load.image('rocket', 'rocket.png');
        this.load.image('firered', 'firered.png');
        this.load.image('fireorange', 'fireorange.png');
        this.load.image('fireyellow', 'fireyellow.png');
        this.load.audio('rocket', 'rocketSound.mp3');
        this.load.audio('space', 'spaceS.mp3');
    }  
    
    create() {
        // Draws the four rectangles
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xff0000, 1); // red
        this.graphics.fillRect(70, 30, 700, 35); 
        this.graphics.fillStyle(0xff8f26, 1); // orange
        this.graphics.fillRect(600, 75, 170, 35);
        this.graphics.fillStyle(0xffd761, 1); // yellow
        this.graphics.fillRect(600, 125, 170, 35);
        // Starts background music that will loop throughout the game
        this.sound.play('space', { loop: true });
        // Renders rocket
        this.imageObject = this.add.image(
            210,//x
            390,//y
            'rocket',//imagename
        )
        this.imageObject.setScale(0.9) //resize
        this.imageObject.setAngle(137); // changes angle
        // Uses custom font
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
            120, //x
            120,//y
            "Are you ready? Click here to start", //text
            {
                fontFamily: 'Merriweather',
                color: "#ffffff",
                fontSize: 35,
            } //style
        );
        // Makes the text object interactive
        this.textObject.setInteractive();
        // Clicking on the text will starts an animation 
        this.textObject.on('pointerdown', function () {
            // Rocket wooshing sound
            this.sound.play('rocket');
            // TOP FIRE ANIMATION
            // Uses tweens to change the alpha of each image, so it will look like the flames are getting bigger
            this.yellow1 = this.add.image(
                40, 320,'fireyellow',
            )
            this.yellow1.setScale(0.15) //resize
            this.yellow1.setAngle(-70);
            this.orange1 = this.add.image(
                40,320,'fireorange',
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
                40,320,'firered',
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
                50,390,'fireyellow',
            )
            this.yellow2.setScale(0.15) //resize
            this.yellow2.setAngle(-90);
            this.orange2 = this.add.image(
                50,390,'fireorange',
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
                50,390,'firered',
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
                40,460,'fireyellow',
            )
            this.yellow3.setScale(0.15) //resize
            this.yellow3.setAngle(-110);
            this.orange3 = this.add.image(
                40,460,'fireorange',
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
                40,460,'firered',
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
            // Moves the fires to right side of the scrren
            this.tweens.add({
                targets: [this.yellow1, this.yellow2, this.yellow3, this.orange1, this.orange2, this.orange3, this.red1, this.red2, this.red3],
                x: 1000,
                duration: 5900,
                delay: 1700,
                ease: 'Linear'
            });
            // Moves the rocket
            this.tweens.add({
                targets: this.imageObject,
                x: 1000,
                duration: 5000,
                delay: 1700,
                // When the animation is done, moves to the next scene
                onComplete: () => {
                    this.scene.start("Video");
                }
            });
            }, this);
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
        // Start the camera at position 800
        camera.scrollX = 800;
        // Tween the camera to move to the right over 2 seconds
        this.tweens.add({
            targets: camera,
            scrollX: 0,
            duration: 2000, // 2 seconds
            ease: 'Power2',
        });

        // Includes video
        this.videoObject = this.add.video(
            400,300,'video',
        )
        this.videoObject.setPlaybackRate(1.7);
        this.videoObject.play(false);
        this.videoObject.autoplay = true; // autoplays
        
        // The logotype image starts with alpha=0, and after the video ends it fades in
        this.imageObject = this.add.image(
            400,300,'cloud',
        )
        this.imageObject.alpha = 0;
        this.tweens.add({
            targets: [this.imageObject],
            alpha: 1,
            duration: 2000,
            delay: 3800,
            ease: 'Power2',
            // Fade out effect
            onComplete: () => {
                this.cameras.main.fadeOut(2000);
            }
        });
        
        // Moves to next scene after fading out
        this.time.addEvent({
            delay: 7800,
            loop: false,
            callback: () => {
                this.scene.start("TitleScreen");
            }
        })
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
        this.cameras.main.fadeIn(1000);

        //create image object 
        this.imageObject = this.add.image(
            280,390,'moon',
        )
        this.imageObject.setScale(0.18) //resize
        this.textObject = this.add.text(
            440,20,"Rocket",
            {
                fontFamily: 'CustomFont',
                color: "#ffffff",
                fontSize: 100,
            }
        );
        this.textObject = this.add.text(
            550,100,"The Art of Flying",
            {
                fontFamily: 'Merriweather',
                color: "#ffffff",
                fontSize: 30,
            }
        );
        this.textObject2 = this.add.text(
            35,430,"START",
            {
                fontFamily: 'Merriweather',
                color: "#ffffff",
                fontSize: 30,
                fontWeight: 'bold'
            }
        );
        
        this.textObject3 = this.add.text(
            35,462,"OPTIONS\nQUIT",
            {
                fontFamily: 'Merriweather',
                color: "#ffffff",
                fontSize: 30,
            }
        );
        // Fades out the text so it will look like the start option was chosen
        this.tweens.add({
            targets: [this.textObject3],
            alpha: 0,
            duration: 2000,
            delay: 1600,
            ease: 'Power2'
        });
       
        // Moves to next screen
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

class LoadingScreen extends Phaser.Scene {
    constructor() {
        super('LoadingScreen');
    }
    
    preload() {}  
    
    create() {
        // Creates a group for the stars
        const starGroup = this.add.group();
        let xCoord = 0;
        let yCoord = -20;
        let count = 0;
        for (let i = 0; i < 170; i++) {
            // Creates a new graphics object
            const graphics = this.add.graphics();
            graphics.fillStyle(0xffffcc, 1);
            // Defines the points of the star 
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
            // Draws the star using the points
            graphics.beginPath();
            graphics.moveTo(points[0].x, points[0].y);
            for (let j = 1; j < points.length; j++) {
                graphics.lineTo(points[j].x, points[j].y);
            }
            graphics.closePath();
            graphics.strokePath();
            graphics.fillPath();

            // Adds the graphics object to the star group
            starGroup.add(graphics);

            // Sets the initial position of the star on screen in rows
            graphics.x = xCoord
            graphics.y = yCoord;
            if (i % 14 == 0) { yCoord += 50; xCoord = -25;}
            xCoord += 60;
            // Creates a tweens to move the star off-screen in a random direction
            // Either random Y on screen and X is offscreen or the opposite
            let offscreenX = 0;
            let offscreenY = 0;
            if (count == 0) { 
                offscreenX = Phaser.Math.Between(-20, this.cameras.main.width + 20);
                offscreenY = Phaser.Math.Between(0, 20);
                count += 1;
            } else if (count == 1)  {
                offscreenX = Phaser.Math.Between(-20, this.cameras.main.width + 20);
                offscreenY = Phaser.Math.Between(580, 600);
                count += 1;
            } else if (count == 2)  {
                offscreenX = Phaser.Math.Between(0, 20);
                offscreenY = Phaser.Math.Between(-20, this.cameras.main.height + 20);
                count += 1;
            } else {
                offscreenX = Phaser.Math.Between(780,800);
                offscreenY = Phaser.Math.Between(-20, this.cameras.main.height + 20);
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
            100, 90,
            "You,\n\n\t\t\t\tthe ROCKET,\n\nwill be launched into the night sky", //text
            {
                fontFamily: 'CustomFont',
                color: "#fc5a44",
                fontSize: 40,
            } //style
        );
        this.textObject2 = this.add.text(
            100, 320,
            "You know what you will need to do…\n\nDon’t make us regret choosing you for the mission\n\nYou know what will happen if you mess up", //text
            {
                fontFamily: 'Merriweather',
                color: "#ffffff",
                fontSize: 30
            } 
        );
        this.textObject.alpha = 0;
        this.textObject2.alpha = 0;
        this.tweens.add({
            targets: [this.textObject, this.textObject2],
            alpha: 1,
            duration: 5000,
            delay: 3000,
            ease: 'Power2',
            onComplete: () => {
                this.time.addEvent({
                    delay: 800,
                    loop: false,
                    callback: () => {
                        this.scene.start("Introduction");
                    }
                })  
            }
        });
       
    }
    
    update(){}
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [Introduction, Video, TitleScreen, LoadingScreen],
    // scene: [Introduction,Video],
}
let game = new Phaser.Game(config);


