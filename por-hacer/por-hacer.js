const fs = require('fs')

let listadoPorHacer = []


const guardarDB = () => {
    const data = JSON.stringify(listadoPorHacer, null, 2)

    fs.writeFile(`db/data.json`, data, err => {
        if (err) throw new Error('No se pudo guardar')

    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = []
    }
}

const crear = descripcion => {

    let porHacer = {
        descripcion,
        completado: false
    };

    cargarDB();

    listadoPorHacer.push(porHacer)

    guardarDB();

    return porHacer
}

const getListado = completado => {
    cargarDB();
    return listadoPorHacer.filter(tarea => tarea.completado.toString() == completado.toString())

}

const update = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true
    } else {
        return false
    }

}

const borrar = descripcion => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true
    }
}

module.exports = {
    crear,
    getListado,
    update,
    borrar
}