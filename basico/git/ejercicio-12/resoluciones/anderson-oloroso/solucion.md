# Resolución ejercicio 12 de git

**Henrik Anderson Oloroso García**

- Solución completa:

Para resolver el ejercicio se simula el desarrollo de una guía de viajes y turismo (`itinerario_cancun.md`). Se realizan tres modificaciones independientes y atómicas sobre el archivo, asegurando que cada una se registre con un commit que aplique buenas prácticas de redacción: uso de verbos en imperativo/infinitivo, mensajes concisos y descripciones claras que aporten contexto del cambio en lugar de mensajes genéricos.

```bash
git checkout dev
git checkout -b feature/itinerario-cancun

echo "# Itinerario de Viaje: Cancún" > itinerario_cancun.md
git add itinerario_cancun.md
git commit -m "Agrega estructura base e itinerario para Cancún"

echo "## Día 1: Visita a la Zona Arqueológica de Chichén Itzá" >> itinerario_cancun.md
git add itinerario_cancun.md
git commit -m "Añade actividad turística del día 1 a Chichén Itzá"

echo "## Recomendaciones: Llevar protector solar biodegradable y repelente" >> itinerario_cancun.md
git add itinerario_cancun.md
git commit -m "Documenta recomendaciones de viaje y cuidado ambiental"

git log --oneline --graph --all
```

- Breve explicación

Primero, se crea la rama de trabajo `feature/itinerario-cancun` a partir de `dev`. En lugar de acumular múltiples cambios en un solo commit grande, se segmenta la tarea en tres etapas lógicas y pequeñas para facilitar el seguimiento del historial.

En cada paso se redacta un mensaje de commit estructurado y descriptivo, evitando frases ambiguas como "cambios", "actualización" o "fix". Se emplean verbos de acción claros ("Agrega", "Añade", "Documenta") que indican exactamente qué funcionalidad o información se introdujo al proyecto.

Finalmente, al revisar el historial con `git log --oneline --graph --all`, cualquier otro desarrollador o integrante del equipo de turismo puede comprender inmediatamente la evolución del itinerario sin necesidad de inspeccionar el código o el contenido detallado de los archivos.