# Ejercicio 12 - Control de inventario streetwear — Juan Lema

## Tematica

Ropa urbana / streetwear. Control de stock por talla, deteccion de bajo
stock y calculo de reposicion sugerida por prenda.

## Estructura de carpetas

```
juan-lema/
├── inventario.js   # logica: procesa, marca bajo stock, calcula reposicion y agrupa por talla
└── README.md       # este archivo (explicacion y evidencia)
```

## Como pense el problema

1. Identifique entrada, proceso y salida:
   - Entrada: lista de prendas con nombre, talla, stock y ventasSemana.
   - Proceso: marcar bajo stock (stock < 5), calcular reposicion sugerida
     (`ventasSemana * 2 - stock`, sin negativos) y agrupar por talla.
   - Salida: reporte de texto por talla con alerta de bajo stock.
2. Separe la logica en funciones pequenas y con nombres claros
   (`esBajoStock`, `calcularReposicion`, `procesarInventario`,
   `agruparPorTalla`, `generarReporte`) para que cada una tenga una sola
   responsabilidad y sea facil de probar por separado.
3. Deje la generacion del reporte al final, combinando el resultado de las
   funciones anteriores en vez de mezclar calculo con impresion.

## Notas tecnicas

- La reposicion sugerida se calcula como `ventasSemana * 2 - stock`. Si el
  resultado es negativo (stock mayor a la demanda proyectada), se controla
  con un condicional para devolver `0` en vez de un numero negativo.
- El bajo stock se marca con la condicion `stock < 5`, tal como lo pide el
  ejercicio.
- El agrupado por talla usa `reduce` para no repetir logica de busqueda de
  grupos existentes.

## Validacion (dos casos + caso del ejemplo)

Caso del ejemplo del enunciado — ventasSemana 8, stock 3:

```
reposicion sugerida = 8 * 2 - 3 = 13
```

Coincide con el resultado esperado por el README del ejercicio.

Caso normal — inventario con varias prendas y tallas:

```
Talla M
  - Hoodie Oversize: stock 3, ventas 8, reposicion sugerida 13 (BAJO STOCK)
  - Cargo Pants: stock 6, ventas 2, reposicion sugerida 0
  - Tee Basica: stock 20, ventas 3, reposicion sugerida 0

Talla S
  - Cargo Pants: stock 0, ventas 4, reposicion sugerida 8 (BAJO STOCK)
  - Tee Basica: stock 4, ventas 1, reposicion sugerida 0 (BAJO STOCK)
```

Caso limite — inventario vacio: la funcion `generarReporte` devuelve el
mensaje `"No hay prendas para mostrar."` en lugar de fallar o mostrar un
reporte en blanco.

Caso limite adicional — prenda con stock en 0 y ventas altas: se valida que
la reposicion sugerida se calcule correctamente sin division ni valores
negativos (`8 * 2 - 0 = 16`, marcada como BAJO STOCK).