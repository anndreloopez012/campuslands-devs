import { DestinoService } from '../services/service.js';
import { CardDestino } from '../components/card-destino.js';

export async function HomePage() {
    const destinoService = new DestinoService();
    // Esperamos a que el servicio termine de leer el JSON
    const listadoDestinos = await destinoService.obtenerTodosLosDestinos();
    
    let htmlContenido = `
        <main class="home-page-container">
            <h1>Descubre Próximos Destinos</h1>
            <section class="grid-destinos">
    `;

    listadoDestinos.forEach(destino => {
        htmlContenido += CardDestino(destino);
    });

    htmlContenido += `
            </section>
        </main>
    `;

    return htmlContenido;
}