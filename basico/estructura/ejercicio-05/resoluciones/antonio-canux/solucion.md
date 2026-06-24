# Ejercicio 05 — Sistema de taller de motos

**Camper:** Antonio Canux

## Solución

Esta es la estructura que se creó dentro de `taller/`:

```
taller/                       
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

### Qué datos guarda cada módulo

- **`modules/motos`**: Este módulo guarda la información relacionada a las motos registradas dentro del taller, este módulo no tiene nada que ver con las órdenes ni con los clientes.
- **`modules/clientes`**: Este módulo guarda la información referente a los clientes del taller, no tiene nada que ver con las órdenes ni con las motos.
- **`modules/ordenes`**: Este módulo se encarga de registrar las ordenes de trabajo generadas dentro del taller, y es la encargada de conectar a los otros dos módulos.

Dentro de cada módulo se encuentra la documentación referente al mismo.


## Cómo se pensó el problema?

1. Primero se leyó el README detenidamente identificando cual era el objetivo principale del ejercicio.
2. Se definió la estructura y dependencia entre modulos de manera secuencial: El cliente entrega la moto, la moto recibe una orden de trabajo.
3. Después de definir el orden, se llevó a cabo la estructuración dentro del proyecto, se crearon los ejemplos necesarios a fin de no dejar carpetas vacías o sin función, para cumplir con todos los requisitos del ejercicio.

## Evidencia de comandos Git

```
git checkout dev
git pull origin dev
git checkout -b alumno/antonio-canux/ejercicio-05
git status
git add basico/estructura/ejercicio-05/resoluciones/antonio-canux/
git status
git commit -m "feat: Resolver ejercicio 05 de estructura"
git push origin alumno/antonio-canux/ejercicio-05
```

`git status` se usó antes y después del `add` para confirmar que solo se
incluyen archivos dentro de mi carpeta personal y que no se tocaron archivos
base del ejercicio ni ningún `.gitkeep`.

