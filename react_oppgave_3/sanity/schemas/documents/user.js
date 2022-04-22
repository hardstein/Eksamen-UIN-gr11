// - Document
// - Name (type: string)
// - Email (type: string)

export default {
    type: 'document',
    name: 'user',
    title: 'Bruker',
    fields: [
        {
            type: 'string',
            name: 'name',
            title: 'Navn',
        },
        {
            type: 'string',
            name: 'email',
            title: 'Email',
        },
    ],
    preview: {
        select: {
            title: 'name'
        }
    }
}