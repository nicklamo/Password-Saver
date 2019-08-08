if (process.env.NODE_ENV === 'production') {
    //we are in production return prod keys
    module.exports = {
        mongodb: process.env.MONGODB_KEY,
        secretKey: process.env.SECRET_KEY
    }
} else {
    //we are in dev environment, return local set of keys
    module.exports = {
        mongodb: 'mongodb://localhost/password_app',
        secretKey: 'asasudfwbiwuefbchsad'
    }
}
