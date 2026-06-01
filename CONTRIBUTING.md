# Contributing

Gracias por trabajar en Campuslands Devs. Este repositorio simula un entorno profesional, por eso cada contribución debe respetar estructura, ramas y nombres.

## Flujo obligatorio

1. Actualiza `dev`.
2. Crea una rama propia desde `dev`.
3. Trabaja únicamente dentro de una carpeta propia en `resoluciones/`.
4. Usa el formato de carpeta `nombre-apellido/`.
5. Crea commits claros.
6. Sube tu rama.

## Estándar para commits

Este repositorio usa un formato inspirado en **Conventional Commits** para que el historial sea fácil de leer, revisar y mantener.

Formato obligatorio:

```text
tipo(area): mensaje corto en infinitivo
```

Ejemplo:

```text
feat(logica): agregar solucion de ranking battle royale
```

## Tipologías de commits

Usa el tipo que mejor describa el cambio:

| Tipo | Uso |
| --- | --- |
| `feat` | Agrega una nueva solución, ejercicio, archivo o funcionalidad. |
| `fix` | Corrige un error en una solución, ruta, nombre de archivo o explicación. |
| `docs` | Cambia documentación, README, instrucciones o comentarios educativos. |
| `style` | Ajusta formato, espacios, nombres o presentación sin cambiar la lógica. |
| `refactor` | Reorganiza una solución sin cambiar el resultado esperado. |
| `test` | Agrega pruebas, casos de validación o evidencias de ejecución. |
| `chore` | Realiza tareas de mantenimiento, configuración o limpieza. |
| `revert` | Revierte un commit anterior sin borrar el historial. |

## Áreas recomendadas

El área ayuda a ubicar rápidamente qué parte del repositorio cambió.

Ejemplos de áreas válidas:

- `logica`
- `estructura`
- `git`
- `docs`
- `config`
- `ejercicio-01`
- `resoluciones`

## Ejemplos correctos

```text
feat(logica): agregar solucion de inventario tactico
fix(git): corregir pasos para resolver conflicto
docs(estructura): aclarar convenciones de carpetas
test(logica): agregar casos de validacion para ranking
chore(config): actualizar plantilla de pull request
refactor(logica): separar calculo de puntos en funcion
```

## Ejemplos incorrectos

```text
cambios
final
arreglo
subiendo tarea
feat: cosas
fix
```

Estos mensajes son incorrectos porque no explican qué cambió ni dónde ocurrió el cambio.

## Reglas para escribir buenos commits

- Escribe el mensaje en minúscula, excepto nombres propios.
- Usa verbos claros: `agregar`, `corregir`, `actualizar`, `separar`, `validar`.
- Mantén el mensaje corto, pero específico.
- No mezcles muchos ejercicios distintos en un solo commit.
- Si resolviste dos ejercicios, haz dos commits separados.
- Antes de hacer commit, ejecuta `git status` y revisa que solo estés subiendo tus archivos.

## Cuándo usar cada tipo

Usa `feat` cuando entregues una solución nueva:

```text
feat(logica): agregar solucion de comparador de motos
```

Usa `fix` cuando corrijas algo que estaba mal:

```text
fix(resoluciones): corregir nombre de archivo de entrega
```

Usa `docs` cuando mejores instrucciones o explicaciones:

```text
docs(git): explicar diferencia entre merge y pull
```

Usa `refactor` cuando tu solución sigue haciendo lo mismo, pero queda mejor organizada:

```text
refactor(logica): dividir validaciones en funciones pequeñas
```

Usa `test` cuando agregues evidencia o casos de prueba:

```text
test(logica): documentar pruebas de tabla de futbol sala
```

Usa `chore` para tareas de mantenimiento que no cambian ejercicios:

```text
chore(config): limpiar archivos temporales ignorados
```

## Commit recomendado para alumnos

Para la mayoría de entregas individuales, usa este patrón:

```text
feat(area): resolver ejercicio XX
```

Ejemplos:

```text
feat(logica): resolver ejercicio 01
feat(estructura): resolver ejercicio 04
feat(git): resolver ejercicio 08
```

## Reglas de colaboración

- No editar archivos de otros alumnos.
- No borrar `.gitkeep`.
- No modificar los README base de los ejercicios sin autorización del instructor.
- No subir dependencias pesadas, carpetas temporales ni archivos generados innecesarios.
- No trabajar directamente sobre `main`.
- No subir archivos sueltos directamente dentro de `resoluciones/`; cada entrega debe ir en `resoluciones/nombre-apellido/`.

## Revisión antes de entregar

Antes de subir tu solución, revisa:

- El archivo está dentro de tu carpeta personal en `resoluciones/nombre-apellido/`.
- El nombre de tu carpeta cumple el formato solicitado.
- Tu código o respuesta se entiende sin explicación oral.
- El ejercicio se puede validar con los ejemplos del README.
- `git status` solo muestra los archivos que querías cambiar.
