const argv = require('./Config/yargs');

const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');
console.log(argv);
console.log(argv._[0]);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}