
const express = require('express')
const { getAll } = require('../controllers/controller')
const { getRestaurantes, getRestaurantesTipo, getRestaurantesCiudad, getRestaurantesNota, getRestaurantesYums, getRestaurantesNombre, getRestauranteId, getRestauranteTag } = require('../controllers/restaurantes')
const { getOfertas, getOfertasId, getOfertasDato, getOfertasName, getOfertasDescripcion } = require('../controllers/ofertas')
const router = express.Router()

router.route('/').get(getAll)

router.route('/ofertas').get(getOfertas)
router.route('/ofertas/id/:id').get(getOfertasId)
router.route('/ofertas/dato/:dato').get(getOfertasDato)
router.route('/ofertas/name/:name').get(getOfertasName)
router.route('/ofertas/descripcion/:descripcion').get(getOfertasDescripcion)

router.route('/restaurantes').get(getRestaurantes)
router.route('/restaurantes/tipo/:tipo').get(getRestaurantesTipo)
router.route('/restaurantes/address/city/:city').get(getRestaurantesCiudad)
router.route('/restaurantes/rate/:rate').get(getRestaurantesNota)
router.route('/restaurantes/yums').get(getRestaurantesYums)
router.route('/restaurantes/name/:name').get(getRestaurantesNombre)
router.route('/restaurantes/id/:id').get(getRestauranteId)
router.route('/restaurantes/tags/tag/:tag').get(getRestauranteTag)


module.exports = router