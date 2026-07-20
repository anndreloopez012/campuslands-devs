# Ejercicio 06 - Estructura 

## Análisis de Proyecto
Se necesita preparar una base para un proyecto relacionado con el turismo. Se necesita separar vistas, datos y logica de una app. 

## Resolución
├── daniel-borja.md                   <-- Archivo entregable de la solución
├── data/
│   └── destinos.json                 <-- Almacenamiento de catálogo de viajes
├── services/
│   └── reserva.service.js            <-- Lógica transaccional de pagos y booking
├── components/
│   └── card-destino.md               <-- Documentación del componente visual de tarjeta
└── pages/
    ├── inicio.js                     <-- Pantalla principal de bienvenida
    └── catálogo.js                   <-- Vista del listado de destinos turísticos

## Crecimiento a Futuro
Gestión de Usuarios: Se añadirá src/modules/autenticacion/ para proteger las sesiones de los clientes, sus perfiles e historiales de viajes.

Internacionalización: Se integrará un módulo data/locales/ con archivos JSON independientes (es.json, en.json) para ofrecer multi-idioma nativo en la app.

Módulo de Reseñas: Se escalará el componente agregando components/testimonio-usuario.js para permitir retroalimentación comunitaria de los viajeros, conectándose a un nuevo microservicio exclusivo en la carpeta services