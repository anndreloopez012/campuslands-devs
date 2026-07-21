# Ejercicio 12 git

## Paso a paso (comandos y qué hacen)

### 1. Crear archivos iniciales
```bash
# Crear archivo de destinos turísticos
- echo "Destinos: Cancún, París, Tokio" > destinos.txt
- git add destinos.txt
- git commit -m "Agrega lista inicial de destinos turísticos"

# Hacer tres cambios pequeños con buenos mensajes
- echo "Nuevo destino: Machu Picchu" >> destinos.txt
- git add destinos.txt
- git commit -m "Agrega destino Machu Picchu a la lista"

# Crear archivo de precios
- echo "Precios: Cancún $800, París $1200, Tokio $1500" > precios.txt
- git add precios.txt
- git commit -m "Crea archivo con precios de paquetes turísticos"

#Actualizar descripción
- echo "Tour de 5 días" > descripcion.txt
- git add descripcion.txt
- git commit -m "Actualiza descripción de paquetes turísticos"