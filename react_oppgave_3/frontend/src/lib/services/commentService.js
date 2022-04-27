import client from '../client'

export const createComment = async (body) => {
  // Henter ut name og message som funksjonen mottar
  const { createdBy, comment, lesson } = body
  // Bruker try / catch for å håndtere feil som kan oppstå
  try {
    // Kaller .create
    // Spesifiserer hvor vi skal lagre det (ref name="contact" på schema)
    // Sender med name og message som contact-schema har som felter
    await client.create({ _type: 'comment', createdBy, comment, lesson })
  } catch (error) {
    // Sender feilmelding tilbake om noe går galt
    throw new Error(error)
  }
}