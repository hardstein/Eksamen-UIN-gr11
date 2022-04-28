import client from '../client'

export const deleteData = async () => {
  await client
    .delete({ query: '*[_type == "comment"][0...999]' })
    .then(console.log)
    .catch(console.error)
}
