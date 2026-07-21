# Privacidad de Datos en Proyectos de Diseño

## Objetivo

Aplicar buenas prácticas para proteger la información de clientes durante el desarrollo de proyectos de diseño, garantizando el uso responsable de los datos personales y evitando la exposición de información sensible.

---

# ¿Qué es la privacidad de datos?

La privacidad de datos consiste en proteger la información personal y confidencial de clientes, usuarios o empresas, asegurando que solo las personas autorizadas puedan acceder a ella.

En proyectos de diseño es común trabajar con:

- Fotografías
- Logotipos
- Información de contacto
- Direcciones
- Redes sociales
- Documentos
- Material publicitario

Toda esta información debe manejarse de forma responsable.

---

# Buenas prácticas

## 1. No compartir información personal

Evita publicar información como:

- Nombres completos
- Teléfonos
- Correos electrónicos
- Direcciones
- Documentos de identidad

Si es necesario mostrar ejemplos, utiliza datos ficticios.

---

## 2. Utilizar imágenes de ejemplo (Placeholders)

**No se deben subir imágenes reales de clientes** a repositorios públicos.

En su lugar utiliza imágenes de prueba o placeholders.

Ejemplos:

```
assets/
│
├── placeholder-persona.jpg
├── placeholder-producto.png
└── placeholder-logo.svg
```

También puedes utilizar servicios como:

- https://placehold.co
- https://picsum.photos

---

## 3. Evitar subir archivos sensibles

No incluir en el repositorio:

- Contratos
- Facturas
- Credenciales
- Bases de datos de clientes
- Fotografías privadas
- Información financiera

---

## 4. Organizar correctamente los archivos

Una estructura recomendada es:

```text
proyecto/
│
├── assets/
│   ├── placeholders/
│   ├── iconos/
│   └── logos/
│
├── diseños/
│
├── documentos/
│
└── README.md
```

---

## 5. Utilizar archivos `.gitignore`

Si existen archivos privados, deben excluirse del repositorio.

Ejemplo:

```gitignore
clientes/
privado/
*.psd
*.ai
*.zip
```

---

# Plantilla de ficha de diseño

Cada proyecto puede documentarse utilizando la siguiente ficha.

## Información general

| Campo | Descripción |
|--------|-------------|
| Proyecto | |
| Cliente | *(usar nombre ficticio o código interno)* |
| Diseñador | |
| Fecha | |
| Versión | |

---

## Objetivo del diseño

Describe el propósito del proyecto.

Ejemplo:

> Crear un banner promocional para redes sociales.

---

## Recursos utilizados

- Tipografías
- Colores
- Iconografía
- Placeholders
- Logos autorizados

---

## Archivos entregados

- PNG
- JPG
- SVG
- PDF

---

## Observaciones

Registrar cambios importantes, revisiones o comentarios del proyecto.

---

# Uso de imágenes

## Correcto ✅

```
assets/
    placeholder-cliente.jpg
```

```
assets/
    placeholder-logo.png
```

```
assets/
    producto-demo.png
```

---

## Incorrecto ❌

```
assets/
    cliente_juan_perez.jpg
```

```
assets/
    ine_cliente.png
```

```
assets/
    pasaporte_cliente.jpg
```

```
assets/
    fotografia_real_cliente.png
```

---

# Recomendaciones

- Solicita autorización antes de utilizar material de un cliente.
- Elimina metadatos sensibles de las imágenes cuando sea necesario.
- Mantén la información privada fuera de repositorios públicos.
- Usa nombres genéricos para los archivos de ejemplo.
- Comparte únicamente el material autorizado.

---

# Conclusión

La privacidad de los datos es una responsabilidad fundamental en cualquier proyecto de diseño. Utilizar imágenes de ejemplo, evitar publicar información personal y documentar adecuadamente los proyectos ayuda a proteger la identidad de los clientes, cumplir con buenas prácticas profesionales y mantener repositorios seguros y organizados.
