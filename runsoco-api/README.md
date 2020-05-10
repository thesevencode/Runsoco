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

##  PEDIDOS


### Realizar pedido fuera del stock de los productos que ofrecemos
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
  -    payment: 'efectivo',
  -    store: 'Polleria Doña Yola',
  -    priceDelivery: 4,
  -    extraDelivery: 2, =>OPCIONAL: Solo si el pedido tiene un cargo extra
  -    type: "outStore" //significa que es un pedido de "pide lo que quieras" en el formulario
- }

**La peticion retorna el siguiente formato**

- {
  - status: true/false,
  - message: "mensaje configurado por respuesta",
- }

### Realizar pedido de uno de las tiendas registradas
*localhost:3000/api/sale/instore*

**Ejemplo**

- header = {
  -    Authorization: "Bearer token",
- }

- body = {
  - client: "5eb1fd1d121484411478875d", =>ID DEL CLIENTE
  - business: "5eb1fd1d121484411478875d",=>ID DE LA TIENDA
  - address: "Av. Sinchi Roca",
  - payment: "efectivo",
  - products: [{
      - product: "5eb0f07f2e952a3184799550",=>ID DEL PRODUCTO
      - quantity: 1,
      - subtotal: 39
    }],
  - category: "comida",
  - cellphone: 987654321,
  - total: 43,
  - priceDelivery: 4,
  - type: "inStore"
- }

**La peticion retorna el siguiente formato**

- {
  - status: true/false,
  - message: "mensaje configurado por respuesta",
- }

### GET:Confirmar que el pedido ha sido recibido por el cliente
*localhost:3000/api/sale/confirmation/:idSale*

**Ejemplo**

- header = {
  -    Authorization: "Bearer token",
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

##  PRODUCTOS

### GET:Obtener productos por una negocio especifico 
*localhost:3000/api/product/business/:idBusiness*

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


##  ADMINISTRADOR



## Registrar 
*localhost:3000/api/admin/signIn*

**Ejemplo**


- body = {
  -    name: 'Dany',
  -    lastName: 'Quispe Luna',
  -    email: 'dany@gmail.com'
  -    password: 'dany'
- }

**La peticion retorna el siguiente formato**

- {
  - status: true/false,
  - message: "mensaje configurado por respuesta",
  
  *Si (status = true) retorna un objeto con los datos del usuario y un token, los mismos datos del ejemplo anterior excepto el password*
- }

## Inicio de Sesión
*localhost:3000/api/auth/login/admin*

**Ejemplo**

- body = {
  -    email: 'dany@gmail.com'
  -    password: 'dany'
- }

**La peticion retorna el siguiente formato**

- {
  - status: true/false,
  - message: "mensaje configurado por respuesta",
  
  *Si (status = true) retorna un objeto con los datos del usuario y un token, los mismos datos del ejemplo anterior excepto el password*
  
  - data: data,
  - token: token
- }

## PEDIDOS

### Obtener pedidos RECIBIDOS
*localhost:3000/api/sale/receive/list*

**Ejemplo**

- header = {
  -    Authorization: "Bearer token",
- }


**La peticion retorna el siguiente formato**

- {
  - status: true/false,
  - message: "mensaje configurado por respuesta",
  - data: [] => Arreglo
- }

### Obtener pedidos EN PROCESO
*localhost:3000/api/sale/processing/list*

**Ejemplo**

- header = {
  -    Authorization: "Bearer token",
- }


**La peticion retorna el siguiente formato**

- {
  - status: true/false,
  - message: "mensaje configurado por respuesta",
  - data: [] => Arreglo
- }


### Confirmar que el pedido esta en Proceso
*localhost:3000/api/sale/processing/add/:idPedido*

**Ejemplo**

- header = {
  -    Authorization: "Bearer token",
- }


**La peticion retorna el siguiente formato**

- {
  - status: true/false,
  - message: "mensaje configurado por respuesta",
- }
