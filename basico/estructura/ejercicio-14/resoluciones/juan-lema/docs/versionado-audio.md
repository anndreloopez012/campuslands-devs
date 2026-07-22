# Versionado de archivos de audio

Todo archivo de audio del proyecto sigue el formato:

```
nombre-cancion-vNN.wav
```

- `nombre-cancion`: en minusculas y con guiones, sin espacios ni acentos.
- `vNN`: numero de version con dos digitos (`v01`, `v02`, ...), que aumenta
  cada vez que se genera una nueva mezcla o revision.

## Prefijos segun la etapa

- Sin prefijo (`cancion-v01.wav`): grabacion o composicion original en `tracks/`.
- `sample-` (`sample-bateria-v01.wav`): fragmento reutilizable en `samples/`.
- `mezcla-` (`mezcla-cancion-v02.wav`): version mezclada en `mixes/`.
- `master-` (`master-cancion-v02.wav`): version final aprobada en `masters/`.

## Ejemplo de progresion

```
cancion-v01.wav          (tracks/)     primer borrador
cancion-v02.wav          (tracks/)     segunda revision
mezcla-cancion-v02.wav   (mixes/)      esa version ya mezclada
master-cancion-v02.wav   (masters/)    esa version aprobada como final
```

## Por que los masters no se mezclan con los borradores

Un master es la version final, ya aprobada, que se va a publicar o entregar.
Un archivo en `mixes/` todavia puede cambiar. Mantenerlos en carpetas
separadas evita sobrescribir por error la version final, publicar por
accidente una mezcla no aprobada, o perder trazabilidad de cual archivo es
realmente el definitivo.
