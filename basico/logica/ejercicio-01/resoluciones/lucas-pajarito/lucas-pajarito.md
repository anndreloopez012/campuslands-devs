# 🎮 Ranking de Escuadras Shooter

## 📖 Descripción

Este proyecto simula un sistema de clasificación para un torneo de videojuegos tipo shooter.

La aplicación utiliza un arreglo de objetos para almacenar información de las escuadras participantes y calcula automáticamente la puntuación de cada una según su desempeño durante la partida.

Posteriormente, las escuadras son ordenadas de mayor a menor puntaje para generar un ranking final.

---

## 🎯 Objetivos

* Practicar el uso de arreglos de objetos en JavaScript.
* Manipular datos mediante iteraciones.
* Aplicar cálculos basados en reglas de negocio.
* Ordenar información utilizando métodos de JavaScript.
* Mostrar resultados en formato de ranking.

---

## 📋 Requisitos Implementados

### 1. Almacenamiento de Escuadras

Se utiliza un arreglo de objetos para guardar la información de cada escuadra.

Cada objeto contiene:

* Nombre de la escuadra.
* Cantidad de bajas.
* Posición obtenida.
* Cantidad de compañeros revividos.

Ejemplo:

```javascript
const escuadras = [
  {
    nombre: "Alpha Squad",
    bajas: 8,
    posicion: 1,
    revividos: 3
  }
];
```

---

### 2. Cálculo de Puntos

La puntuación se calcula utilizando las siguientes reglas:

#### Puntos por bajas

```text
Cada baja = 3 puntos
```

#### Puntos por posición

| Posición | Puntos |
| -------- | ------ |
| Top 1    | 20     |
| Top 2    | 14     |
| Top 3    | 10     |
| Otros    | 4      |

#### Fórmula

```text
Puntos Totales = (bajas × 3) + puntos por posición
```

---

### 3. Ordenamiento del Ranking

Una vez calculados los puntos, las escuadras son ordenadas de forma descendente para mostrar primero a la mejor clasificada.

Criterio:

```text
Mayor puntaje → Menor puntaje
```

---

### 4. Visualización de Resultados

El sistema muestra un ranking con la siguiente información:

| Ranking | Escuadra    | Puntos |
| ------- | ----------- | ------ |
| 1       | Alpha Squad | 44     |
| 2       | Bravo Team  | 35     |
| 3       | Delta Force | 28     |

---

## 🛠 Tecnologías Utilizadas

* HTML5
* CSS3
* JavaScript

---

## 📂 Estructura del Proyecto

```text
📦 proyecto
├── src
│   ├── html
│   │   └── index.html
│   ├── css
│   │   └── style.css
│   └── js
│       └── main.js
├── assets
└── README.md
```

---

## ⚙️ Funcionamiento

1. Se registran las escuadras en un arreglo de objetos.
2. Se calcula el puntaje individual de cada escuadra.
3. Se asignan los puntos correspondientes a la posición obtenida.
4. Se ordenan los resultados de mayor a menor.
5. Se genera el ranking final.
6. Los datos se muestran en consola o en una tabla HTML.

---

## ✅ Resultados Esperados

Al finalizar la ejecución, el sistema debe:

* Calcular correctamente los puntos de cada escuadra.
* Ordenar las escuadras según su puntuación.
* Mostrar un ranking claro y legible.
* Facilitar la comparación entre equipos participantes.

---

## 📚 Conceptos Practicados

* Arreglos (`Array`)
* Objetos (`Object`)
* Métodos de iteración (`map`, `forEach`)
* Ordenamiento (`sort`)
* Manipulación de datos
* Generación de rankings
* Renderizado dinámico en HTML

# Autor 
``` Bash
Lucas Samuel Pajarito Surek 
```