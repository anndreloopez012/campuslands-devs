## Ejericio para Integracion de ramas, commits, pull, push y revisión final.

### **¿Qué se hizo en este ejercicio?**
- Implementamos un flujo de trabajo profesional y limpio para resolver una tarea técnica. En lugar de codificar a lo loco directamente en la rama principal, seguimos una metodología estructurada paso a paso:

- Aislamiento del entorno (Git checkout -b): Nos paramos en la rama de desarrollo actualizada (dev) y creamos una rama independiente para trabajar en la tarea.

- Desarrollo atómico: Nos enfocamos en resolver un problema específico y pequeño a la vez. No mezclamos refactorizaciones ni arreglos de otros bugs en este espacio.

- Documentación del progreso: Registramos el cambio con un mensaje de commit descriptivo y profesional, explicando el qué y el porqué del cambio, no solo el cómo.

- Sincronización proactiva: Antes de dar el trabajo por terminado, trajimos los últimos cambios de dev a nuestra rama para resolver cualquier conflicto de código en nuestro propio entorno local.

- Control de calidad final: Pasamos la solución por una lista de verificación (checklist) rigurosa para asegurar que el código no solo funciona, sino que es mantenible, limpio y cumple con los estándares del equipo.

**¿Por qué es tan importante haberlo hecho así?**
- Trabajar de esta manera no es por mero capricho burocrático; tiene un impacto directo en la salud del proyecto y en el día a día del equipo:

- Cero código roto en producción: Al aislar el trabajo en una rama propia y actualizar con dev antes de entregar, garantizamos que nuestro código no va a romper las funcionalidades que otros compañeros ya subieron. Los conflictos se resuelven en casa, no en el servidor.

- Revisiones de código (Code Reviews) ultra rápidas: Al hacer commits claros y soluciones pequeñas, el compañero que revisa nuestro Pull Request (PR) entiende perfectamente qué se hizo en 5 minutos en lugar de perderse en un mar de 500 líneas de código desordenado.

- Historial de Git impecable: Si dentro de 6 meses algo falla, un historial con commits profesionales nos permite usar herramientas como git blame o git log para entender exactamente qué decisión se tomó en este momento y por qué.

- Consistencia y paz mental: El checklist final nos quita el miedo al "¡Ay, se me olvidó borrar ese console.log!" o al "¡No corrí los tests locales!". Nos asegura que lo que entregamos tiene sello de calidad profesional.

**¡Un flujo limpio se traduce en software estable y menos dolores de cabeza en los despliegues!**