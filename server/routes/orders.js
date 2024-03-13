const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')

router.get('/', async (request, response) => {
    try{
        const statement = `
            select 
                id, totalAmount, createdTimestamp
            from orderMaster
            where
                userId = ?
        `
        const [orders] = await db.execute(statement, [request.data.id])
        response.send(utils.createSuccess(orders))
    }
    catch(ex){
        response.send(utils.createError(ex))
    }
})

router.get('/details/:id', async (request, response) => {
    const {id} = request.params
    try{
        const statement = `
            select 
                iphone.name, iphone.details, iphone.price, iphoneId, quantity, totalAmount, orderDetails.createdTimestamp
            from orderDetails, iphone
            where
                orderId = ? and iphone.id = orderDetails.iphoneId
        `
        const [details] = await db.execute(statement, [id])
        response.send(utils.createSuccess(details))
    }
    catch(ex){
        response.send(utils.createError(ex))
    }
})

router.post('/', async (request, response) => {
    const {items, totalAmount} = request.body
    try {
        const statementOrder = `
            insert into orderMaster (userId, totalAmount)
            values
                (?, ?)`
        const order = await db.execute(statementOrder, [request.data.id, totalAmount])
        console.log(order)

        const orderId = order[0].insertId

        for (const item of items){
            const statementOrderDetails = `
            insert into orderDetails
                (orderId, iphoneId, quantity, totalAmount)
            values
                (?, ?, ?, ?)`
            await db.execute(statementOrderDetails, [
                orderId,
                item['iphoneId'],
                item['quantity'],
                item['totalAmount']
            ])
        }
        response.send(utils.createSuccess('Done'))
    } catch (ex) {
        response.send(utils.createError(ex))
    }
})

module.exports = router