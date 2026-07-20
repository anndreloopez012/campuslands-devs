# Análisis de Rendimiento MOBA por Rol (Coach Report)

**Desarrollador:** Nombre Apellido

---

## 1. Enfoque

Cuando un coach revisa el desempeño de un equipo MOBA, no puede evaluar todos los roles con el mismo criterio ni mezclar los datos crudos con la lógica de evaluación. Separé el problema en dos partes para que sea limpio y escalable:

1. **Los Datos en su lugar (`jugadores.json`):** La información de cada jugador (rol, kills, deaths, assists, oro, objetivos) vive en un archivo independiente. Si mañana se agregan más jugadores o partidas, solo se toca este archivo sin modificar la lógica.
2. **La Lógica de Evaluación (`app.js`):** Aquí se calculan las métricas y se toman las decisiones. En lugar de anidar condicionales complejos en una sola función gigante, dividí el proceso en funciones pequeñas y con un solo propósito: calcular KDA, validar oro, detectar pocos objetivos, ordenar y generar alertas.

---

## 2. Explicación de las funciones

### `calcularKDA(jugador)`

Aplica la fórmula `(kills + assists) / max(deaths, 1)`. Uso `Math.max(jugador.deaths, 1)` para evitar la división entre cero cuando un jugador no ha muerto ninguna vez, tal como lo indica el ejemplo del enunciado.

### `tieneOroSuficiente(jugador)`

Valida si el oro del jugador supera los 12000, devolviendo un booleano claro en lugar de mezclar esta condición dentro de otra función.

### `tienePocosObjetivos(jugador)`

Compara los objetivos del jugador contra `OBJETIVOS_MINIMOS` (2). Esta constante está declarada arriba del archivo para que el umbral se pueda ajustar sin buscar dentro de la lógica.

### `construirReporteJugador(jugador)`

Transforma un jugador crudo en un objeto de reporte con KDA calculado y ambas validaciones (oro y objetivos) ya resueltas. Esto evita recalcular KDA varias veces en distintas partes del código.

### `ordenarPorKDA(reportes)`

Ordena los reportes de mayor a menor KDA. Uso el spread `[...reportes]` para no mutar el arreglo original, siguiendo la buena práctica de no modificar datos que otras funciones puedan seguir usando.

### `generarAlertasObjetivos(reportes)`

Filtra únicamente los jugadores marcados con `alertaObjetivos` y construye un mensaje legible por rol y nombre, en vez de simplemente devolver los objetos crudos.

### `analizarEquipo(listaJugadores)`

Función orquestadora: conecta todo el flujo (construir reportes → ordenar → generar alertas) y devuelve un solo objeto con ambos resultados, para que el punto de entrada del programa quede simple.

---

## 3. Validación

**Caso normal:**

Con los 5 jugadores de ejemplo (Top, Jungla, Mid, ADC, Soporte), el orden por KDA resultante es:
ADC     -> KDA 13
Soporte -> KDA 7.5
Mid     -> KDA 6
Jungla  -> KDA 3
Top     -> KDA 2.33
Alertas generadas: Jungla y Soporte, ambos con 1 objetivo (por debajo del mínimo de 2).

**Caso límite:**

Si un jugador tiene `deaths: 0`, la función `calcularKDA` usa `Math.max(0, 1)` como divisor, evitando `NaN` o `Infinity` en el cálculo, tal como pide el ejemplo del enunciado.

Ambos casos se verificaron ejecutando `node app.js` y revisando la tabla generada por `console.table` junto con las alertas impresas.