
export class DestinoService {
    // Ahora es una función asíncrona que lee el archivo .json real
    async obtenerTodosLosDestinos() {
        const respuesta = await fetch('../data/destinos.json');
        const destinos = await respuesta.json();
        return destinos;
    }
}