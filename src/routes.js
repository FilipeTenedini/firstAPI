// as duas principais propriedades que identificam uma rota são endpoint e método
// além delas podemos passar uma função que será executada toda a vez que a rota for chamada. Neste caso usaremos a chave handler.
const userController = require('./controllers/UserController');

module.exports = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: userController.listUsers, //atenção pois não estamos executando a função aqui. Somente passando a referencia.
    },
    {
        endpoint: '/users/:id',
        method: 'GET',
        handler: userController.getUserById
    },
    {
        endpoint: '/users',
        method: 'POST',
        handler: userController.createUser
    },
    {
        endpoint: '/users/:id',
        method: 'PUT',
        handler: userController.updateUser
    },
    {
        endpoint: '/users/:id',
        method: 'DELETE',
        handler: userController.deleteUser
    },
    
]