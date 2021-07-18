
const { crearArchivo, listarTabla } = require('./multiplicar');
const argv = require('./config/yargs').argv;
var colors = require('colors');


// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(nombreArchivo => console.log(`El ${nombreArchivo.green} ha sido creado`))
            .catch(e => console.log('ERROR: '.red + e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}


// crearArchivo(base)
//     .then(nombreArchivo => console.log(`El ${nombreArchivo} ha sido creado`))
//     .catch(e => console.log(e));