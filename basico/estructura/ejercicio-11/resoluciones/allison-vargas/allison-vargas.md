# 🏢 Sistema de Organización - Proyecto de Arquitectura 3D 📐
**Desarrolladora:** Allison Rocío Vargas Mejía  
**Nivel:** Básico Retador ⚡ | **Entorno:** Campuslands Devs  

---

## 🌸 1. Análisis y Razonamiento del Problema

Para resolver este desafío enfocado en un **Proyecto de Arquitectura 3D**, diseñé una estructura basada en el principio de **Segregación de Estados Dinámicos y Estandarización de Vistas**. En los estudios de arquitectura e ingeniería civil reales, mezclar los planos en desarrollo con los renders finales o usar nombres ambiguos (como "dibujo1" o "render_ok") provoca retrasos costosos en las constructoras y graves errores de interpretación en las obras de campo.

Mi estrategia organizativa dividió el entorno en áreas bien definidas:
1.  **Gobernanza de Criterios (`docs/`):** Establece las reglas del juego mediante guías semánticas y provee una plantilla de entrega obligatoria para asegurar que ningún proyecto salga del estudio incompleto.
2.  **Planificación Técnica (`planos/` y `modelos/`):** Almacena las mallas tridimensionales y las distribuciones vectoriales en espacios independientes, evitando que se mezclen los elementos de diseño puro con los de presentación comercial.
3.  **Fase Comercial (`renders/` y `materiales/`):** Organiza los activos de visualización fotorrealista e infografías, sirviendo como catálogo estético para el cliente.

---

## 🎀 2. Estrategia de Gestión: Separación de Borradores y Finales

La clave del éxito en esta arquitectura de carpetas radica en la erradicación absoluta de nombres genéricos, implementando dos reglas técnicas obligatorias:
* **Estandarización de Nombres de Vistas:** Se implementó una política de nombrado claro utilizando palabras clave descriptivas en minúsculas y separadas por guiones medios (como `fachada-principal` o `perspectiva-interior-cocina`). Esto permite que tanto el motor de renderizado automatizado como cualquier modelador identifiquen instantáneamente qué parte del edificio contiene el archivo.
* **Filtro de Estados de Archivo:** Para prevenir que el departamento de presupuestos o los ingenieros calculistas usen una imagen vieja de prueba por confusión, los archivos se dividen mediante sufijos explícitos. Los archivos con el sufijo `-borrador` se reconocen inmediatamente como material de trabajo interno e incompleto, mientras que el sufijo `-final` actúa como una etiqueta de certificación que indica que el elemento ha sido congelado y aprobado para su entrega.

---

## 🧪 3. Control de Casos de Validación Ejecutados

Para garantizar la estabilidad y el orden de la estructura del proyecto arquitectónico, se validaron dos escenarios operativos:

1.  **Caso Normal (Flujo de Aprobación de Fachada) 💕:** Un modelador genera una prueba de iluminación para el frente del edificio y la guarda como `renders/fachada-principal-borrador.txt`. Tras recibir la aprobación del arquitecto principal, el archivo se procesa en alta resolución, se congela y se publica con éxito en la carpeta correspondiente como un entregable verificado, listo para ser adjuntado en la `plantilla-entrega.txt`.
2.  **Caso Límite (Falta de Archivos Clave en la Entrega) ⚠️:** Si el equipo administrativo intenta compilar el paquete de fin de obra para el cliente utilizando la plantilla de control, pero el plano de distribución conserva el sufijo `planta-baja-borrador.txt` (lo que indica que sigue en fase de cambios), los controles lógicos del sistema detienen la entrega de forma segura, impidiendo la salida de documentación técnica en borrador hacia la constructora.

---
