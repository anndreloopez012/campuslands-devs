# Solución: Inicializar repo de equipo esports

**Nombre:** Edgar Sanchez
**Ejercicio:** 01 - Git Básico Retador
**Ruta:** `basico/git/ejercicio-01/resoluciones/edgar-sanchez/`

---

## 1. Explicación del razonamiento

Para resolver este problema, enfoqué el trabajo como el inicio de un proyecto real de colaboración técnica. Los pasos seguidos fueron:

1.  **Aislamiento:** Creé una carpeta independiente para no interferir con otros repositorios, simulando el inicio de un proyecto desde cero.
2.  **Identidad:** El archivo `README.md` no solo cumple con el requisito, sino que define la identidad del equipo de shooters, esencial en un entorno profesional.
3.  **Trazabilidad:** Utilicé mensajes de commit claros (siguiendo estándares básicos) para que cualquier miembro del equipo sepa exactamente qué se hizo en el primer paso del proyecto.
4.  **Validación:** Utilicé comandos de inspección (`status` y `log`) para asegurar que el área de preparación (staging) y el historial fueran correctos antes de finalizar.

---

## 2. Solución completa y Evidencia de comandos

A continuación, detallo los comandos ejecutados y su propósito:

### Paso 1: Preparación del entorno
*Fuera del repositorio base para evitar repositorios anidados.*
```bash
mkdir esports-team-project
cd esports-team-project
