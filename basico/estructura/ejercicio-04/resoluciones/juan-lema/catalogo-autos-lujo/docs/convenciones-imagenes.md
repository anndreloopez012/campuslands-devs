# Convenciones de imagenes — assets/cars

Para que `src/logica/catalogo.js` pueda relacionar cada registro de
`data/autos.json` con su imagen sin errores, todas las imagenes dentro de
`assets/cars/` deben seguir esta convencion:

```
marca-modelo-anio.jpg
```

Reglas:

- Todo en minusculas.
- Sin espacios: se reemplazan por guiones medios (`-`).
- Sin acentos ni caracteres especiales (ñ, á, é, etc.).
- Si el modelo tiene mas de dos palabras, se simplifica
  (ejemplo: "Continental GT" -> `continental-gt`).
- Extension permitida: `.jpg` o `.png` unicamente.

## Ejemplos validos

| Marca       | Modelo         | Anio | Nombre de archivo esperado      |
|-------------|----------------|------|----------------------------------|
| Ferrari     | SF90 Stradale  | 2023 | ferrari-sf90-stradale-2023.jpg   |
| Lamborghini | Revuelto       | 2024 | lamborghini-revuelto-2024.jpg    |
| Bentley     | Continental GT | 2022 | bentley-continental-gt-2022.jpg  |

## Ejemplos invalidos

- `Ferrari SF90.jpg` (mayusculas y espacios)
- `bentley_continental_gt_2022.jpg` (guion bajo en vez de guion medio)
- `rolls royce phantom.png` (sin anio, con espacios)

La carpeta `assets/cars/` todavia no tiene imagenes reales, solo un
`.gitkeep` para que Git la trackee vacia. `src/vista/mostrarCatalogo.js`
contempla ese caso mostrando un placeholder cuando la imagen no existe.