const { ofertas } = require('../bbdd')

const getOfertas = ( req , res ) => {
    res.status(200).json(ofertas)
}

const getOfertasId = ({params}, res) => {
    const { id } = params
    let buscar = ofertas.filter(oferta => oferta.id === id)

    res.status(200).json(buscar)
}

const getOfertasDato = ({params}, res) => {

    const {dato} = params
    let buscar = ofertas.filter( oferta => oferta.dato.toLowerCase().includes(dato.toLowerCase()) )
    res.status(200).json(buscar)
}

const getOfertasName = ({params}, res) => {
    const { name } = params
    let buscar = ofertas.filter( oferta => oferta.name.toLowerCase().includes(name.toLowerCase()) )
    res.status(200).json(buscar)
}

const getOfertasDescripcion = ({params}, res) => {
    const { descripcion } = params
    let buscar = ofertas.filter( oferta => oferta.descripcion.toLowerCase().includes(descripcion.toLowerCase()) )

    res.status(200).json(buscar)
}

module.exports = {
    getOfertas,
    getOfertasId,
    getOfertasDato,
    getOfertasName,
    getOfertasDescripcion
}