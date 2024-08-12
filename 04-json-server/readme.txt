
comandos:
npm i json-server

package.json:
"start": "json-server --watch db.json",
"dependencies": {
    "json-server": "^1.0.0-beta.1"
  }

db.json

postman:
HTTP methods (GET, POST, PUT, PATCH, and DELETE)


Categorías de Códigos HTTP:
1xx: Informativos
100 Continue: El servidor ha recibido los encabezados de la solicitud y el cliente puede continuar con la solicitud.
101 Switching Protocols: El servidor acepta cambiar el protocolo según lo solicitado por el cliente.

2xx: Éxito
200 OK: La solicitud ha tenido éxito. Es el código más común que indica que todo ha funcionado correctamente.
201 Created: La solicitud ha tenido éxito y ha sido creada un nuevo recurso.
202 Accepted: La solicitud ha sido aceptada para procesamiento, pero aún no se ha completado.
204 No Content: La solicitud ha tenido éxito, pero no hay contenido que devolver.

3xx: Redirección
301 Moved Permanently: La URL solicitada ha sido movida permanentemente a una nueva ubicación.
302 Found (o Moved Temporarily): La URL solicitada reside temporalmente en una nueva ubicación.
304 Not Modified: El recurso no ha sido modificado desde la última solicitud, por lo que el cliente puede usar su versión en caché.

4xx: Error del Cliente
400 Bad Request: La solicitud es incorrecta o está mal formada, y el servidor no puede procesarla.
401 Unauthorized: Se requiere autenticación para acceder al recurso solicitado.
403 Forbidden: El servidor entiende la solicitud, pero se niega a autorizarla.
404 Not Found: El servidor no puede encontrar el recurso solicitado.
405 Method Not Allowed: El método de solicitud no está permitido para el recurso solicitado.
429 Too Many Requests: El cliente ha enviado demasiadas solicitudes en un período de tiempo determinado.

5xx: Error del Servidor
500 Internal Server Error: Un error general ha ocurrido en el servidor.
501 Not Implemented: El servidor no reconoce el método de solicitud o no tiene la capacidad de cumplir con él.
502 Bad Gateway: El servidor, actuando como una puerta de enlace o proxy, recibió una respuesta no válida del servidor de origen.
503 Service Unavailable: El servidor no está disponible temporalmente, generalmente debido a mantenimiento o sobrecarga.
504 Gateway Timeout: El servidor, actuando como una puerta de enlace o proxy, no recibió una respuesta a tiempo del servidor de origen.
Estos códigos son esenciales para el manejo de errores en aplicaciones web y para comprender cómo los servidores y clientes interactúan en la web.


