# Solución: Pipeline de animación 3D

## Explicación fácil de entender

Vamos a organizar un proyecto de animación 3D como si fuera un estudio profesional. Cada etapa del proceso tiene su propia carpeta: primero modelamos, luego agregamos texturas, después renderizamos y finalmente entregamos. También vamos a incluir documentación y referencias para que todo esté ordenado.

---

## Estructura de carpetas creada
``` text
jakelin-quino/
├── 01-modelado/
│ ├── personajes/
│ └── escenarios/
├── 02-texturas/
│ ├── colores/
│ └── especulares/
├── 03-renders/
│ ├── pruebas/
│ └── finales/
├── 04-entregas/
│ ├── cliente/
│ └── equipo/
├── docs/
│ └── pipeline.md
├── referencias/
│ ├── imagenes/
│ └── videos/
└── jakelin-quino.md
```


---

## Paso a paso (lo que hice)

### 1. Crear las 4 carpetas principales
- **01-modelado/** - Archivos .blend, .fbx, .obj (modelos 3D)
- **02-texturas/** - Imágenes PNG, JPG para colores, normales y brillos
- **03-renders/** - Imágenes renderizadas (pruebas y finales)
- **04-entregas/** - Versiones listas para enviar al cliente o equipo

**¿Por qué números?**  
Los números (01, 02, 03, 04) ayudan a seguir el orden del pipeline. Así sabemos que primero se modela, luego se texturiza, después se renderiza y al final se entrega.

---

### 2. Crear docs/pipeline.md
Este archivo explica el flujo de trabajo:
```markdown
# Pipeline de animación 3D

## Flujo de trabajo
1. **Modelado** → Crear los objetos 3D
2. **Texturas** → Aplicar colores y materiales
3. **Render** → Generar imágenes finales
4. **Entrega** → Enviar al cliente