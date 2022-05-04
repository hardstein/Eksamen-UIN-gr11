import client from '../client'

// Kun brukt for å slette alle obejektene som blir laget. Ble mange kommentarer da funksjonaliteten ble implementert.
export const deleteData = async () => {
  await client
    .delete({ query: '*[_type == "comment"][0...999]' })
    .then(console.log)
    .catch(console.error)
}
