# Ejercicio 006: App de Reservas Turísticas

* **Estudiante:** Irma Yaneht Arias García
* **Temática:** Organización modular y separación de vistas, componentes, lógica y datos para una plataforma de viajes y turismo.

## 📌 Razonamiento y Proceso
1. **Análisis de Requisitos:** Se estructuró el proyecto evitando carpetas o nombres genéricos, asignando responsabilidades claras a cada directorio (`paginas/`, `componentes/`, `servicios/`, `datos/`).
2. **Cómo crecería el proyecto:**
   - A medida que la aplicación escale, se pueden incorporar nuevas páginas en la carpeta `paginas/` (como perfiles de usuario o pasarelas de pago), componentes adicionales en `componentes/` y controladores conectados al servicio de reservas.
3. **Validaciones Clave:** Se implementó control sobre los cupos disponibles de cada destino y validación de cantidades mayores a cero para prevenir errores comunes en procesos de reserva.

## 🗂️ Árbol de Carpetas

basico/
└── estructura/
    └── ejercicio-06/
        └── resoluciones/
            └── irma-arias/
                ├── paginas/
                │   └── inicio.html
                ├── componentes/
                │   └── card-destino.md
                ├── servicios/
                │   └── reservaService.js
                ├── datos/
                │   └── destinos.json
                └── README.md