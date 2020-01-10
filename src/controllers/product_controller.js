const prodModel = require('../models/product')

module.exports = {
    async search(req) {
        const {
            id
        } = req.params
        const query = {}

        const {
            page = 1
        } = req.query

        if (id) {
            query._id = id
        }
        try {
            const prod = await prodModel.paginate(query, {
                page: page,
                limit: 10
            })


            console.log({
                method: 'GET',
                status: 200,
                message: 'OK'
            })
            return ({
                status: 200,
                prod: prod
            })
        } catch (error) {
            console.log({
                method: 'GET',
                status: 400,
                message: 'Failed'
            })
            return ({
                status: 400,
                error: 'Failed to find product '
            })
        }
    },
    async posta(req, res) {
        try {
            const prod = new prodModel(req)
            await prod.save()
            console.log({
                method: 'POST',
                status: 200,
                message: 'OK'
            })
            return res.json({
                status: 200,
                value: 'OK'
            })
        } catch (error) {
            console.log({
                method: 'POST',
                status: 400,
                message: 'Failed'
            })
            return res.json({
                status: 400,
                ERRO: error
            })
        }
    },
    async update(req, res) {
        const {
            id
        } = req.params
        const query = {}

        if (id) {
            query._id = id
        }

        try {
            const prod = await prodModel.findByIdAndUpdate(query, req.body, {
                new: true
            })

            console.log({
                method: 'PUT',
                status: 200,
                message: 'OK'
            })
            return res.json({
                status: 200,
                prod: prod
            })
        } catch (error) {
            console.log({
                method: 'PUT',
                status: 400,
                message: 'Failed'
            })
            return res.json({
                status: 400,
                error: 'Failed to find product '
            })
        }
    },
    async remove(req, res) {
        const {
            id
        } = req.params
        const query = {}

        if (id) {
            query._id = id
        }

        try {
            const prod = await prodModel.findByIdAndDelete(query)
            console.log({
                method: 'DELETE',
                status: 200,
                message: 'OK'
            })
            return res.json({
                status: 200,
                prod: prod
            })
        } catch (error) {
            console.log({
                method: 'DELETE',
                status: 400,
                message: 'Failed'
            })
            return res.json({
                status: 400,
                error: 'Failed to find product '
            })
        }
    }

}