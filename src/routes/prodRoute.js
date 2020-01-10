const prodModel = require('../models/product')
const productControllers = require('../controllers/product_controller')

const router = (app) => {

    app.route('/prod/:id?')
        .get(async (req, res) => {
            const result = await productControllers.search(req)
            res.status(result.status).send({
                ...result.prod
            })
        }).post(async (req, res) => {
            const result = await productControllers.posta(req.body, res)
            res.status(result.status).send(result.value)
        }).put(async (req, res) => {
            const result = await productControllers.update(req, res)
            res.status(result.status).send(result.value)
        }).delete(async (req, res) => {
            const result = await productControllers.remove(req, res)
            res.status(result.status).send(result.value)
        })
}

module.exports = router