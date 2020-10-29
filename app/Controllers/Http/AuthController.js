'use strict'

const Logger = use('Logger')
const User = use('App/Models/User')

class AuthController {
    async register({ request, response }){
        try {
            const data = request.only(['username', 'email', 'password'])

            const user = await User.create(data)

            return response.created(user)
        } catch(e) {
            Logger.info('error is %s', e.message)
        
            const responseConflict = {statusCode: 409, status: 'Conflict', message: 'User Already exists'}
            response.conflict({error: e.message, description: responseConflict })
        }
    }

    async generateToken({ request, auth }){
        const {email, password} = request.all()

        const token = await auth.withRefreshToken()
        .attempt(email, password)

        return token
    }

    async generateTokenWithRefresh({ request, auth }){
        const refreshToken = request.input('refresh_token')
        
        const newTokenResponse = await auth.newRefreshToken()
        .generateForRefreshToken(refreshToken)

        return newTokenResponse
    }

    async authenticate({ response, auth }) {
        try {
            await auth.check()
            const responseOk = {statusCode: 200, status: 'Ok', message: 'Success Authenticated'}
            response.json(responseOk)
        } catch (e) {
            const responseUnauthorized = {statusCode: 401, status: 'Unauthorized', message: 'Authentication Failed'}
            response.unauthorized({error: e.message, description: responseUnauthorized })
        }
    }
}

module.exports = AuthController
