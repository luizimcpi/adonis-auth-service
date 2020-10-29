'use strict'

class HomeController {
    async healthCheck({ response }){
        const responseOk = {status: 'UP'}
            response.json(responseOk)
    }
}

module.exports = HomeController
