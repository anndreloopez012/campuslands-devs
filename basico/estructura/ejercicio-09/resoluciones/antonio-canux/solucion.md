# Ejercicio #09 - Organización de Estudio de Tatuajes

**Camper:** Antonio Canux

---

## 1. Solución Completa (Árbol de Carpetas)

A continuación se detalla la estructura del proyecto utilizando nombres de directorios sin espacios y organizando lógicamente los requerimientos:

```
antonio-canux/
└── studio/
│   ├── agenda/
│   │   └── citas_junio_2026.csv
│   ├── clientes/
│   │   ├── cliente_001/
│   │   │   └── placeholder_brazo_izquierdo.txt
│   │   └── cliente_002/
│   │       └── placeholder_espalda.txt
│   ├── disenos/
│   │   └── plantilla_ficha_diseno.md
│   ├── referencias/
│   │   └── estilo_tradicional/
│   └── README.md
└──solucion.md
```

## 2. Explicación del Pensamiento Lógico
Para resolver este problema, se aplicó un enfoque de desarrollo estructurado, pensando en cómo escalaría este proyecto en un entorno real:

**Convención de nombres:** Utilicé snake_case (minúsculas y guiones bajos) para garantizar que no haya problemas de compatibilidad en diferentes sistemas operativos o al momento de desplegar el sistema.

**Aislamiento de datos:** Separé claramente los `clientes` (donde iría información sensible) de los disenos (que es propiedad intelectual del estudio) y las `referencias` (inspiración externa).

**Cumplimiento del reto:** Incluí archivos `.txt` vacíos con nombres descriptivos (`placeholder_brazo_izquierdo.txt`) dentro de las carpetas de los clientes para cumplir estrictamente con la regla de no usar imágenes reales.

## 3. Evidencia de Validación
Los comandos utilizados en la terminal para replicar y validar esta estructura de forma rápida y sin errores fueron:

```Bash
cd resoluciones
mkdir -p antonio-canux
cd antonio-canux
mkdir -p studio/{referencias,disenos,clientes/cliente_001,clientes/cliente_002,agenda}
touch solucion.md
touch studio/disenos/plantilla_ficha_diseno.md
touch studio/clientes/cliente_001/placeholder_brazo_izquierdo.txt
touch studio/clientes/cliente_002/placeholder_espalda.txt
touch studio/README.md
```

La estructura fue verificada visualmente mediante el comando tree, confirmando que no existen espacios en blanco y que los archivos requeridos están en su ruta correspondiente.