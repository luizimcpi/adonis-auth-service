'use strict'

const { test, trait } = use('Test/Suite')('Home')

trait('Test/ApiClient')

test('health check is up', async ({ client }) => {
 
  const response = await client.get('/api/health-check').end()

  response.assertStatus(200)
  response.assertJSONSubset({
    status: 'UP'
  })
})