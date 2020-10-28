'use strict'

const { test, trait } = use('Test/Suite')('User')

const User = use('App/Models/User')

trait('Test/ApiClient')

test('create an user', async ({ client }) => {
  await User.create({
    username: 'user',
    email: 'user@gmail.com',
    password: 'teste1234'
  })

  const response = await client.post('/api/users').end()

  response.assertStatus(200)
  response.assertJSONSubset([{
    username: 'user',
    password: 'user@gmail.com'
  }])
})