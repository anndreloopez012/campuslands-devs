# 🎬 Pipeline de Producción - Animación 3D 🚀
**Desarrolladora:** Allison Rocío Vargas Mejía  
**Nivel:** Básico Retador ⚡ | **Entorno:** Campuslands Devs  

---

## 🌸 1. Análisis y Razonamiento del Problema

Para resolver este último desafío técnico enfocado en un **Pipeline de Animación 3D**, diseñé una arquitectura lineal basada en el principio de **Flujo de Trabajo Secuencial Indexado**. En las industrias de desarrollo de videojuegos, efectos visuales o animación, el desorden de archivos provoca cuellos de botella masivos, donde los artistas pierden horas valiosas editando archivos de geometría obsoletos o renderizando texturas incorrectas.

Mi propuesta organizativa segmentó el ciclo de vida del asset en cuatro fases numeradas y un área de soporte:
1.  **Fases Numeradas (`01` a `04`):** El uso de prefijos numéricos obliga al sistema de archivos y a los desarrolladores a ver el proyecto de forma cronológica, respetando el orden natural de la producción (Modelado ➔ Texturizado ➔ Renderizado ➔ Entrega).
2.  **Aislamiento de Soporte (`referencias/`):** El material de inspiración visual e imágenes de guía de los directores se confinan en su propio espacio para evitar que contaminen las mallas poligonales limpias.
3.  **Gobernanza de Versiones (`docs/`):** Centraliza el reglamento del servidor, unificando el lenguaje del equipo y previniendo los nombres de archivos informales.

---

## 🎀 2. Estrategia Técnica: ¿Cómo evitar confundir archivos finales con pruebas?

Uno de los errores más catastróficos en el desarrollo de entornos interactivos es la sobreescritura de archivos o la confusión entre maquetas de prueba y entregas de producción. Para solucionar este problema de raíz en la arquitectura de carpetas, implementé dos mecanismos tácticos:
* **Separación Física de Entornos:** La carpeta `03-renders` y las primeras versiones de `01-modelado` actúan como un laboratorio de pruebas. El código o los motores de renderizado pueden generar cientos de archivos temporales allí. Por el contrario, la carpeta `04-entregas` es un espacio protegido; es un "santuario" de archivos congelados a donde solo llegan elementos que pasaron el filtro de calidad.
* **Estandarización Estricta de Nomenclatura Semántica:** Se erradicó el uso de palabras como "final_v2" o "ultimo_cambio". Al exigir el formato incremental `_v001`, `_v002`, el equipo sabe que el número más alto es siempre la última iteración de trabajo. El archivo definitivo se marca exclusivamente en la fase 04 con el prefijo `_final_v...`, haciendo imposible que un artista confunda una prueba con una entrega oficial por simple inspección visual.

---

## 🧪 3. Control de Casos de Validación Planteados

Para garantizar que la arquitectura soporte las operaciones de un estudio de animación real, se evaluaron dos escenarios de control:

1.  **Caso Normal (Flujo de Aprobación Exitoso) 💕:** Un artista termina la malla del personaje en la versión `personaje_v001.txt` dentro de la carpeta `01-modelado`. El director aprueba la geometría. El sistema procesa el cambio congelando el archivo y exportando de manera limpia el entregable hacia `04-entregas/personaje_final_v001.txt`, notificando al equipo de texturizado que la fase inicial ha concluido con éxito.
2.  **Caso Límite (Actualización Urgente de Último Minuto) ⚠️:** Si el cliente solicita una modificación de emergencia cuando el personaje ya está en la carpeta de entregas, la política del pipeline prohíbe renombrar el archivo final sobre el archivo existente. El flujo obliga al artista a reabrir la carpeta `01-modelado`, generar el cambio bajo el correlativo `personaje_v002.txt` para mantener la trazabilidad histórica, y tras una nueva aprobación, publicar en entregas el archivo `personaje_final_v002.txt`, evitando la corrupción de datos o la pérdida del historial de cambios.

---

