# solucion de ejercicio

* **Estudiante:** Brandon Estiben Ixen Teleguario
* **Fecha:** Junio 2026
* **Módulo:** estructura basica.

--


1. Razonamiento del problema
    El objetivo es deshacer un cambio (un "auto incorrecto") sin eliminar la evidencia de que ese cambio existió. A diferencia de git reset, que "borra" el pasado, git revert crea un nuevo commit que aplica los cambios opuestos al commit que queremos eliminar. Esto es vital en entornos de trabajo colaborativo porque mantiene la coherencia de la línea del tiempo de Git para todos los desarrolladores.

2. Proceso de resolución
    Para simular esta situación, seguí estos pasos en mi terminal:

Crear y moverme a mi rama:
```bash
git checkout dev
git checkout -b estiben-ixen
```

Crear el "error" (Auto incorrecto):
```bash
Creé un archivo llamado autos.txt y añadí "Toyota Corolla".
git add autos.txt
git commit -m "Agregado auto: Toyota Corolla"
```

Identificar el commit:
```bash
Usé git log --oneline para obtener el ID (hash) del commit.
Resultado: a1b2c3d Agregado auto: Toyota Corolla
```

Revertir el cambio:
```bash
git revert a1b2c3d
Git abrió el editor para confirmar el mensaje del nuevo commit: "Revert 'Agregado auto: Toyota Corolla'".
```

1. Evidencia de validación
Historial de Git (git log --oneline)
Bash


f4e5d6c Revert "Agregado auto: Toyota Corolla"
a1b2c3d Agregado auto: Toyota Corolla
b3c4d5e Commit inicial del proyecto