## npm i -g

El único problema de instalar dependencias de manera global es que estas se pierden al actualizar la versión de Node.
También es bueno no instalar todo de manera global y sí especificarlo en las dependencias de producción o de desarrollo

## Buffer

Un buffer es una clase global que se utiliza para trabajar con datos binarios, esto se guarda en un espacio de la memoria para posteriormente poder leerlo

## X-Powered-By

Es recomendable desactivar la cabecera X-Powered-By para evitar un tracking de la tecnología que usamos y así evitar problemas de seguridad, esto se logra con la siguiente linea:

```js
app.disable(" x—powered—by");
```
