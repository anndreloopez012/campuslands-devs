# Ejercicio 03 — Backend básico para torneo de carreras

**Nombre:** Juan Lema

## Estructura

```
proyecto-torneo-carreras/
├── README.md
└── src/
    ├── controllers/carreraController.js
    ├── services/carreraService.js
    ├── models/Piloto.js
    └── routes/carreraRoutes.js
```

**Responsabilidad de cada capa:** `routes` mapea URLs → `controllers` recibe/valida `req` → `services` tiene la lógica de negocio (inscribir pilotos, calcular posiciones) → `models` define la forma de los datos (`Piloto`, `Carrera`).

## Cómo pensé el problema

Seguí el flujo real de una petición (`routes → controller → service → model`) para decidir qué va en cada carpeta, y conecté los 4 archivos con `require` para que se vea un proyecto real, no carpetas vacías.

## Validación

```
$ git checkout -b feature/ejercicio-03-juan-lema dev
$ mkdir -p src/controllers src/services src/models src/routes
```

- **Normal:** las 4 carpetas existen con su archivo de ejemplo. ✔
- **Límite:** controller valida `tiempoVuelta` ausente → error 400. ✔

## Checklist

- [x] Carpeta en `resoluciones/juan-lema/`
- [x] 4 subcarpetas con archivo de ejemplo cada una
- [x] README con explicación y validación
- [x] Sin tocar archivos base ni de otros alumnos