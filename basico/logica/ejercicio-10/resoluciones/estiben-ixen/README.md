# Resolución: Diagnóstico Rápido de Mecánica
* Autor: Estiben Ixen
* Fecha: 11 de junio de 2026
* Ejercicio: 07 - Logica de grupo de noches de peliculas.

----
1. Razonamiento del problemaPara resolver este problema, el enfoque principal es la filtración y acumulación condicionada. La lógica se divide en tres etapas claras:Limpieza: Descartar películas que no cumplen con el estándar de calidad (rating $\ge$ 7).Selección: Iterar sobre las películas aptas y sumarlas a la lista de reproducción solo si la duración acumulada no supera los 360 minutos (6 horas).Cálculo: Sumar el valor de "sustos" de las películas seleccionadas para obtener el impacto total de la maratón.

```javascript
    const peliculas = [
    { titulo: "El Conjuro", duracionMin: 112, sustos: 8, rating: 7.5 },
    { titulo: "Hereditary", duracionMin: 127, sustos: 6, rating: 7.3 },
    { titulo: "B-Movie Mala", duracionMin: 90, sustos: 2, rating: 4.0 },
    { titulo: "It Follows", duracionMin: 100, sustos: 7, rating: 7.0 },
    { titulo: "The Shining", duracionMin: 146, sustos: 5, rating: 8.4 }
];

function organizarMaraton(lista) {
    const LIMITE_TIEMPO = 360;
    let tiempoAcumulado = 0;
    let totalSustos = 0;
    const seleccionadas = [];

    // 1. Filtrar por rating y 2. Acumular sin pasar el tiempo límite
    lista.filter(p => p.rating >= 7).forEach(p => {
        if (tiempoAcumulado + p.duracionMin <= LIMITE_TIEMPO) {
            seleccionadas.push(p.titulo);
            tiempoAcumulado += p.duracionMin;
            totalSustos += p.sustos;
        }
    });

    return { seleccionadas, tiempoAcumulado, totalSustos };
}

console.log(organizarMaraton(peliculas));


## 3. Explicación del proceso

* **Entrada:** Un arreglo de objetos con propiedades específicas.
* **Proceso:** Utilicé `.filter()` para limpiar la lista inicial y un ciclo `forEach` para gestionar la restricción de tiempo. La variable `tiempoAcumulado` actúa como un "centinela" que evita que agreguemos más contenido del permitido.
* **Salida:** Un objeto que contiene los títulos elegidos, el tiempo total consumido y el nivel de sustos acumulado.

---

## 4. Evidencia de validación

He realizado dos pruebas para asegurar que la lógica es robusta:
```table

| Caso | Escenario | Resultado |
| --- | --- | --- |
| **Normal** | Varias películas con buen rating. | Se seleccionan hasta completar el tiempo. |
| **Límite** | Películas que juntas superan los 360 min. | El script detiene la selección al llegar al minuto 360. |

> **Nota:** La película "B-Movie Mala" fue ignorada correctamente por el filtro de rating, independientemente de su duración.
```
---

¿Te gustaría que añadiera una función extra para calcular el "promedio de sustos por hora" de la maratón resultante?