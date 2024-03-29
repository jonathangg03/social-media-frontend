# Miriio - Red social.

Miriio es una pequeña red social y PWA para que los usuarios compartan las ideas
que desean. Puedes ver la aplicación [aquí](https://miriio.vercel.app/ 'aquí').

[![Miriio](https://res.cloudinary.com/dklpyhteh/image/upload/v1661742489/Portfolio/miriio_qn4y7e.png 'Miriio')](https://res.cloudinary.com/dklpyhteh/image/upload/v1661742489/Portfolio/miriio_qn4y7e.png 'Miriio')

## Backend

El backend de este sitio lo puedes ver en este
[repositorio](https://github.com/jonathangg03/social-media-backend 'repositorio').

## Instrucciones de uso

- Al ingresar a la aplicación, debes iniciar sesión sí ya tienes una cuenta, o
  registrarte en caso contrario.
- Una vez ingresaste, estarás en la sección de inicio, donde podrás ver las
  publicaciones de las personas que sigues.
- Para desplazarte por las diferentes secciones, se usa el menú que estará abajo
  sí estas con la vista para móviles, o a la derecha en la vista de escritorio.
- La siguiente sección (icono de corazón) muestra las publicaciones que te han
  gustado.
- Dando clic en el icono (+), podrás agregar una nueva publicación, a la cual se
  le puede agregar una imagen. Sí estas desde la vista de escritorio, puedes
  arrastrar una imagen desde el gestor de archivos.
- Con la lupa, puedes buscar algún usuario dentro de la aplicación, y sí deseas,
  ingresar a tu perfil o seguirlo.
- Finalmente, está la sección de perfil, donde puedes ver tu perfil, y las
  publicaciones que hiciste.
- En tu portada, estará el signo de menú, donde puedes actualizar tu perfil o
  cerrar sesión.
- Tu perfil puede tener una foto de portada y de perfil, tu nombre y una
  descripción.
- Al ser una PWA, en la barra de búsqueda del navegador aparecerá la opción de
  sí deseas instalar la aplicación.

## Tecnologías usadas

- JavaScript.
- React.js.
- Node.js.
- Express.js.
- React Router DOM
- React Helmet (SEO).
- Cloudinary.
- Heroku.
- MongoDB.
- Vercel.
- Wepack PWA Manifest y Workbox Webpack Plugin para la PWA.

## Correr aplicación en local

- Debes clonar este repositorio.
- Abrir una terminal e ingresar a la carpeta creada.
- Instalar las dependencias con el comando "npm install".
- Las variables de entorno de desarrollo están en el archivo ".env.development",
  ahí tendremos la dirección de la API REST corriendo en local, y el entorno en
  el que estamos, "development" en nuestro caso.
- Iniciar el proyecto con el comando "npm run dev".
- Tenemos que tener el backend corriendo en el puerto 3001 (o el que hayamos
  definido en las variables de entorno), para ello, ver el
  [repositorio](https://github.com/jonathangg03/social-media-backend 'repositorio').
