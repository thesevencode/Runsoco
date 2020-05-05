# Iniciar el modulo
- npm i
- npm start

# Rutas

## Registrar cliente
*localhost:3000/api/client/signIn*

**Ejemplo**


- body = {
  -    name: 'Dany',
  -    password: 'dany',
  -    city: 'Puerto Maldonado',
  -    email: 'dany@gmail.com',
  -    terms: true
- }

**La peticion retorna el siguiente formato**

- {
  - status: true/false,
  - message: "mensaje configurado por respuesta",
  
  *Si (status = true) retorna un objeto con los datos del usuario y un token, los mismos datos del ejemplo anterior excepto el password*
  
  - data: data,
  - token: token
- }

***Ser preciso con el nombre de los datos que se tiene que enviar, tal y como muestra el ejemplo***

## Inicio de Sesión cliente
*localhost:3000/api/auth/login*

**Ejemplo**


- body = {
  -    email: 'dany@gmail.com',
  -    password: 'dany123',
- }

**La peticion retorna el siguiente formato**

- {
  - status: true/false,
  - token: "TOKEN_ACCESSS",
  
  *Si (status = true) retorna un objeto con los datos del usuario y un TOKEN, los mismos datos del ejemplo anterior excepto el password*
  
  - data: data
- }

## Inicio de Sesión cliente por Facebook
*localhost:3000/api/auth/facebook*

**Ejemplo**

- body = {
  -    name: 'Dany',
  -    password: 'dany',
  -    city: 'Puerto Maldonado',
  -    email: 'dany@gmail.com',
  -    terms: true
- }

**La peticion retorna el siguiente formato**

- {
  - status: true/false,
  - message: "mensaje configurado por respuesta",
  
  *Si (status = true) retorna un objeto con los datos del usuario y un token, los mismos datos del ejemplo anterior excepto el password*
  
  - data: data,
  - token: token
- }


## Cerrar Sesión : GET
*localhost:3000/api/auth/logout*

**Ejemplo**

- header = {
  -    Authorization: "Bearer token",
- }

**La peticion retorna el siguiente formato**

- {
  - status: true/false,
  - message: "mensaje configurado por respuesta",
- }


## Realizar pedido fuera del stock de los productos que ofrecemos
*localhost:3000/api/sale/outstore*

**Ejemplo**

- header = {
  -    Authorization: "Bearer token",
- }

- body = {
  -    client: String => ID del cliente,
  -    description: 'pedido nuevo',
  -    cellphone: 987876542,
  -    category: 'comida',
  -    store: 'Polleria Doña Yola',
  -    priceDelivery: 4,
  -    type: "outStore" //significa que es un pedido de "pide lo que quieras" en el formulario
- }

**La peticion retorna el siguiente formato**

- {
  - status: true/false,
  - message: "mensaje configurado por respuesta",
- }

##  NEGOCIOS

### GET:Realizar busqueda de los negocios POR TIPO
*localhost:3000/api/business/:type*

**Ejemplo**

- header = {
  -    Authorization: "Bearer token",
- }
**La peticion retorna el siguiente formato**

- {
  - status: true/false,
  - message: "mensaje configurado por respuesta",
  - data: [] => arreglo de todos los negocios encontrados
- }

