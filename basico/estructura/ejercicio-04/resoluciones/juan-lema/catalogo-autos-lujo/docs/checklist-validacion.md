# Checklist de validacion — Catalogo de autos de lujo

## Caso normal

Con los 5 autos de `data/autos.json`, `ordenarPorPrecio` debe devolver este
orden (mayor a menor precio):

```
1. Lamborghini Revuelto     2024  $608,358
2. Ferrari SF90 Stradale    2023  $507,300
3. Rolls-Royce Phantom      2021  $460,000
4. Bentley Continental GT   2022  $232,725
5. Aston Martin DBS         2020  Precio no disponible
```

- [x] El orden es de mayor a menor precio.
- [x] Cada tarjeta muestra marca, modelo, anio, categoria y precio.

## Caso limite — precio en 0

El registro de `Aston Martin DBS` tiene `precioUSD: 0` a proposito.

- [x] `formatearPrecio` detecta el `0` y devuelve "Precio no disponible"
      en vez de `$0`.
- [x] `ordenarPorPrecio` no rompe: el auto sin precio queda al final del
      listado sin generar `NaN` ni errores de comparacion.

## Caso limite — catalogo vacio

Si `data/autos.json` fuera `[]`:

- [x] `mostrarCatalogo` no deja el contenedor en blanco; muestra el
      mensaje "No hay autos para mostrar."

## Caso limite — imagen faltante

Como `assets/cars/` no tiene imagenes reales todavia:

- [x] El atributo `onerror` de cada `<img>` reemplaza la imagen rota por
      un placeholder, en vez de mostrar el icono roto del navegador.

## Como se valido

Se probo llamando manualmente `ordenarPorPrecio(autos)` y
`formatearPrecio(precioUSD)` desde la consola del navegador con los datos
de `autos.json`, y verificando el resultado de `mostrarCatalogo` con la
lista completa, con `[]`, y con un registro de precio `0`.