# 🎨 Sistema de Arquitectura - Estudio de Tatuajes y Dibujo ✒️
**Desarrolladora:** Allison Rocío Vargas Mejía  
**Nivel:** Básico Retador ⚡ | **Entorno:** Campuslands Devs  

---

## 🌸 1. Análisis y Razonamiento del Problema

Para resolver este desafío enfocado en la **Organización de un Estudio de Tatuajes**, diseñé una estructura que equilibra la gestión de los recursos creativos (dibujos, referencias) con el control operativo (agenda) y la seguridad de la información. En el desarrollo de software real para estudios estéticos o artísticos, mezclar los archivos de diseño con las agendas genera caos y eleva los riesgos de fuga de información corporativa.

Mi estrategia organizativa distribuyó las responsabilidades del sistema en cuatro pilares sin espacios en los nombres:
1.  **Planificación Temporal (`agenda/`):** Centraliza las fechas, horas y estados de las sesiones en un archivo estructurado para evitar colisiones de horarios entre artistas.
2.  **Expedientes Protegidos (`clientes/`):** Aísla los registros personales usando archivos de marcador seguro para cumplir con los estándares de privacidad.
3.  **Propiedad Intelectual (`diseños/`):** Almacena las piezas originales listas para ser transferidas a la piel de forma separada a las carpetas de inspiración externa.
4.  **Inspiración Comercial (`referencias/`):** Directorio exclusivo para almacenar las imágenes de ideas que los clientes traen de internet.

---

## 🔒 2. Política y Explicación de Privacidad de Datos

La gestión de datos en un estudio de tatuajes es un asunto crítico. La información recopilada abarca desde nombres completos hasta antecedentes médicos esenciales (como alergias a tintas o problemas de coagulación). 

Por lo tanto, la arquitectura sigue estrictamente estas políticas de seguridad:
* **Cero Imágenes Reales en Repositorios Públicos:** Subir fotografías de la piel de los clientes o sus rostros a GitHub viola las normativas de protección de identidad. El sistema implementa un archivo de marcador (`placeholder-expediente.txt`) para demostrar la estructura del software sin exponer datos reales.
* **Seguridad por Aislamiento:** Al separar la carpeta `clientes/` de la carpeta `diseños/`, se garantiza que los artistas visuales puedan navegar por el catálogo de dibujos de forma libre frente a un cliente, sin peligro de desplegar de forma accidental datos médicos de otras personas en la pantalla de visualización.

---

## 📋 3. Plantilla Oficial de Ficha de Diseño

Para estandarizar la creación de nuevas piezas de arte dentro del módulo `diseños/`, todos los archivos deben documentarse siguiendo la siguiente plantilla técnica estándar:

```text
======================================================================
📋 FICHA TÉCNICA DE DISEÑO DE TATUAJE - ESTUDIO ARTÍSTICO
======================================================================
- ID del Diseño: [Escribir código único, ej: dsn-404]
- Nombre de la Obra: [Título asignado por el artista]
- Artista Creador: [Nombre del tatuador]
- Estilo: [Blackwork / Tradicional / Realismo / Neotradicional]
- Tamaño Sugerido: [Dimensiones estimadas en centímetros, ej: 15x10 cm]
- Complejidad: [Baja / Media / Alta / Master]
- Ubicación Recomendada en el Cuerpo: [Brazo, pierna, espalda, etc.]
- Colores Utilizados: [Lista de pigmentos requeridos]
======================================================================