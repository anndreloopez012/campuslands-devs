const playerService= require('../services/playerService')

function getPlayers(re, res){
    const players = playerService.getAllPlayers();

    res.json(players);
}

module.exports ={
    getPlayers
};