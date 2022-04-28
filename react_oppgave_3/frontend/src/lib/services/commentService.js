import client from '../client'

export const createComment = async (body) => {
  const { createdBy, comment, lessonRef } = body
  // Bruker try / catch for å håndtere feil som kan oppstå
  try {
    // Kaller .create
    // Spesifiserer hvor vi skal lagre det (ref name="contact" på schema)
    // Sender med name og message som contact-schema har som felter
    await client.create({ _type: 'comment', createdBy, comment, lesson: { _type: 'reference', _ref: lessonRef} })
    // await client.create({ _type: 'comment', createdBy, comment, lesson: { _type: 'reference', _ref: '707ae4da-4698-4dc4-8259-74437dd6f4f3'} })
  } catch (error) {
    // Sender feilmelding tilbake om noe går galt
    throw new Error(error)
  }
}