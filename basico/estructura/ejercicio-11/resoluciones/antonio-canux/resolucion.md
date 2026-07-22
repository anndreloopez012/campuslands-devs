# Resolución - Ejercicio 10: Animación 3D

**Camper:** Antonio Canux

## Solución completa (Estructura de archivos):

```plaintext
antonio-canux/
├── docs/
│   ├── convenciones.md
│   ├── especificaciones_tecnicas.pdf
│   └── plantilla_de_entrega.md
├── materiales/
│   ├── texturas/
│   │   ├── concreto_pulido_albedo.png
│   │   └── madera_roble_normal.jpg
│   └── shaders/
│       └── cristales_exteriores.mat
├── modelos/
│   ├── borradores/
│   │   ├── volumetria_base_v1.skp
│   │   └── volumetria_base_v2.skp
│   └── finales/
│       ├── edificio_principal_final.blend
│       └── topografia_optimizada.obj
├── planos/
│   ├── planta_baja_distribucion.dwg
│   ├── elevacion_lateral.pdf
│   └── cotas_y_medidas_estructurales.dxf
└── renders/
    ├── borradores/
    │   ├── prueba_iluminacion_hdri.jpg
    │   └── fachada_principal_ruido.jpg
    └── finales/
        ├── fachada-principal.png
        ├── vista-interior-lobby.png
        └── perspectiva-aerea.png
```

## Explicación del razonamiento:

Para resolver este problema, dividí el proyecto siguiendo el flujo de trabajo estándar de un artista 3D o arquitecto:

**Separación de etapas:** Creé carpetas base para cada tipo de recurso (Planos para medidas, Modelos para geometría, Materiales para texturas, y Renders para salidas visuales).

**Control de versiones (Drafts vs Finals):** Dentro de las carpetas de trabajo más pesado (Modelos y Renders), creé subcarpetas borradores/ y finales/. Esto evita que un render de prueba de baja calidad se envíe al cliente por error.

**Nomenclatura:** Apliqué kebab-case para las salidas finales como fachada-principal.png, lo cual facilita la compatibilidad si estos archivos se suben a un servidor web o gestor de proyectos.

**Documentación:** Centralicé todo el papeleo en docs/, incluyendo el archivo convenciones.md solicitado y la plantilla de entrega.
