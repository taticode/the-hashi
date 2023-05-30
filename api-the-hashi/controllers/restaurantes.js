
const {restaurantes} = require('../bbdd')
const { removeAccents } =require('../utils/utils')

const getRestaurantes = (req, res) => {
    res.status(200).json(restaurantes)
}
const getRestaurantesTipo = ( { params } , res ) => {
    const { type } = params
    
    const buscar = restaurantes.filter( restaurante => {
        let posicion   = restaurante.tipo.findIndex( eachTipo =>removeAccents(eachTipo.toLowerCase()) === type)
        let modificado = restaurante.tipo[posicion] && removeAccents(restaurante.tipo[posicion].toLowerCase())
        return modificado === type 
    })

    res.status(200).json(buscar)
}
const getRestaurantesCiudad = ( { params } , res ) => {
    const { city } = params

    let buscar = restaurantes.filter(restaurante => restaurante.address.city.toLocaleLowerCase() === city.toLowerCase())
    res.status(200).json(buscar)
}

const getRestaurantesNota = ( { params } , res ) => {
    const { rate } = params
    let buscar = restaurantes.filter( restaurante => Number(restaurante.rate) >= Number(rate) )
    res.status(200).json(buscar)
}

const getRestaurantesYums = (req, res) => {

    let buscar = restaurantes.filter( restaurante => restaurante.yums)
    res.status(200).json(buscar)
}

const getRestaurantesNombre = ({params}, res) => {
    const {name} = params
    let buscar = restaurantes.filter(restaurante => restaurante.name.toLowerCase().includes(name.toLowerCase()))
    res.status(200).json(buscar)
}

const getRestauranteId = ({params}, res) => {
    const { id } = params
    let buscar = restaurantes.filter( restaurante => restaurante.id === id)
    res.status(200).json(buscar)
}

const getRestauranteTag = ({params}, res) => {
    const { tag } = params

    let buscar = restaurantes.filter( restaurante => {
        let posicion   = restaurante.tags.findIndex( eachTipo =>eachTipo.tagName.toLowerCase() === tag.toLowerCase())
        let modificado = restaurante.tags[posicion] && restaurante.tags[posicion].tagName.toLowerCase() 
        return modificado
    })




    res.status(200).json(buscar)
}


module.exports = {
    getRestaurantes,
    getRestaurantesTipo,
    getRestaurantesCiudad,
    getRestaurantesNota,
    getRestaurantesYums,
    getRestaurantesNombre,
    getRestauranteId,
    getRestauranteTag

}