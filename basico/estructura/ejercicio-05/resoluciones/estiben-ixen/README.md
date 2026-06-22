# solucion de ejercicio 03

* **Estudiante:** Brandon Estiben Ixen Teleguario
* **Fecha:** Mayo 2026
* **Módulo:** estructura basica.

--

# explicacion del razonamiento.
    Para organizar estos archivos, dividi y creé carpetas por aparte para poder almacenar los diferentes archivos que estaremos utilizando y armando durante el procerso de creacion.

--

# estructura de visual:
```.
    |____estibenixen
    | |____docs
    | | |____flujo-reparacion.md
    | |____estiben-ixen.md
    | |____config
    | | |____settings.json
    | |____modulos
    | | |____clientes
    | | |____motos
    | | |____ordenes
```
# explicacion 
    cada capeta tendra almacenada diferentes componentes que tienen una funcion principal en todo el funcionamiento de la app.

    ```
        EstibenIxen = Es la carpeta padre con el nom,bre del creador de la app.
            docs = esta es la carpeta principal donde se guarda nuestros flujo de reparacion:
                
                flujo-reparacion.md: aqui estara establecida la forma en que trabaja la compañia, se describe todo el flujo de trabajo que se lleva a cabo para brindar el mejor servicio a los clientes.

            Config = aqui estara registrada la bodega de herrramientas.

                settings.json: dentro de este archivo se llevara el inventario de todas nuestras herramientas o nuestros repuestos.

            modulos = Esta es la carpeta que almacena los siguientes carpetas:
                
                clientes: Dentro de esta carpeta guardaremos todos los datos que necesitamos sobre nuestros clientes.
                
                mostos: Dentro de esta almacenaremos toda la informacion sobre las motos ingresadas al taller.
                
                ordenes: aqui se almacenará todo lo que son las ordenes de trabajo, la cual describen los mantenimientos realizados en la motocicleta como el cambio de aceite, cambio de ruedas entre otros.
```


# historial de comandos usados en la terminal de visual studio code
```
    963  exit
    964  git config --global user.name "ixenbrandonestiben-lang"
    965  git congig --global user.email "ixenbrandonestiben@gmail.com"
    966  git config --global user.email "ixenbrandonestiben@gmail.com"
    967  git config --global core.editor "code --wait"
    968  nano ~/.gitconfig
  
    973  git branch -a
    974  mkdir basico/estructura/ejercicio-05/resoluciones/estibenixen
    975  cd basico 
    976  cd estructura
    977  cd ejercicio-05
    978  cd resoluciones
    979  cd estibenixen
    980  mkdir modulos
    981  cd modulos
    982  makdir clientes
    983  mkdir clientes
    984  mkdir motos
    985  mkdir ordenes
    986  cd clientes
    987  touch .gitkeep
    988  cd ..
    989  cd motos
    990  touch .gitkeep
    991  cd ..
    992  cd ordenes
    993  touch .gitkeep
    994  cd ..
    995  touch estiben-ixen.md
    996  history
    997  find . -not -path '*/.*' | sed -e 's;[^/]*/;|____;g;s;____|; |;g'
    998  mkdir docs
    999  cd docs
    1000  touch flujo-reparacion.md
    1001  cd ..
    1002  mkdir config
    1003  cd config
    1004  touch settings.json
    1005  cd ..
    1006  cd .
    1007  cd ..
    1008  find . -not -path '*/.*' | sed -e 's;[^/]*/;|____;g;s;____|; |;g'
    1009  history
 ```