document.getElementById('formularioDatos').addEventListener('submit', function (event){
    event.preventDefault();

    let nombre = document.getElementById('nombre').value
    let edad = document.getElementById('edad').value
    let domicilio = document.getElementById('domicilio').value
    let telefono = document.getElementById('telefono').value

    const datos = {
        nombre: nombre,
        edad: edad,
        domicilio: domicilio,
        telefono: telefono
    }

    const datosEnJSON = JSON.stringify(datos)

    localStorage.setItem('datosUsuario', datosEnJSON)

    const resultado =document.getElementById('resultado')
    resultado.innerHTML = `datos guardados con Exito: <pre>${datosEnJSON}</pre>`

    document.getElementById('formularioDatos').reset()
})

const datosGuardadosJSON = localStorage.getItem('datosUsuario')
if (datosGuardadosJSON){
    const datosGuardados = JSON.parse(datosGuardadosJSON)

    const resultado =document.getElementById('resultado')
    resultado.innerHTML += '<h2>Datos Guardados:</h2>';
    resultado.innerHTML += `<p>Nombre: ${datosGuardados.nombre}</p>`;
    resultado.innerHTML += `<p>Edad: ${datosGuardados.edad}</p>`;
    resultado.innerHTML += `<p>Domicilio: ${datosGuardados.domicilio}</p>`;
    resultado.innerHTML += `<p>Teléfono: ${datosGuardados.telefono}</p>`;
}