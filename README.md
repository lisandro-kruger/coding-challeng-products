## Descripción

Este proyecto es una aplicación de comercio electrónico construida con Node.js y React. La aplicación permite a los usuarios ver una lista de productos y obtener detalles de cada producto. El backend de la aplicación proporciona una API REST para realizar operaciones CRUD en los productos. El frontend de la aplicación consume esta API para mostrar los productos a los usuarios. La aplicación está diseñada para ser fácil de usar y proporcionar una experiencia de usuario fluida.

## Funcionalidades

### DATABASE

Cree un archivo docker-compose para trabajar con una base de datos de manera local.

### Backend

El backend de la aplicación está construido con Node.js y Express. Utiliza las siguientes librerías:

- "cors": "^2.8.5"
- "dotenv": "^16.4.5"
- "express": "^4.18.3"
- "morgan": "^1.10.0"
- "mysql2": "^3.9.2"

La funcionalidad principal del backend es proporcionar una API REST que realiza las operaciones CRUD de productos a través del endpoint `/products`. Los productos tienen las siguientes propiedades: `id`, `name`, `description`, `image_url`, `price`.

Los endpoints disponibles son:

- `GET /products`: Obtiene todos los productos.
- `GET /products/:id`: Obtiene un producto específico por su ID.
- `POST /products`: Crea un nuevo producto. Ejemplo de cuerpo de solicitud:
  ```json
  {
    "id": 1,
    "name": "Zapatillas Adidas",
    "description": "ADIDAS ORIGINALS Schuh 'U_Path Run' Jungen Weiß",
    "image_url": "https://th.bing.com/th/id/OIP.ht73rRJbWJV89I4sYudqngHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
    "price": 20
  }

PUT /products/:id: Actualiza un producto existente por su ID.

DELETE /products/:id: Elimina un producto específico por su ID.

### Frontend

El frontend de la aplicación está construido con React y utiliza las siguientes librerías:

- “axios”: “^1.6.7”
- “react-router-dom”: “^6.22.3”

La funcionalidad principal del frontend es mostrar los productos que expone la API en el backend. Se utiliza Vite como empaquetador. La aplicación carga una lista de productos desde el backend y muestra todos los productos disponibles. Al hacer clic en un producto, el usuario puede ver una vista de detalle de ese producto.

### Cómo levantar el proyecto en local

## Backend
Para levantar el backend en local, ejecuta los siguientes comandos:

npm install
npm run dev

## Frontend
Para levantar el frontend en local, ejecuta los siguientes comandos:

npm install
npm run dev

## Proyecto en línea

### Backend

El backend del proyecto está alojado en [este enlace](https://coding-challeng-products-guvy.onrender.com/api/products). Actualmente, el backend solo permite obtener la lista de productos. Aunque se intentó implementar la creación, actualización y eliminación de productos a través de esta URL, no se logró completar esta funcionalidad.

Se creó una base de datos en Railway de MySQL para probar la funcionalidad de la API. Se agregaron algunos datos a esta base de datos para probar el funcionamiento de la API.

### Frontend

El frontend del proyecto está alojado en [este enlace](https://coding-challeng-products-frontend.onrender.com/). Aunque se logró levantar el proyecto, actualmente solo muestra el mensaje "No Products yet". No se logró obtener la lista de productos desde la API. Se espera poder resolver este error con la ayuda de la revisión del código.

## Conclusión

A pesar de los altibajos durante la creación del proyecto y de no estar completamente satisfecho con el resultado final, fue una valiosa experiencia poder crear un proyecto full stack con estas tecnologías e intentar desplegarlo en internet. La experiencia adquirida durante este proceso será de gran utilidad para futuros proyectos.
