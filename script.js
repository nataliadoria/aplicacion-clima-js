let api_key = 'ba884d1dcb4de5732e8a5c3170c59d35'
let difKelvin = 273.15
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'




document.getElementById('botonBusqueda').addEventListener('click', () =>{
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data) {
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''  // cada vez que se toque el boton se va a vaciar el div


    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const icono = data.weather[0].icon
    const descripcion = data.weather[0].description

    // creamos los elementos de html para mostrar el resultado de nuestra busqueda
    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es ${Math.floor(temperatura-difKelvin)}°C`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`

    // agregamos nuestros elementos creados dentro del div
    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(iconoInfo)
}


