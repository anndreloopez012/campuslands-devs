# Ejercicio #12 - Registro de soldadura industrial

**Camper:** Antonio Canux

## Solución completa (Estructura de archivos):

```plaintext
antonio-canux/
├── evidencias/
│   ├── imagenes/
│   │   ├── cupon_prueba_1G.jpg
│   │   └── macrofotografia_raiz_cordon.png
│   └── reportes/
│       ├── reporte_inspeccion_visual.pdf
│       └── reporte_ultrasonido.pdf
├── materiales/
│   ├── catalogo.md
│   └── hojas_seguridad_electrodos.pdf
├── practicas/
│   ├── practica_01_arco_manual_smaw.md
│   └── practica_02_mig_mag_gmaw.md
└── seguridad/
    ├── checklist.md
    └── manual_epp_taller.pdf
```

## Explicación del razonamiento:
Para resolver este problema, me enfoqué en crear una estructura que responda a las necesidades de auditoría y control de calidad de un taller de soldadura real:

**Carpetas principales:** Establecí la base solicitada (practicas, materiales, seguridad, evidencias) en la raíz del proyecto.

**Archivos clave:** Añadí checklist.md en el directorio de seguridad (vital antes de encender cualquier equipo) y el catalogo.md en materiales para tener un registro de consumibles (electrodos, gases, etc.).

**Regla de separación y evidencias:** Para cumplir estrictamente con la regla de "no mezclar reportes con imágenes", dividí la carpeta evidencias/ en dos subcarpetas: imagenes/ y reportes/.

**Evidencias aceptadas:** En esta estructura, se definió que las evidencias válidas se dividen en dos categorías estrictas:

**Imágenes:** Solo se aceptan fotografías en formato .jpg o .png que documenten visualmente los cupones de soldadura, los pases de raíz y los acabados superficiales.

**Reportes:** Solo se aceptan documentos técnicos en formato .pdf, como reportes de inspección visual (VT), pruebas de líquidos penetrantes o ensayos no destructivos (como ultrasonido o rayos X).