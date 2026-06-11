// src/models/partida.model.js

class Partida {
  constructor({ mapa, maximoEquipos }) {
    this.id = Date.now();
    this.mapa = mapa;
    this.maximoEquipos = maximoEquipos;
    this.equiposInscritos = []; 
    this.estado = "en_espera"; 
  }
}

module.exports = Partida;
