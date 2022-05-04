import client from '../client'

export const createComment = async (body) => {
  const { createdBy, comment, lessonRef } = body
  // await client.create({ _type: 'comment', createdBy, comment, lesson: { _type: 'reference', _ref: '707ae4da-4698-4dc4-8259-74437dd6f4f3'} })
  await client.create({
    _type: 'comment',
    createdBy,
    comment,
    lesson: { _type: 'reference', _ref: lessonRef },
  })
}
