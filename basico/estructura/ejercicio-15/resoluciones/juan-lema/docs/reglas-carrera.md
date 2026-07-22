# Reglas de carrera

## Como se calcula el tiempo de vuelta

- Cada vehiculo tiene `velocidadMax` y `manejo`. Ambos valores aumentan el
  rendimiento del vehiculo: a mayor velocidad y mejor manejo, menor tiempo
  por vuelta.
- Cada pista tiene `largoKm`, que define un tiempo base por vuelta.
- Formula: `tiempoVuelta = (largoKm * 60) / ((velocidadMax / 100) * (manejo / 10))`
- El tiempo total de carrera es `tiempoVuelta * vueltas` de la pista.

## Reglas de participacion

- Un piloto sin `vehiculoId` no participa en el calculo de resultados; el
  simulador lo omite y lo reporta en consola, no detiene la ejecucion.
- Si el `vehiculoId` de un piloto no existe en `vehiculos.json`, tambien se
  omite del calculo, para evitar errores por datos inconsistentes.

## Orden de resultados

- Los resultados se ordenan de menor a mayor tiempo total (el primero en
  cruzar la meta es el que tiene el tiempo mas bajo).
- La posicion final (`posicion`) se asigna despues de ordenar, no antes.
