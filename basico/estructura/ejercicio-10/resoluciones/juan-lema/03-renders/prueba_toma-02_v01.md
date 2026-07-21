# Render: toma-02 (caso limite)

Estado: prueba
Version: v01
Etapa: 03-renders

## Notas de version

- v01 (prueba): render vacio, la escena no tenia ningun objeto asignado a
  la camara (caso limite de "escena sin contenido"). El render se genero
  como un cuadro negro en vez de fallar con un error, lo cual confirma
  que el pipeline maneja ese caso sin romperse. No se aprueba porque no
  hay contenido que evaluar; se marca para volver a etapa 01-modelado y
  asignar los objetos correspondientes.
