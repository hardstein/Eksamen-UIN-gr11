// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import course from './documents/course'
import lesson from './documents/lesson'
import lessonText from './object/lessonText'
import comment from './documents/comment'
import user from './documents/user'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    course,
    lesson,
    lessonText,
    comment,
    user
  ]),
})
