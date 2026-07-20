# Resolución: Merge de Ranking de Pingpong

**Autor:** estiben ixen
**Fecha:** 26 de junio de 2026
**Ejercicio:** 11  cambio de tarea (Git)

## razonamiento:

1. Razonamiento del problema
Para gestionar las reservas de turismo extremo, he diseñado un algoritmo que actúa como un filtro de seguridad y un calculador financiero. El proceso sigue esta lógica:

Validación de seguridad: Se verifica que, si la actividad es "paracaidismo", el cliente tenga al menos 18 años.

Cálculo de costos: Se aplica un impuesto del 12% sobre el costo base de cada reserva aprobada.

Filtrado: Se descartan las reservas que no cumplen con los requisitos de edad, generando un resumen limpio solo con los viajes permitidos.

2. Solución propuesta (JavaScript)
```javaScript


const reservas = [
    { nombre: "Ana", destino: "Alpes", actividad: "paracaidismo", edad: 25, costoBase: 500 },
    { nombre: "Luis", destino: "Andes", actividad: "paracaidismo", edad: 17, costoBase: 400 },
    { nombre: "Sara", destino: "Costa", actividad: "buceo", edad: 16, costoBase: 200 }
];

function procesarReservas(lista) {
    const IMPUESTO = 0.12;
    
    return lista
        .filter(reserva => {
            // Validación: Paracaidismo requiere >= 18 años
            if (reserva.actividad === "paracaidismo" && reserva.edad < 18) {
                return false;
            }
            return true;
        })
        .map(reserva => {
            // Cálculo del costo total con impuesto
            const costoTotal = reserva.costoBase * (1 + IMPUESTO);
            return {
                nombre: reserva.nombre,
                destino: reserva.destino,
                costoFinal: costoTotal.toFixed(2)
            };
        });
}
```
console.log(procesarReservas(reservas));
3. Explicación del proceso
filter: Es nuestra primera barrera de seguridad. Evalúa si la persona puede realizar la actividad según su edad. Si no cumple, el objeto es eliminado del arreglo resultante.

map: Una vez que tenemos solo las reservas válidas, transformamos la información original para incluir el costoFinal, que ya incluye el impuesto del 12%.

Legibilidad: He separado el cálculo del impuesto y la lógica de validación para que cualquier otro compañero de equipo pueda entender las reglas de negocio rápidamente.