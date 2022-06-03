# Desafío 14 (Actualizado al desafío 15)

* En esta entrega se trata sobre la ejecución de servidores Node.js con diferentes tecnologías. También trata sobre configurar un servidor Nginx con balanceador de carga y rediccionar peticiones hacia un cluster de servidores.

# Tecnologías usadas

* Express.js
* Minimist
* Nginx
* PM2
* Forever

# Comandos del servidor

* **Ejecutar el servidor modo fork:** `nodemon index.js --PORT=8080 --MODE=FORK` 
* **Ejecutar el servidor en modo cluster:** `nodemon index.js --PORT=8080 --MODE=CLUSTER` 
* **Ejecutar el servidor utilizando forever (por defecto modo FORK):** `forever start index.js --PORT=8080` 
* **Ejecutar el servidor utilizando PM2 (con su modo fork):** `pm2 start index.js -- --PORT=8080` 
* **Ejecutar el servidor utilizando PM2 (con su modo cluster):** `pm2 start index.js -i max -- --PORT=8080` 
* **Ejecutar el modo escucha en forever:** `forever -w index.js --PORT=8080` 
* **Ejecutar el modo escucha en PM2:** `pm2 start index.js --watch -- --PORT=8080` 

