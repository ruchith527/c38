class Game {
    constructor() {

    }
    //read the game State
    getState() {
        database.ref('gameState').on("value", function (data) {
            gameState = data.val();
        })
    }


    //update the gameState
    update(state) {
        database.ref('/').update({
            gameState: state
        })
    }


    //create a start function to start the game
    start() {
        if (gameState === 0) {
            player = new Player();
            form = new Form();
            form.display();
            player.getCount();
        }

        car1 = createSprite(200, 300);
        car2 = createSprite(400, 300);
        car3 = createSprite(500, 300);
        car4 = createSprite(600, 300);
        cars = [car1,car2,car3,car4];
    }
    play() {
        form.Hide();
        Player.getPlayerInfo();
        if (allPlayers != undefined) {
            var index = 0;
            var x = 0;
            var y;

            for (var plr in allPlayers) {
                //it is the array index
                index = index + 1;
                //x position of individual car
                x = x + 200;
                //use data from database to display y position
                y = displayHeight - allPlayers[plr].distance
            
                cars[index - 1].x = x;
                cars[index - 1].y = y;
                if (index === player.index) { 
                    cars[index - 1].shapeColor = "black"
                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index-1].y
                }
               
                //textSize(20);
                //text(allPlayers[plr].name + " : " + allPlayers[plr].distance,120,y_postion);

            }
           
        }
        if(keyIsDown(UP_ARROW) && player.index != null){
            player.distance += 50;
            player.update();
           
        }

    }
}













