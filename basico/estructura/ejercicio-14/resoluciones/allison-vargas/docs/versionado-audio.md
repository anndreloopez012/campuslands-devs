# Guía y Convención de Versionado de Audio

## Convención de Nombres
Todos los archivos de audio dentro del proyecto deben seguir la estructura estándar:
- **Mezclas y borradores:** `[nombre-cancion]-v[numero-dos-digitos].[ext]`  
  *Ejemplo:* `sintonia-v01.wav`, `sintonia-v02.wav`
- **Archivos Masterizados:** `[nombre-cancion]-master-v[numero-dos-digitos].[ext]`  
  *Ejemplo:* `sintonia-master-v01.wav`

## Justificación Técnica: Separación de Masters y Borradores
Es crítico mantener la carpeta `masters/` separada de `mixes/` y `tracks/` por las siguientes razones:
1. **Control de calidad y entrega:** Los archivos masterizados son el producto final listo para distribución comercial o plataformas de streaming.
2. **Prevención de errores de exportación:** Evita que por confusión se envíe a distribución un borrador incompleto o sin procesar.
3. **Optimización del flujo de trabajo:** Los ingenieros de mezcla y masterización trabajan en etapas distintas; mantenerlos aislados evita sobreescrituras accidentales.