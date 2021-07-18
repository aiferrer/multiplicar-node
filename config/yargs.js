const opts = {
    base: {
        demand: true,
        alias: 'b'
    },

    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('crear', 'Crear archivo con la tabla de multiplicar', opts)
    .command('listar', 'Listar la tabla de multiplicar', opts )
    .help()
    .argv;

module.exports = {
    argv
}    