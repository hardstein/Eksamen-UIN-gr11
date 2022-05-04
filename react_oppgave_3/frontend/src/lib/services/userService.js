import client from '../client'

export const createUser = async (body) => {
  const { name, email } = body
  await client.create({ _type: 'user', name, email })
}
