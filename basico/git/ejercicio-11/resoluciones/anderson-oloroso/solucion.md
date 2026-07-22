# Resolución ejercicio 11 de git

**Henrik Anderson Oloroso García**

- Solución completa:

Para resolver el ejercicio se simula un flujo de trabajo en el que se están realizando modificaciones temporales sobre un archivo de rutinas de kickboxing (`rutina.md`), pero se requiere cambiar de contexto urgentemente para atender otra tarea sin realizar un commit incompleto. Se utiliza `git stash` para resguardar los cambios no confirmados, se simula el cambio de rama y finalmente se restauran los cambios guardados mediante `git stash pop`.

```bash
git checkout dev
echo "Rutina base: Jab + Cross + Low Kick" > rutina.md
git add rutina.md
git commit -m "Agrega rutina base de kickboxing"

echo "Avance temporal: Combinacion con Middle Kick" >> rutina.md
git status

git stash save "Avance incompleto de combinacion de patadas"

git checkout -b hotfix/corregir-horarios
echo "Horario: Lunes y Miércoles 19:00 hrs" > horarios.md
git add horarios.md
git commit -m "Corrige horarios de clase"

git checkout dev
git stash pop

git log --oneline --graph --all
```

- Breve explicación

Primero, se inicia el archivo `rutina.md` en la rama `dev` con un primer commit. Posteriormente, se agrega un avance parcial a la rutina sin registrarlo en un commit y se verifica con `git status` que el archivo figura como modificado en el área de trabajo.

Para evitar hacer un commit prematuro con código/texto incompleto antes de cambiar de contexto, se ejecuta `git stash save`, lo cual guarda de forma temporal las modificaciones locales en el limpiaparabrisas (stash) de Git y deja el directorio de trabajo limpio.

A continuación, se cambia libremente a una rama de corrección rápida (`hotfix/corregir-horarios`), se resuelve la tarea urgente y se realiza su respectivo commit. Al regresar a la rama `dev`, se ejecuta `git stash pop` para recuperar los cambios que se habían guardado temporalmente y eliminarlos de la pila de stashes, permitiendo continuar con el desarrollo de la rutina de kickboxing exactamente donde se había dejado.