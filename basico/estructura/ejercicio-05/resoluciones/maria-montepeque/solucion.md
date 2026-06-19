# Ejercicio 05 — Sistema de taller de motos

**Nombre:** Maria Montepeque

## Solución

Estructura creada dentro de `taller-motos/`:

```
taller-motos/
├── index.js                         
├── modules/
│   ├── clientes/
│   │   ├── clientes.js               
│   │   └── README.md                 
│   ├── motos/
│   │   ├── motos.js                  
│   │   └── README.md                 
│   └── ordenes/
│       ├── ordenes.js                
│       └── README.md                
├── docs/
│   └── flujo-reparacion.md           
└── config/
    └── settings.example.json         
```

No hay archivos sueltos sin propósito: cada archivo tiene una responsabilidad
clara y `index.js` es el único en la raíz porque es el punto de entrada.

### Qué datos guarda cada módulo

- **`modules/clientes`**: las personas del taller — `id`, `nombre`, `telefono` y `correo`. No sabe nada de motos ni de órdenes.
- **`modules/motos`**: los vehículos — `id`, `idCliente` (referencia al dueño), `marca`, `modelo`, `anio`, `placa` y `kilometraje`.
- **`modules/ordenes`**: el trabajo del taller — `id`, `idCliente`, `idMoto`, `descripcionFalla`, `estado`, `fechaIngreso` y `costoEstimadoQ`. Es el módulo que conecta a los otros dos: valida que el cliente y la moto existan antes de aceptar una orden.

Cada módulo tiene además su propio `README.md` con la tabla completa de campos.

### Decisiones tomadas

- **Las órdenes referencian por `id`** en lugar de duplicar datos: si el cliente cambia de teléfono se actualiza en un solo lugar.
- **`docs/flujo-reparacion.md`** documenta los 5 estados (`recibida → en-diagnostico → en-reparacion → lista → entregada`) y las reglas del flujo; el módulo de órdenes valida contra esa misma lista de estados.
- **`config/settings.example.json`** es un ejemplo versionable: en un proyecto real cada quien copiaría este archivo a `settings.json` (ignorado por Git) con sus datos reales. Por eso lleva el sufijo `.example`.
- **`costoEstimadoQ: 0` significa "pendiente de diagnóstico"**, no gratis; el resumen lo muestra como texto en lugar de imprimir `Q0`.

## Cómo pensé el problema

1. Leí el README dos veces e identifiqué: entrada = requisitos de los 3 módulos + docs + config, proceso = diseñar la estructura y las relaciones entre módulos, salida = estructura documentada y comprobable.
2. Definí primero las entidades y sus relaciones: un cliente tiene motos, una moto tiene órdenes. Eso decidió que `ordenes` dependa de los otros dos módulos y no al revés.
3. Escribí los datos de ejemplo y la validación, porque una orden con referencias rotas es el error más probable en un taller real.
4. Documenté el flujo de estados en `docs/` para que las reglas de negocio no vivan solo en el código.

## Evidencia de comandos Git

```
git checkout dev
git pull origin dev
git checkout -b ejercicio-05-nombre-apellido
git status
git add basico/estructura/ejercicio-05/resoluciones/nombre-apellido/
git status
git commit -m "feat: resolver ejercicio 05 con estructura de taller de motos"
git push origin ejercicio-05-nombre-apellido
```

`git status` se usó antes y después del `add` para confirmar que solo se
incluyen archivos dentro de mi carpeta personal y que no se tocaron archivos
base del ejercicio ni ningún `.gitkeep`.

## Validación

Ejecuté `node index.js` desde `taller-motos/`:

- **Caso normal:** las órdenes `ord-001` y `ord-002` pasan la validación; el resumen muestra cliente, moto, falla, fecha y costo. La orden con `costoEstimadoQ: 0` imprime "Pendiente de diagnóstico" en lugar de `Q0`. ✔
- **Caso límite:** una orden con cliente inexistente (`cli-999`), estado inválido (`volando`) y descripción vacía es rechazada con los tres errores listados, sin romper el programa. ✔
- **Configuración:** `settings.example.json` carga sin errores con `require`, lo que confirma que es JSON válido. ✔

Salida real de la ejecución:

```
=== Órdenes de reparación del taller ===

Orden ord-001 [en-reparacion]
  Cliente: Carlos Méndez (5512-3344)
  Moto: Honda CB500F 2022 — placa M123ABC
  Falla: Ruido en la cadena y frenos traseros débiles
  Ingreso: 2026-06-08 | Costo estimado: Q850

Orden ord-002 [recibida]
  Cliente: Ana López (4477-8899)
  Moto: Yamaha MT-07 2021 — placa M456DEF
  Falla: Servicio mayor de 32,000 km
  Ingreso: 2026-06-10 | Costo estimado: Pendiente de diagnóstico

=== Caso límite: orden inválida ===
El cliente cli-999 no existe
Estado inválido: volando
La descripción de la falla no puede estar vacía
```

## Checklist de entrega

- [x] Carpeta dentro de `resoluciones/nombre-apellido/`
- [x] `modules/clientes`, `modules/motos` y `modules/ordenes` creados
- [x] `docs/flujo-reparacion.md` agregado
- [x] `config/settings.example.json` definido y validado
- [x] Explicación de qué datos guarda cada módulo
- [x] Sin archivos sueltos sin propósito
- [x] Validación con caso normal y caso límite
- [x] No se modificaron archivos base del ejercicio ni `.gitkeep`
