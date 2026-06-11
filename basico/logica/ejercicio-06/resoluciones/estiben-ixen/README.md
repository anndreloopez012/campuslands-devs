# Resolución: Comparador de Motos Deportivas

**Autor:** estiben ixen
**Fecha:** 11 de junio de 2026
**Ejercicio:** 06 - Lógica de rendimiento (Motos)

# razonamiento
El problema requiere transformar datos crudos en metricos de decision. mi enfoque feu:
- mapeo: crea la propiedad 'relacion' (hp/kg) para estandarizar el rendimiento.
- filtrado: aplicar una caja de presupuesto ( <500,000) para destacar motos fuera de alcance
- clasificasion dua: La mejor opcion es subjetiva: buscamos la 'relacion', pero para economia buscamos el menor 'mantenimientomensual'

-Validación
Caso Normal: Con los datos de prueba, la Yamaha R1 destaca en pista al tener una relación alta y mantenimiento dentro del rango.

-Caso Límite: Si ninguna moto cumpliera el filtro de presupuesto, el código devolvería una estructura vacía o undefined. En un escenario real, añadiría una validación if (procesadas.length === 0) para manejar esta situación y notificar al usuario.


## 1. Implementación (JavaScript)

```javascript
const motos = [
  { marca: "Yamaha", modelo: "R1", hp: 200, pesoKg: 199, mantenimientoMensual: 450000 },
  { marca: "Kawasaki", modelo: "Ninja H2", hp: 300, pesoKg: 238, mantenimientoMensual: 600000 },
  { marca: "KTM", modelo: "RC 390", hp: 44, pesoKg: 155, mantenimientoMensual: 150000 }
];

function compararMotos(listaMotos) {
  // 1. Calcular relación peso-potencia y filtrar por presupuesto
  const procesadas = listaMotos
    .map(m => ({ ...m, relacion: m.hp / m.pesoKg }))
    .filter(m => m.mantenimientoMensual < 500000);

  // 2. Ordenar por mejor relación (mayor es mejor en términos de potencia)
  const ranking = [...procesadas].sort((a, b) => b.relacion - a.relacion);
  
  // 3. Ordenar por costo (menor mantenimiento es mejor para opción económica)
  const economica = [...procesadas].sort((a, b) => a.mantenimientoMensual - b.mantenimientoMensual);

  return {
    mejorPista: ranking[0],
    mejorEconomica: economica[0]
  };
}

console.log(compararMotos(motos));

```

# conclusion 
- Este ejercicio demuestra que la lógica de programación no solo trata de calcular, sino de aplicar filtros de negocio a los datos. La separación entre el procesamiento de la lista y la extracción de las mejores opciones permite escalar el comparador si decidiéramos añadir más criterios en el futuro (como seguridad o fiabilidad).
