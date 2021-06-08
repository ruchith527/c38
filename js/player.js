
class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;

    }
    //read playerCount from database
    getCount() {
        database.ref('playerCount').on("value", (data) => {
            playerCount = data.val();
        })
    }
    //update playerCount to database
    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        })
    }

    //update name to database
    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }
    static getPlayerInfo() {
        database.ref('players').on("value", (data) => {
            allPlayers = data.val();
        })
    }
}








































