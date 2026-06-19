const playerModel =require('../models/playerModel');

function getAllPlayers(){
    return playerModel.players.sort(
        (a, b)=> b.mmr - a.mmr
    );

}

module.exports={
    getAllPlayers
};