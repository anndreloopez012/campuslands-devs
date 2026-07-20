# Entrega de Ejercicio: Estructura de Proyecto Arquitectónico 3D

## Alumno: 

Sergio Ricardo Ajú Miranda

## 1. Razonamiento del Problema

Para este desafío, mi prioridad fue crear una jerarquía que prevenga el desorden típico de los proyectos 3D, donde los archivos se duplican o se pierden las rutas de texturas.

    Entrada: Necesidad de organizar diversos tipos de archivos (planos, renders, docs).

    Proceso: Clasificación por función y estado de producción.

    Salida: Una estructura de carpetas modular que separa el material de trabajo (borradores) del producto final.

2. Solución: Estructura de Carpetas
Plaintext

sergio-aju/
├── sergio-aju.md
├── docs/
│   ├── convenciones.md        # Definición de nomenclatura
│   └── plantilla_entrega.md   # Formato para entregas finales
├── planos/                 # Archivos CAD y esquemas técnicos
├── modelos/                # Archivos de modelado 3D (base)
├── materiales/             # Librería de texturas y shaders
└── renders/
    ├── borradores/            # Iteraciones en progreso
    └── finales/               # Resultados listos para entrega

3. Evidencia de Validación

Para asegurar que el trabajo está correcto, realicé las siguientes comprobaciones:

    Validación de Ruta: Se confirmó que la carpeta se encuentra en basico/estructura/ejercicio-11/resoluciones/sergio-aju/.

    Validación de Git:
    Bash

    # Comandos ejecutados para asegurar la estructura:
    git checkout -b feature/estructura-proyecto
    mkdir -p basico/estructura/ejercicio-11/resoluciones/sergio-aju/
    # Verificación de que el .gitkeep base no fue alterado
    git status

Nota para tu entrega: Asegúrate de que el nombre de tu carpeta sea exactamente sergio-aju (o el que prefieras, siempre que sea nombre-apellido) antes de hacer el git push.