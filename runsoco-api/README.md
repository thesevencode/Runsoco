# Iniciar el modulo
- npm i
- npm start

# Rutas

## Registrar cliente
*localhost:3000/api/client/signIn*

**EJemplo**


- usuario = {
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

**EJemplo**


- usuario = {
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
