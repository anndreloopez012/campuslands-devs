# Ejercicio: Git Stash - Entrenamiento Kickboxing

**Alumno:** 

Sergio Ricardo Ajú Miranda

## Descripción del Problema
El objetivo fue simular una situación de trabajo donde se requiere cambiar de contexto (o rama) de manera urgente, sin perder los cambios realizados en el área de trabajo y evitando realizar commits innecesarios o incompletos.

## Razonamiento
1. **Identificación:** Se detectó que el archivo `rutina_kickboxing.txt` tenía cambios técnicos que no estaban listos para un commit final.
2. **Decisión:** Se utilizó `git stash` para "almacenar" el trabajo en una pila temporal, dejando el directorio de trabajo limpio para realizar otras tareas.
3. **Restauración:** Una vez atendida la urgencia, se utilizó `git stash pop` para recuperar los cambios y continuar el entrenamiento.

## Validación
- Se verificó mediante `git status` que el directorio quedó limpio tras el stash.
- Se confirmó mediante `cat` que el archivo recuperó los cambios tras el pop.

## 2. Comandos ejecutados 

# 1. Configuración de entorno
git checkout -b feature/entrenamiento-kickboxing
mkdir -p basico/git/ejercicio-11/resoluciones/sergio-aju/
cd basico/git/ejercicio-11/resoluciones/sergio-aju/

# 2. Creación y modificación
printf "Combo 1: Jab - Directo - Crochet\n" > rutina_kickboxing.txt
printf "Combo 1: Jab - Directo - Crochet\nAdicionando: Patada baja técnica\n" > rutina_kickboxing.txt

# 3. Gestión de urgencia con Stash
git status
git stash save "Pausa: Ajuste técnico de patada baja"
git status  # Validación: 'nothing to commit'

# 4. Recuperación
cat rutina_kickboxing.txt  # Validación: contenido base
git stash pop
cat rutina_kickboxing.txt  # Validación: contenido completo recuperado

# 5. Finalización
git add rutina_kickboxing.txt
git commit -m "feat: implementar rutina de kickboxing con uso de stash"