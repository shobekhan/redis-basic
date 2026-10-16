
import { createClient } from 'redis'

const client = createClient({
  url: 'redis://localhost:6379'
})

client.on('error', (error) => {
  console.error('Redis error:', error)
})

async function main() {
  await client.connect()

  // Save data in Redis
  await client.set('user:1', 'Alice is with id 1')

  // Read data from Redis
  const user = await client.get('user:1')

  console.log('User from Redis:', user)

  await client.quit()
}

main().catch(console.error)