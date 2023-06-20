class Click extends Phaser.Scene{
    constructor(){
        super('click');
    }

    create(){
        const msgs = ["You're wonderful!", "You are loved!", "You still have time!", "You deserve to rest!", "You're more capable than you think!", "You are so, so strong!", "This will pass!", 
                        "You are worthy!", "You are never alone!", "You're priceless!", "You're a diamond in the rough!", "You will succeed!", 
                        "Support is never that far away!"];
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        this.cameras.main.setBackgroundColor('#ffb6c1');
        let greeting = this.add.text(this.w/9.9, this.h/2, "Click if you like. I really hope it helps.\nYou're doing the best you can and that's all that matters.").setFontSize(45).setTintFill('0x000000').setWordWrapWidth(1500);
        this.input.on('pointerdown', () =>{
            greeting.text = msgs[Math.floor(Math.random() * (msgs.length-1))];
            greeting.x = this.w/3;
            greeting.setFontSize(75).setWordWrapWidth(600);
        });
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.innerWidth,
        height: window.innerHeight
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            }
        }
    },
    scene: [Click],
});