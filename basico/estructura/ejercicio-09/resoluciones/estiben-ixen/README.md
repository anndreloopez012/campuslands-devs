# solucion de ejercicio

* **Estudiante:** Brandon Estiben Ixen Teleguario
* **Fecha:** Junio 2026
* **Módulo:** estructura basica.

* Contexto: Organización de archivos para un estudio de tatuajes, enfocado en el orden, la privacidad de los datos de los clientes y la eficiencia técnica.

* Estructura del proyecto
La jerarquía de archivos diseñada es la siguiente:

Plaintext

```bash

estiben-ixen/
├── agenda/          # Gestión de citas y disponibilidad.
├── clientes/        # Información sensible (fichas, consentimientos).
├── diseños/         # Archivos fuente (.psd, .ai) y borradores.
├── referencias/     # Bibliotecas visuales, estilos e inspiración.
├── README.md        # Este archivo.
└── ficha_diseno.md  # Plantilla base para cada nuevo diseño.
```

## Razonamiento del problema

## Análisis: 
    Separé la información según su nivel de acceso. Los datos de clientes requieren mayor privacidad, mientras que las referencias son de consulta abierta para el equipo.

## Proceso: 
    Utilicé nombres cortos, en minúsculas y sin espacios para asegurar compatibilidad multiplataforma (Linux, Windows, macOS).

## Privacidad: 
    He configurado la estructura de manera que el acceso a la carpeta clientes/ sea gestionado estrictamente, manteniendo solo la información necesaria.
