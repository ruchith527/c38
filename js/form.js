class Form {
    constructor() {
        this.input = createInput('Name');
        this.button = createButton('play')
        this.greeting = createElement('h2')
        this.reset = createButton('reset')
    }
    Hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display() {
        var title = createElement('h1');
        title.html("Car Racing Game(Chotu)");
        title.position(displayWidth/2-200,50);
        this.input.position(displayWidth/2-200,displayHeight/2-200);
        this.button.position(displayWidth/2-100,displayHeight/2-170);
        this.reset.position(100,170);
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello !!" + player.name);
            this.greeting.position(displayWidth/2,displayHeight/2);



        }
        )
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0)
            database.ref("/").update({
                players : null
            })
        })
    }
}















