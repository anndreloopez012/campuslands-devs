
// Servicio encargado de gestionar las reglas de negocio para las reservas turísticas
class ReservaService {
    validarDisponibilidadReserva(destino, cantidadPersonas) {
        if (cantidadPersonas <= 0) {
            throw new Error("La cantidad de personas para la reserva debe ser mayor a cero.");
        }
        if (destino.cuposDisponibles <= 0) {
            throw new Error(`Lo sentimos, el destino ${destino.nombreCiudad} no tiene cupos disponibles.`);
        }
        return true;
    }
}

module.exports = ReservaService;