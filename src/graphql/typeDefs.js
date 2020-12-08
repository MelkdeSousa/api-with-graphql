import { mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'
import path from 'path'

const filesGqlArray = path.join(__dirname, 'modules', '**', '*.gql')

const typeDefsArray = loadFilesSync(filesGqlArray)

const typeDefs = mergeTypeDefs(typeDefsArray, { all: true })

export default typeDefs
