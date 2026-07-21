# Sistema de carreras urbanas

## Nombre

Estiben Ixen

## Objetivo

Organizar la estructura de un simulador de carreras urbanas separando correctamente los datos, la lógica del sistema y la documentación.

## Estructura propuesta

```text
data/
├── pilotos/
├── vehiculos/
├── pistas/

src/
└── simulador/

docs/
```

## Descripción

* **data/pilotos:** almacena la información de los pilotos.
* **data/vehiculos:** contiene los vehículos disponibles y un archivo de ejemplo.
* **data/pistas:** guarda la información de las pistas.
* **src/simulador:** contiene la lógica principal del simulador.
* **docs:** incluye la documentación y las reglas de la competencia.

## Validación

Se verificó que:

* Cada carpeta tiene un propósito específico.
* La configuración está separada de los resultados.
* Existe un ejemplo de vehículo.
* La estructura facilita la organización y el mantenimiento del proyecto.

## Evidencia

Comandos utilizados:

```bash
git status
git add .
git commit -m "Agrega estructura del sistema de carreras urbanas"
git push origin nombre-rama
```

## Resultado

La solución fue creada dentro de:

```text
basico/estructura/ejercicio-15/resoluciones/nombre-apellido/
```

Se respetó la estructura solicitada sin modificar archivos base ni el trabajo de otros participantes.
