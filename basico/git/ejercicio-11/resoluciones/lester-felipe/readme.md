

# Git Stash y Git Stash Pop: Guía Rápida y Sencilla
## Autor: Lester Garcia

Imagina que estás trabajando en una nueva funcionalidad en tu código, pero de repente surge un error urgente que debes solucionar en otra rama. No quieres perder los cambios que llevas hechos, pero tampoco estás listo para hacer un `commit` porque el código está a medias. 

Aquí es donde entra **`git stash`**.

---

## 1. ¿Qué es `git stash`?
`git stash` funciona como un **cajón temporal** donde puedes guardar tus cambios actuales sin guardarlos definitivamente en el historial del proyecto.

Al ejecutar este comando:
1. Tus cambios sin terminar (tanto modificados como en el área de preparación/stage) se guardan a un lado de forma segura.
2. Tu directorio de trabajo vuelve a estar "limpio" (idéntico al último commit).
3. Ahora puedes cambiar de rama o solucionar ese error urgente sin conflictos.

**Comando básico:**
```bash
git stash