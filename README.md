Para poder ejecutar el archivo una vez que haga la copia debe correr el siguiente comando en su terminal

```
npm install
```

esto instalara las dependecias de node en cada proyecto

# Para correr el Back-end

1. Dirigirse a travez de una consola a la carpeta back-end `cd Back-End`.
2. Una vez que este en esta carpeta ejecutar el comando `docker compose up -d` crea la imagen de docker para poder usa las tablas de postgres SQL
3. Ejecutar el comando `npm run dev`
4. Se puede pobrar que funcione el CRUD desde Postman con los sigueintes metodos y URLs

- Crear una tarea:

url: localhost:3000/api/tareas
metodo: POST
body: row / JSON
{
"text": "Nueva tarea 1 nueva luego de actualizar"
}

- Ver tareas:

url: localhost:3000/api/tareas
metodo: GET

- Eliminar una tarea:

url: localhost:3000/api/tareas/id
metodo: DELETE
Alaracion: el id es el ID de la tarea que se quiere eliminar en vez de pasar la palabra id se tiene que pasar un numero ej: localhost:3000/api/tareas/1

- Actualizar una tarea:

url: localhost:3000/api/tareas/id
metodo: PUT
body: row / JSON
{
"text": "Nueva tarea 2 nueva luego de actualizar"
}
Alaracion: el id es el ID de la tarea que se quiere eliminar en vez de pasar la palabra id se tiene que pasar un numero ej: localhost:3000/api/tareas/1

# Para correr el Front-end

1. Sin cerrar la terminal ni termianr la ejecucion de las tareas del back, abrir otra terminal y ejecutar el comando `cd Front-End`
2. Ejecutar el comando `npm run dev`
3. Abrir el navegador en el puerto que nos indique en la consola
