// Servicio encargado de la lógica de negocio para las partidas Battle Royale
class MatchService {
    validarCapacidadEquipos(equiposRegistrados, maximosPermitidos) {
        // Valida un caso normal y un caso límite (vacío o superado)
        if (equiposRegistrados <= 0) {
            throw new Error("El número de equipos no puede ser cero o negativo.");
        }
        if (equiposRegistrados > maximosPermitidos) {
            throw new Error("Se ha superado el límite máximo de equipos para este mapa.");
        }
        return true;
    }
}

module.exports = MatchService;