# Buenas prácticas de mensajes para turismo

**Desarrollador:** Selvin Eladio Lem Ical

---

# 1. Pensamiento e Idea del Problema

En un proyecto de gestión de paquetes turísticos, el historial de Git suele ser lo primero que revisa otro desarrollador para entender qué cambió y por qué. Si los commits se escriben con mensajes genéricos como "cambios" o "update", se pierde por completo el contexto y el historial deja de ser útil como documentación del proyecto.

Para resolver este ejercicio, se planteó un flujo de trabajo dividido en los siguientes pasos:

1. Crear tres cambios pequeños relacionados con la temática de viajes y turismo.
2. Escribir un commit por cada cambio, usando un verbo claro en modo imperativo (`add`, `fix`, `update`).
3. Evitar mensajes genéricos que no describan la intención del cambio.
4. Listar los commits con `git log --oneline`.
5. Evaluar si otro desarrollador entendería el historial sin necesitar contexto adicional.

---

# 2. Solución Paso a Paso

A continuación, se muestra el proceso realizado en consola junto con la explicación de cada comando utilizado.

---

## Paso 1: Crear el primer cambio y su commit

### Comandos

```
echo "Destino: Antigua Guatemala" > destino.txt
git add destino.txt
git commit -m "feat: add initial destination file"
```

### Explicación

Se crea el archivo `destino.txt` con la información base de un destino turístico. El mensaje `feat: add initial destination file` usa el prefijo `feat` (nueva funcionalidad/contenido) y un verbo claro en infinitivo, dejando claro qué se agregó sin necesidad de abrir el archivo.

---

## Paso 2: Crear el segundo cambio y su commit

### Comandos

```
echo "Precio por persona: Q450" > precios.txt
git add precios.txt
git commit -m "feat: add pricing information for tour package"
```

### Explicación

Se crea el archivo `precios.txt` con el costo del paquete turístico. El mensaje describe con precisión el contenido agregado (información de precios), evitando términos vagos como "cambios en archivo" o "update".

---

## Paso 3: Crear el tercer cambio y su commit

### Comandos

```
echo "Cupo maximo: 15 personas por salida" >> destino.txt
git add destino.txt
git commit -m "fix: correct max capacity value for group tours"
```

### Explicación

Se modifica `destino.txt` agregando el cupo máximo del tour. En este caso se usó el prefijo `fix` porque el mensaje comunica una corrección de un dato específico (capacidad del grupo), diferenciándolo claramente de un `feat`.

---

## Paso 4: Listar el historial de commits

### Comando

```
git log --oneline
```

### Salida

```
1dbdbd2 fix: correct max capacity value for group tours
c76e82b feat: add pricing information for tour package
9a14480 feat: add initial destination file
```

### Explicación

El comando `git log --oneline` muestra el historial en formato resumido, con un identificador corto de commit y su mensaje. Esto permite verificar de un vistazo si los mensajes son autoexplicativos.

---

## Paso 5: Evaluar la legibilidad del historial

### Explicación

Al revisar el historial generado, cada mensaje sigue la estructura `tipo: acción + qué + contexto`, lo que permite que otro desarrollador entienda sin ambigüedad:

* Qué se hizo (`add`, `fix`).
* Sobre qué se hizo (destino, precios, cupo).
* Para qué se hizo (información del tour, corrección de capacidad).

Ningún mensaje usa términos genéricos como "cambios", "update" o "arreglos", por lo que el historial cumple con el objetivo de ser profesional y legible.

---

# 3. Conclusión

Con esta práctica se logró construir un historial de commits claro y profesional, usando prefijos convencionales (`feat`, `fix`) y mensajes descriptivos que comunican tanto el qué como el porqué de cada cambio.

Además, se comprendió que un buen mensaje de commit no debe describir el código línea por línea, sino la intención del cambio, de forma que cualquier miembro del equipo pueda entender el historial sin depender de explicaciones externas.