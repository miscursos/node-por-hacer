const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', { descripcion })
    .command('borrar', 'Borra una tarea por hacer', { descripcion })
    .command('listar', 'Lista las tareas por hacer', { completado })
    .command('actualizar', 'Actualiza una tarea por hacer', { descripcion, completado })
    .help()
    .argv;

module.exports = {
    argv
}