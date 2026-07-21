# Presupuesto de estudio de animación 3D

## Nombre

Estiben Ixen

## Objetivo

Desarrollar una solución que permita calcular el costo de producción de cada escena, identificar las escenas con mayor costo, calcular el presupuesto total del proyecto y determinar la escena más costosa.

## Descripción de la solución

La solución realiza las siguientes operaciones:

1. Define un conjunto de escenas con sus horas de modelado, horas de render y cantidad de artistas.
2. Calcula el costo de cada escena utilizando la fórmula establecida.
3. Filtra las escenas cuyo costo supera **$1,000,000**.
4. Calcula el costo total del proyecto.
5. Identifica la escena con el mayor costo de producción.

## Fórmula utilizada

```text
Costo = (horasModelado × 40000)
      + (horasRender × 25000)
      + (artistas × 120000)
```

## Validación

**Caso normal**

- Escena con costos inferiores a $1,000,000.
- Se calcula correctamente su costo y se incluye en el total.

**Caso límite**

- Escena con costo superior a $1,000,000.
- Se identifica como una escena costosa y se agrega al listado correspondiente.

## Evidencia

Comandos utilizados:

```bash
git status
git add .
git commit -m "Agrega solución presupuesto de animación 3D"
git push origin nombre-rama
```

## Resultado

La solución fue almacenada en:

```text
basico/logica/ejercicio-15/resoluciones/nombre-apellido/
```

Se respetó la estructura del proyecto, sin modificar archivos base ni el trabajo de otros participantes.