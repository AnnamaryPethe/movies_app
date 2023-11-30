const redis = require('redis')
require('dotenv').config()

let client

(async () => {
  client = redis.createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`})

  client.on("error", (error) => console.error(`Error : ${error}`))

  await client.connect()
})()

module.exports = {
  client
};