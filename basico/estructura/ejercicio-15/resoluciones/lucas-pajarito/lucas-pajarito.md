# Organización del Proyecto y Documentación de Reglas de Carrera

## Objetivo

Organizar la estructura del proyecto mediante una correcta separación de archivos y carpetas, documentando las reglas de la carrera, aislando la configuración de los resultados y verificando que cada directorio tenga un propósito específico.

---

## Actividades realizadas

Durante el desarrollo del ejercicio se llevaron a cabo las siguientes acciones:

1. Se documentaron las **reglas de la carrera**, describiendo las condiciones, normas y criterios utilizados para el desarrollo de la competencia.

2. Se separó la **configuración** de los **resultados**, organizando ambos elementos en carpetas independientes para facilitar su mantenimiento y evitar mezclar información de distinta naturaleza.

3. Se revisó la estructura completa del proyecto para garantizar que cada carpeta tuviera una función claramente definida.

---

## Estructura del proyecto

```text
proyecto/
│
├── configuracion/
│   ├── reglas.md
│   ├── parametros.json
│
├── resultados/
│   ├── clasificacion.txt
│   ├── tiempos.csv
│
├── src/
│   └── programa.js
│
└── README.md
```

---

## Organización implementada

### Carpeta `configuracion`

Contiene toda la información necesaria para definir el comportamiento de la carrera, incluyendo:

- Reglas.
- Parámetros.
- Configuraciones generales.

### Carpeta `resultados`

Almacena únicamente la información generada después de ejecutar la carrera, por ejemplo:

- Clasificaciones.
- Tiempos.
- Reportes.
- Estadísticas.

### Carpeta `src`

Contiene el código fuente del programa encargado de procesar la información.

---

## Validación realizada

Se verificó que:

- Cada carpeta tuviera un propósito específico.
- No existieran archivos de configuración dentro de la carpeta de resultados.
- Los resultados generados no modificaran los archivos de configuración.
- La estructura del proyecto fuera clara y fácil de mantener.

---

## Beneficios obtenidos

- Mejor organización del proyecto.
- Separación adecuada entre datos de configuración y resultados.
- Mayor facilidad para localizar archivos.
- Mantenimiento más sencillo.
- Reducción de errores ocasionados por mezclar información.

---

## Conclusión

La organización implementada permitió mantener una estructura clara y ordenada del proyecto. Al documentar las reglas de la carrera, separar la configuración de los resultados y asignar un propósito definido a cada carpeta, se obtuvo un proyecto más fácil de comprender, mantener y ampliar en futuras versiones.