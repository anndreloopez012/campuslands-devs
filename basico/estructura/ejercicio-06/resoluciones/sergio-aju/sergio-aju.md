## Ejercicio 06: Estructura de Proyecto - App de Reservas Turísticas

## Autor:

Sergio Ajú

## Módulo: Estructura de proyectos (Backend/Frontend)

## 1. Razonamiento del Problema

Para organizar este proyecto, decidí aplicar una arquitectura basada en separación de responsabilidades.

### Funcion de cada carpeta.
```
    Data: Centraliza la información (mock data) para no tener objetos dispersos en la lógica.

    Services: Actúa como puente para consumir los datos, permitiendo que en el futuro sea fácil cambiar un JSON local por una API real.

    Components: Elementos visuales reutilizables.

    Pages: Ensamblan los componentes para formar las vistas finales del usuario.
```

## 2. Estructura de Directorios

```
sergio-aju/
├── data/
│   └── destinos.json          # Base de datos local de viajes
├── components/
│   └── card-destino.md        # Documentación y diseño del componente
├── services/
│   └── services.js            # Lógica para filtrar/obtener destinos
├── pages/
│   └── pages.js               # Vista principal de la app
└── sergio-aju.md              # Este documento de explicación
```
