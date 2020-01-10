const mongoose = require('mongoose')

const prodModel = require('../models/product')

module.exports = {
   async search(req){
    const {
        id
    } = req.params
    const query = {}

    if (id) {
        query._id = id
    }
    try {
        const prod = await prodModel.find(query)
        console.log({method:'GET', status:200,message:'OK'})
        return({status:200, prod:prod })
    } catch (error) {
        console.log({method:'GET', status:400,message:'Failed'})
        return({status:400, error: 'Failed to find product1 '})
    }
   },
   async posta(req){
        try {
            const prod = new prodModel(req)
            await prod.save()
            console.log({method:'POST', status:200,message:'OK'})
            return ({status:200, value:'OK'})
        } catch (error) {
            console.log({method:'POST', status:400,message:'Failed'})
            return ({status:400, ERRO:error})
        }
   }
    
}

