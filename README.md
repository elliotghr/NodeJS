# Curso Fundamentos de Node.js - jonmircha

## 2..¿Qué es Node.js?

> Node.js® es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente. El ecosistema de paquetes de Node.js, npm, es el ecosistema mas grande de librerías de código abierto en el mundo.

Node.js es un entorno de ejecución de código abierto basado en el motor de JavaScript V8 de Google Chrome. Permite a los desarrolladores ejecutar código JavaScript fuera del navegador web, lo que significa que pueden utilizar JavaScript para construir aplicaciones en el lado del servidor. Fue creado por Ryan Dahl en 2009 y desde entonces se ha convertido en una tecnología ampliamente adoptada y popular en el mundo del desarrollo web.

Node no es un **Framework**, es un **entorno de ejecución**.

Ejemplos de entornos de ejecución como NodeJS:

- Deno
- Bun

## 5..Instalación y Configuración

Tipos de instalación
Node.js ofrece diferentes tipos de instalación para adaptarse a las necesidades y preferencias de los usuarios. Los tipos de instalación más comunes son:

- **Instalación Binaria (Binary)**: Esta es la forma más sencilla de instalar Node.js y es adecuada para la mayoría de los usuarios. Consiste en descargar un instalador precompilado específico para el sistema operativo y la arquitectura del usuario. Los instaladores binarios están disponibles para Windows, macOS y diversas distribuciones de Linux. Solo es necesario descargar el archivo del instalador y seguir el asistente de instalación para completar el proceso.
- **Instalación a través del Gestor de Paquetes del Sistema (Package Manager)**: Algunos sistemas operativos y distribuciones de Linux ofrecen Node.js en sus repositorios y permiten instalarlo mediante el gestor de paquetes del sistema. Por ejemplo, en sistemas basados en Debian/Ubuntu, se puede instalar Node.js usando apt, y en sistemas basados en Fedora/RHEL, se puede instalar usando dnf o yum. Esta opción es conveniente para aquellos que prefieren utilizar las herramientas de gestión de paquetes nativas de su sistema.
- **Instalación desde el código fuente (Source)**: Esta opción es menos común y se utiliza generalmente por desarrolladores avanzados o para personalizar la instalación de Node.js en sistemas operativos que no tienen un instalador binario disponible. Consiste en descargar el código fuente desde el repositorio oficial de GitHub, compilarlo y configurar el sistema manualmente.
- **Manejo de versiones con NVM (Node Version Manager)**: NVM es una herramienta que permite instalar y administrar múltiples versiones de Node.js en el mismo sistema. Es útil cuando necesitas trabajar con diferentes proyectos que requieren versiones específicas. Se puede instalar en sistemas UNIX, macOS e incluso hay versión para Windows y facilita el cambio entre versiones de Node.js sin tener que desinstalar e instalar manualmente.

Las primeras tres opciones de la lista anterior se conocen también como instalación de tipo Stand Alone ya que instalamos **una sola y única versión de Node.js**, a diferencia de lo que nos ofrece **NVM, la capacidad de gestionar múltiples de versiones**.

Es importante mencionar que la forma de instalar Node.js puede variar según el sistema operativo y las preferencias del usuario. Para obtener instrucciones detalladas sobre cómo instalar Node.js en un sistema específico, es recomendable consultar la documentación oficial de Node.js o seguir las guías proporcionadas por la comunidad de desarrollo.

Comando para ver la versión de NodeJS:

```bash
node -v
```

Comandos para NVM:

```bash
// para mostrar la ayuda de nvm
nvm --h

// para listar las versiones de node que tienes en nvm
nvm list

// para instalar la versión vX.X.X de node con nvm
nvm install vX.X.X

// para usar la versión vX.X.X de node con nvm
nvm use vX.X.X

// para desinstalar la versión vX.X.X de node con nvm
nvm uninstall vX.X.X

// para asignar la versión vX.X.X como default en nvm
nvm alias default vX.X.X
```

### NPM (Node Package Manager)

Es la comunidad de proyectos más grande de JS, viene incluido cuando se obtiene NodeJS. Es el primer gestor que viene con Node.
Nos permite llamar paquetes externos que han desarrollado otras personas y que podemos obtener en cualquier momento

Comando para ver la versión de npm:

```bash
npm -v
```

## 8..REPL

El REPL (Read-Eval-Print Loop) de Node.js es una herramienta interactiva que permite a los desarrolladores ejecutar y probar código JavaScript de manera interactiva en tiempo real. Es una característica muy útil para experimentar con el lenguaje y probar fragmentos de código antes de incorporarlos en un proyecto más grande. Es similar a la consola interactiva que se encuentra en la mayoría de los navegadores web, pero se ejecuta directamente en la línea de comandos del sistema operativo.

### Funcionamiento

- Read (Leer): El REPL espera a que el usuario ingrese una línea de código o una expresión JavaScript.
- Eval (Evaluar): Una vez que el usuario presiona Enter, el REPL evalúa la expresión o el código ingresado.
- Print (Imprimir): Después de evaluar la expresión o código, el resultado se imprime en la pantalla.
- Loop (Bucle): El REPL vuelve a esperar al usuario para ingresar otra línea de código y repite el proceso.

## Hola mundo

Podemos ejecutar nuestros archivos con el siguiente comando:

```bash
node app.js
```

El archivo principal en Node suele llamarse app.js.

Recuerda que, al utilizar Node.js para ejecutar un archivo JavaScript, estás ejecutando el código en el entorno del servidor, que es diferente del entorno del navegador. Por lo tanto, algunas funcionalidades específicas del navegador, como el manejo del DOM, no estarán disponibles en el entorno de Node.js. Sin embargo, tendrás acceso a otras funcionalidades, como operaciones de archivo, solicitudes HTTP, acceso a la red y más que en los navegadores no existen.

## 11..Blocking VS Non Blocking

La arquitectura no bloqueante es fundamental para su alta eficiencia y rendimiento. Al utilizar un solo hilo para manejar múltiples solicitudes, Node.js puede procesar solicitudes concurrentes de manera eficiente y escalable, lo que lo hace ideal para aplicaciones en tiempo real y de alta carga. Además, el modelo no bloqueante permite aprovechar al máximo los recursos del sistema, ya que el hilo de ejecución no se queda inactivo esperando operaciones de E/S, sino que se utiliza para otras tareas mientras las operaciones se realizan en segundo plano.

En resumen, la distinción entre blocking vs non-blocking en Node.js es clave para comprender cómo se manejan las operaciones de E/S y cómo influye en la eficiencia y escalabilidad de las aplicaciones desarrolladas en este entorno. El enfoque no bloqueante es esencial para aprovechar al máximo el rendimiento de Node.js en aplicaciones de tiempo real y de alta concurrencia.

## 16..ES Modules

La extensión `.mjs` es admitida en archivos JS tanto para Node como del lado del cliente

## 19..Instalación de paquetes con NPM

Al momento de instalar una dependencia podemos encontrar las versiones de la siguiente manera:

```json
    "responsimple": "1.0.1" // se instala una versión especifica
    "responsimple": "^1.0.1" // se instala una versión que sea compatible con esa versión
    "responsimple": ">1.0.1" // se instalan versiones mayores a esa versión
    "responsimple": "<1.0.1" // se instalan versiones menores a esa versión
```

## 20..Carpeta node_modules

Cuando se instala una dependencia de manera global esta dependencia se instala en una carpeta donde fue instalado NodeJS y podrá ser ejecutado en cualquie proyecto.

## 25..Scripts NPM personalizados

Los scripts personalizados son comandos que podemos configurar en el package.json de nuestro proyecto.
Estos se asignan en la key `scripts` y se asigna su key que es el alias para ejecutar el comando que llevará como value:

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Posteriormente lo ejecutamos con npm run [alias]

```bash
  npm run test
```

Si declaramos un script con la key `start`, este comando se puede ejecutar sin un `run`

```bash
  npm start
```

## 28..Nodemon

Es un monitor de cambios en archivos que reinicia automáticamente la aplicación Node.js cuando detecta modificaciones en los archivos del proyecto. Esto elimina la necesidad de reiniciar manualmente el servidor cada vez que se realizan cambios en el código fuente, lo que agiliza el proceso de desarrollo.

## Notas

El process de Node tiene un método llamado [`argv()`](https://nodejs.org/docs/latest/api/process.html#processargv) donde podemos obtener todos los argumentos del comando al lanzar el proceso de Node

# Curso Desarrollo Web con Node.js y Express.js

## Modulos

### Módulo URL

El modulo url nos permite obtener los fragmentos de la url, los cuales son el dominio, el protocolo, el pathname, entre otros.
Con el uso del método `parse` podemos obtener esos fragmentos directamente desde la url, por otro lado, con el método `format` podemos contruir una url pasando los fragmentos en un objeto.

### Módulo Path

Con este método podemos obtener la ruta del archivo. Del lado del servidor, este método nos permite construir las rutas para que la aplicación funcione correctamente
El método `join` nos permite unir rutas
Con el método `resolve` podremos construir una ruta absoluta a partir de una ruta relativa

Con `basename, dirname y extname` podemos extraer diferentes fragmentos de una ruta dada

## Sniffer

Un sniffer es un programa o dispositivo que intercepta, monitorea y registra el tráfico de datos que circula a través de una red de computadoras. Estas herramientas son utilizadas para capturar y analizar información como paquetes de datos, contraseñas, mensajes, y otros datos sensibles que se transmiten a través de una red.

Existen diferentes tipos de sniffers: algunos pueden ser usados para propósitos legítimos, como la resolución de problemas de red, seguridad informática y análisis de tráfico para optimizar el rendimiento de una red. Sin embargo, también pueden ser empleados de manera maliciosa por personas no autorizadas para obtener información confidencial, lo que podría comprometer la privacidad y seguridad de los datos.

El uso de sniffers puede ser tanto ético como legal, dependiendo de la situación y el propósito para el que se empleen. Por ejemplo, los administradores de red pueden usar sniffers para diagnosticar problemas de red y mejorar la seguridad, siempre y cuando cuenten con la autorización y se adhieran a las políticas y leyes de privacidad y seguridad pertinentes.

## Express JS

Express.js es un popular framework web construido con JavaScript y ejecutado en Node.js. Se utiliza para crear aplicaciones web y APIs de manera rápida y sencilla, proporcionando un conjunto robusto de características para el desarrollo de servidores web en Node.js.

Express.js simplifica la creación de aplicaciones web al proporcionar una serie de utilidades y métodos que permiten manejar rutas, peticiones (requests) y respuestas (responses) de manera eficiente. Es minimalista y flexible, lo que significa que ofrece una base sólida para construir aplicaciones web, pero permite la incorporación de otros módulos y middleware según las necesidades específicas del proyecto.

Algunas de las características clave de Express.js incluyen:

1. Manejo de rutas: Permite definir rutas HTTP para responder a peticiones específicas (GET, POST, PUT, DELETE, etc.).

1. Midleware: Facilita la inclusión de funciones de middleware para procesar y manipular las peticiones antes de que lleguen a las rutas finales.

1. Integración de plantillas: Facilita el uso de motores de plantillas como Pug, EJS o Handlebars para generar y renderizar vistas dinámicas.

1. Gestión de peticiones y respuestas: Ofrece métodos para manejar solicitudes y enviar respuestas al cliente.

1. Manejo de errores: Permite gestionar y manejar los errores que puedan ocurrir durante el procesamiento de las solicitudes.

## Motores de plantilla

Un motor de plantillas es una herramienta que simplifica la generación de documentos (HTML, XML, texto plano, etc.) combinando plantillas predefinidas con datos dinámicos. Estos motores permiten a los desarrolladores crear de manera eficiente documentos con contenido variable, donde ciertas secciones pueden cambiar dependiendo de los datos que se desean mostrar.

En el contexto del desarrollo web, los motores de plantillas son comúnmente utilizados para generar vistas HTML dinámicas basadas en los datos proporcionados por una aplicación web. En lugar de escribir manualmente grandes bloques de HTML con valores específicos, los desarrolladores pueden utilizar un motor de plantillas para definir una estructura base y luego incrustar variables o lógica de programación que será reemplazada por los datos dinámicos en tiempo de ejecución.

Estos motores permiten:

Reutilización de código: Las plantillas pueden ser reutilizadas para generar múltiples vistas o páginas con contenido similar.

Separación de preocupaciones: Facilitan la separación entre la lógica de presentación (HTML, diseño) y la lógica de la aplicación (datos, funcionalidad), lo que hace más fácil mantener y actualizar una aplicación.

Inclusión de lógica: Además de insertar datos dinámicos, algunos motores de plantillas también permiten incluir lógica simple, como condicionales o bucles, para generar contenido de manera dinámica.

Ejemplos comunes de motores de plantillas utilizados en el desarrollo web incluyen Pug (anteriormente conocido como Jade), EJS (Embedded JavaScript), Handlebars, Mustache, Jinja (para Python), Twig (para PHP), entre otros. Cada uno tiene su propia sintaxis y características específicas, pero todos comparten el propósito de facilitar la creación dinámica de contenido en aplicaciones web.

## Generador de aplicaciones

En Express, un generador (también conocido como generador de aplicaciones o scaffold) es una herramienta que proporciona una estructura básica para crear una aplicación web de Node.js utilizando el framework Express. Estos generadores permiten a los desarrolladores iniciar rápidamente un nuevo proyecto con una estructura predefinida, incluyendo archivos y carpetas comunes, configuraciones iniciales y algunos archivos de ejemplo para comenzar a desarrollar.

## ExpressMVC

Definimos una estructura de carpetas donde existen controllers/, views/, y public, de momento no se creará una carpeta models/ ya que se hará una simulación a una DB.
Instalaremos las siguientes dependencias:

- cors
- express
- helmet
- morgan
- pug

En nuestro archivo app.js definimos la estructura de nuestra aplicación de NodeJS, declaramos las librerías a usar, las rutas de nuestra carpeta publica y views, el motor de plantillas a usar, la codificación de nuestra app y las rutas de nuestro proyecto

La logica de cada una de las rutas de nuestra aplicación irá en un controlador