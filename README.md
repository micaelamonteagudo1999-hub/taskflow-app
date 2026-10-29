# TaskFlow

TaskFlow es una aplicación móvil desarrollada con React Native y Expo, pensada para organizar y gestionar tareas de manera sencilla.

Checkpoint 1: Estructura base

En este primer checkpoint se creó la estructura inicial del proyecto y se preparó la aplicación para continuar con el desarrollo de las próximas etapas.

También se organizaron las carpetas principales para mantener los archivos ordenados y facilitar el desarrollo futuro.

Checkpoint 2: Navegación y gestión de tareas

En este checkpoint se incorporó la navegación entre las pantallas de la aplicación utilizando React Navigation.

La aplicación permite:
-Acceder a la pantalla de Inicio y a la pantalla de Perfil mediante una navegación por pestañas.
-Visualizar la lista de tareas.
-Crear nuevas tareas mediante un formulario.
-Consultar los detalles de una tarea seleccionada.
-Volver a la lista de tareas desde la pantalla de detalle.

La navegación de Inicio utiliza un Stack Navigator para pasar entre la lista de tareas, el detalle y el formulario de creación.

 Estructura del proyecto

-`src/components`: contiene componentes reutilizables de la aplicación.
-`src/screens`: contiene las diferentes pantallas.
-`src/assets`: destinada a imágenes y otros recursos.
-`src/theme`: destinada a estilos y elementos generales de diseño.
-`src/navigation`: contiene la configuración de navegación de la aplicación.
-`src/constants`: contiene constantes utilizadas en el proyecto, como los colores.

Tecnologías utilizadas

-React Native
-Expo
-JavaScript
-React Navigation
-React Navigation Bottom Tabs
-React Navigation Native Stack
-Expo Vector Icons

Cómo ejecutar el proyecto

1 Instalar las dependencias:

   ```bash
   npm install
   ```

2 Iniciar la aplicación:

   ```bash
   npx expo start
   ```

3 Abrir la aplicación con Expo Go compatible con la versión del SDK utilizada por el proyecto.

Estado actual

La aplicación permite navegar entre Inicio y Perfil, crear tareas, visualizarlas en la lista y consultar sus detalles.

Las tareas se mantienen en el estado de la aplicación durante su ejecución. Actualmente no se utiliza una base de datos para guardar las tareas de forma permanente.
