import { mergeResolvers } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'
import path from 'path'

const filesResolversArray = path.join(
  __dirname,
  'modules',
  '**',
  'resolvers.js'
)

const resolversArray = loadFilesSync(filesResolversArray)

const resolvers = mergeResolvers(resolversArray, { all: true })

export default resolvers
