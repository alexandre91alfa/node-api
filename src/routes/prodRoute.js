const prodModel = require('../models/product')

const router = (app) => {

    app.route('/prod/:id?')
        .get(async (req, res) => {
            const {
                id
            } = req.params
            const query = {}

            if (id) {
                query._id = id
            }

            try {
                const prod = await prodModel.find(query)
                res.send({
                    ...prod
                })
            } catch (error) {
                res.status(400).send({
                    error: 'Failed to find product'
                })
            }
        }).get(async (req, res) => {
            try {
                const prod = await prodModel.find(query)
                res.send({
                    ...prod
                })
            } catch (error) {
                res.status(400).send({
                    error: 'Failed to find product'
                })
            }
        }).post(async (req, res) => {
            try {
                const prod = new prodModel(req.body)
                await prod.save()

                res.status(200).send('OK')
            } catch (error) {
                res.send(error)
            }
        }).put(async (req, res) => {
            const {
                id
            } = req.params
            const query = {}

            if (id) {
                query._id = id
            }

            try {
                let prod = await prodModel.find(query)
                prod = new prodModel(req.body)
                await prod.save()

                res.status(200).send('OK')
            } catch (error) {
                res.send(error)
            }
        })
}

module.exports = router