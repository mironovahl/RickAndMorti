import { gql } from '@apollo/client'

import { CHARACTER_FIELDS } from '../fragments'

const getCharacters = gql`
  ${CHARACTER_FIELDS}
  query Characters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      results {
        ...CharacterFields
      }
    }
  }
`

export { getCharacters }
