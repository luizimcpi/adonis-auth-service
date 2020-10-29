'use strict'

const { test, trait } = use('Test/Suite')('User')
const User = use('App/Models/User')

trait('Test/ApiClient')

test('create an User with correct information should success', async ({ client }) => {

  const response = await client.post('/api/users')
  .send({
    username: 'user1test',
    email: 'user1test@gmail.com',
    password: 'teste1234'
  }).end()

  response.assertStatus(201)
  response.assertJSONSubset({
    username: 'user1test',
    email: 'user1test@gmail.com'
  })
})

test('create duplicated User with correct information should return conflict', async ({ client }) => {

  await client.post('/api/users')
  .send({
    username: 'user2test',
    email: 'user2test@gmail.com',
    password: 'teste1234'
  }).end()

  const response = await client.post('/api/users')
  .send({
    username: 'user2test',
    email: 'user2test@gmail.com',
    password: 'teste1234'
  }).end()

  response.assertStatus(409)
  const responseConflict = {statusCode: 409, status: 'Conflict', message: 'User Already exists'}
  response.assertJSONSubset({
    description: responseConflict
  })
})